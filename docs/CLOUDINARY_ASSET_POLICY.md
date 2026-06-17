# Cloudinary Asset Policy

Cloudinary is the source of truth for design images. The project must not guess image URLs, use temporary Figma MCP image URLs, or create CSS placeholder illustrations in place of real design assets.

Cloudinary assets are discovered by `scripts/sync-cloudinary-assets.mjs`.

Run:

`node scripts/sync-cloudinary-assets.mjs`

Generated asset map:

`src/data/assets.ts`

Components must import images from `src/data/assets.ts`.

The sync reads these Cloudinary folders via the Admin API:

- `Avolkovapsy/Desktop`
- `Avolkovapsy/Tablet`
- `Avolkovapsy/Mobile`
- `Avolkovapsy/SEO`
- `Avolkovapsy/Icons`

Required environment variables:

- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`

Never commit Cloudinary secrets or print `CLOUDINARY_API_SECRET`.
