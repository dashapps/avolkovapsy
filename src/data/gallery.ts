export const galleryItems = Array.from({ length: 12 }, (_, index) => ({
  src: `/images/gallery/placeholder-${index + 1}.svg`,
  alt: `Фото события ${index + 1}`,
  caption: 'Групповая работа',
}));
