import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { v2 as cloudinary } from 'cloudinary';

const REQUIRED_ENV = ['CLOUDINARY_CLOUD_NAME', 'CLOUDINARY_API_KEY', 'CLOUDINARY_API_SECRET'];
const FOLDERS = {
  desktop: 'Avolkovapsy/Desktop',
  tablet: 'Avolkovapsy/Tablet',
  mobile: 'Avolkovapsy/Mobile',
  seo: 'Avolkovapsy/SEO',
  icons: 'Avolkovapsy/Icons',
};
const HERO_MARKERS = ['hero', 'rectangle-3', 'rectangle-2'];
const SIDE_MARKERS = {
  leftImage: ['left', 'rectangle-3'],
  rightImage: ['right', 'rectangle-2'],
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputPath = resolve(__dirname, '../src/data/assets.ts');

function envStatus() {
  return Object.fromEntries(REQUIRED_ENV.map((key) => [key, Boolean(process.env[key])]));
}

function assertEnv() {
  const status = envStatus();
  const missing = Object.entries(status).filter(([, present]) => !present).map(([key]) => key);
  if (missing.length > 0) {
    console.warn(`Cloudinary environment variables missing: ${missing.join(', ')}`);
    console.warn('Skipping Cloudinary Admin API calls and writing an empty asset map.');
    return false;
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
    secure: true,
  });
  return true;
}

function normalizeAsset(resource, assetFolder) {
  return {
    public_id: resource.public_id ?? '',
    secure_url: resource.secure_url ?? '',
    width: resource.width ?? 0,
    height: resource.height ?? 0,
    format: resource.format ?? '',
    asset_folder: resource.asset_folder ?? resource.folder ?? assetFolder,
    display_name: resource.display_name ?? '',
  };
}

function isActiveImage(resource) {
  return resource.resource_type === 'image' && resource.secure_url && resource.status !== 'deleted';
}

async function withPagination(fetchPage) {
  const resources = [];
  let nextCursor;

  do {
    const response = await fetchPage(nextCursor);
    resources.push(...(response.resources ?? []));
    nextCursor = response.next_cursor;
  } while (nextCursor);

  return resources;
}

async function readFolderByAssetFolder(assetFolder) {
  return withPagination((nextCursor) => cloudinary.api.resources_by_asset_folder(assetFolder, {
    resource_type: 'image',
    type: 'upload',
    max_results: 500,
    next_cursor: nextCursor,
  }));
}

async function readFolderBySearch(assetFolder) {
  const expression = `resource_type:image AND asset_folder="${assetFolder}"`;
  return withPagination((nextCursor) => cloudinary.search
    .expression(expression)
    .sort_by('public_id', 'asc')
    .max_results(500)
    .next_cursor(nextCursor)
    .execute());
}

async function readFolder(assetFolder) {
  try {
    return await readFolderByAssetFolder(assetFolder);
  } catch (error) {
    console.warn(`resources_by_asset_folder failed for ${assetFolder}; falling back to Search API: ${error.message}`);
    return readFolderBySearch(assetFolder);
  }
}

function assetName(asset) {
  return [asset.display_name, asset.public_id].filter(Boolean).join(' ').toLowerCase();
}

function hasAnyMarker(name, markers) {
  return markers.some((marker) => name.includes(marker));
}

function mapHeroForBreakpoint(assets, breakpoint) {
  const matching = { leftImage: '', rightImage: '' };
  const candidates = [];

  for (const asset of assets) {
    const name = assetName(asset);
    const isHero = hasAnyMarker(name, HERO_MARKERS) || name.includes(breakpoint);
    const matchedSides = Object.entries(SIDE_MARKERS).filter(([, markers]) => hasAnyMarker(name, markers));

    if (isHero || matchedSides.length > 0) {
      candidates.push(asset);
    }

    for (const [side] of matchedSides) {
      if (!matching[side]) {
        matching[side] = asset.secure_url;
      } else if (matching[side] !== asset.secure_url) {
        matching[side] = '';
      }
    }
  }

  return { matching, candidates };
}

function buildAssetMap(cloudinaryAssets) {
  const hero = {};
  const unmappedCandidates = {};

  for (const breakpoint of ['desktop', 'tablet', 'mobile']) {
    const { matching, candidates } = mapHeroForBreakpoint(cloudinaryAssets[breakpoint], breakpoint);
    hero[breakpoint] = matching;
    unmappedCandidates[breakpoint] = candidates.filter((asset) => !Object.values(matching).includes(asset.secure_url));
  }

  return { hero, unmappedCandidates };
}

function tsString(value) {
  return JSON.stringify(value, null, 2);
}

async function writeAssetsFile(assets, metadata) {
  const content = `export type CloudinaryAsset = {
  public_id: string;
  secure_url: string;
  width: number;
  height: number;
  format: string;
  asset_folder: string;
  display_name: string;
};

export const assets = ${tsString(assets)} as {
  readonly hero: {
    readonly desktop: { readonly leftImage: string; readonly rightImage: string };
    readonly tablet: { readonly leftImage: string; readonly rightImage: string };
    readonly mobile: { readonly leftImage: string; readonly rightImage: string };
  };
  readonly cloudinary: {
    readonly desktop: readonly CloudinaryAsset[];
    readonly tablet: readonly CloudinaryAsset[];
    readonly mobile: readonly CloudinaryAsset[];
    readonly seo: readonly CloudinaryAsset[];
    readonly icons: readonly CloudinaryAsset[];
  };
};\n\nexport const cloudinaryAssetSync = ${tsString(metadata)} as const;\n`;
  await mkdir(dirname(outputPath), { recursive: true });
  await writeFile(outputPath, content);
}

async function main() {
  const canSync = assertEnv();
  const cloudinaryAssets = Object.fromEntries(Object.keys(FOLDERS).map((key) => [key, []]));

  if (canSync) {
    for (const [key, folder] of Object.entries(FOLDERS)) {
      const resources = await readFolder(folder);
      cloudinaryAssets[key] = resources.filter(isActiveImage).map((resource) => normalizeAsset(resource, folder));
    }
  }

  const { hero, unmappedCandidates } = buildAssetMap(cloudinaryAssets);
  const heroMappedAutomatically = Object.values(hero).some((breakpoint) => breakpoint.leftImage || breakpoint.rightImage);
  const generatedAt = new Date().toISOString();
  const counts = Object.fromEntries(Object.entries(cloudinaryAssets).map(([key, value]) => [key, value.length]));

  await writeAssetsFile({ hero, cloudinary: cloudinaryAssets }, {
    generatedAt,
    folders: FOLDERS,
    env: envStatus(),
    counts,
    heroMappedAutomatically,
    unmappedCandidates,
  });

  console.log('Cloudinary asset sync complete.');
  console.log(`Environment variables: ${Object.entries(envStatus()).map(([key, present]) => `${key}=${present ? 'present' : 'missing'}`).join(', ')}`);
  console.log(`Folders scanned: ${Object.values(FOLDERS).join(', ')}`);
  console.log(`Assets found per folder: ${JSON.stringify(counts)}`);
  console.log(`Generated: ${outputPath}`);
  console.log(`Hero assets mapped automatically: ${heroMappedAutomatically ? 'yes' : 'no'}`);
  console.log(`Unmapped candidates: ${JSON.stringify(Object.fromEntries(Object.entries(unmappedCandidates).map(([key, value]) => [key, value.map(({ public_id, display_name, secure_url }) => ({ public_id, display_name, secure_url }))])), null, 2)}`);
}

main().catch((error) => {
  console.error(`Cloudinary asset sync failed: ${error.message}`);
  process.exitCode = 1;
});
