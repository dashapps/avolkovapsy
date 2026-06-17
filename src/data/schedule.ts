import { PRIMARY_CONTACT_LINK } from './site';

export type ScheduleItem = {
  id: 'group' | 'event' | 'consultation';
  title: string;
  date?: string;
  time?: string;
  location?: string;
  format: string;
  duration?: string;
  price: string;
  description: string;
  button_text: string;
  button_url: string;
  active: boolean;
};

export const scheduleItems: ScheduleItem[] = [
  {
    id: 'group',
    title: 'Ближайшая группа',
    date: 'Дата уточняется',
    time: 'Время уточняется',
    location: 'Онлайн',
    format: 'Групповая перезагрузка',
    duration: 'Уточняется',
    price: 'Стоимость уточняется',
    description: 'Групповая работа для восстановления ресурса и внутренней устойчивости.',
    button_text: 'Записаться',
    button_url: PRIMARY_CONTACT_LINK,
    active: true,
  },
  {
    id: 'event',
    title: 'Ближайший ивент',
    date: 'Дата уточняется',
    location: 'Уточняется',
    format: 'Событие',
    duration: 'Уточняется',
    price: 'Стоимость уточняется',
    description: 'Живой формат встречи с короткой практикой и понятным фокусом.',
    button_text: 'Подробнее',
    button_url: PRIMARY_CONTACT_LINK,
    active: true,
  },
  {
    id: 'consultation',
    title: 'Индивидуальная работа',
    format: 'Онлайн / очно по договорённости',
    price: 'Стоимость уточняется',
    description: 'Дата и время согласуются индивидуально.',
    button_text: 'Записаться',
    button_url: PRIMARY_CONTACT_LINK,
    active: true,
  },
];
