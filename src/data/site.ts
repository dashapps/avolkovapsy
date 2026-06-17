export const PRIMARY_CONTACT_LINK = import.meta.env.PRIMARY_CONTACT_LINK ?? 'https://t.me/username';

export const siteMeta = {
  title: 'Перезагрузка без паузы от жизни — Александра Волкова',
  description:
    'Психологические группы, события и индивидуальная работа Александры Волковой для тех, кто живёт в напряжении, высокой ответственности и постоянном потоке задач.',
  siteUrl: import.meta.env.PUBLIC_SITE_URL ?? 'https://avolkovapsy.ru',
  locale: 'ru_RU',
  image: '/og-image.jpg',
};

export const person = {
  name: 'Александра Волкова',
  jobTitle: 'Психолог',
  areaServed: 'Россия',
  sameAs: ['https://t.me/username', 'https://instagram.com/', 'https://vk.com/'],
};
