import { assets } from './assets';

const galleryAssets = [
  ...assets.cloudinary.desktop,
  ...assets.cloudinary.tablet,
  ...assets.cloudinary.mobile,
].filter((asset) => asset.secure_url);

export const galleryItems = galleryAssets.map((asset, index) => ({
  src: asset.secure_url,
  width: asset.width,
  height: asset.height,
  alt: asset.display_name || `Фото события ${index + 1}`,
  caption: asset.display_name || 'Групповая работа',
}));
