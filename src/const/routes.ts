export const ROUTES = {
  HOME: '/',
  EXCHANGE: '/exchange/:id?',
  RULES: '/rules',
  FAQ: '/faq',
  REVIEWS: '/reviews',
  CONTACTS: '/contacts',
};

export const NAVS = [
  {
    path: ROUTES.HOME,
    title: 'Главная',
  },
  {
    path: ROUTES.RULES,
    title: 'Правила сайта',
  },
  {
    path: ROUTES.FAQ,
    title: 'FAQ',
  },
  // {
  //   path: ROUTES.REVIEWS,
  //   title: 'Отзывы',
  // },
  // {
  //   path: ROUTES.CONTACTS,
  //   title: 'Контакты',
  // },
];
