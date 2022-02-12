export const ROUTES = {
  HOME: '/',
  EXCHANGE: '/exchange/:id?',
  RULES: '/rules',
  FAQ: '/faq',
  REVIEWS: '/reviews',
  CONTACTS: '/contacts',
  ACCOUNT: '/account',
  ACCOUNT_PRIVACY_SETTINGS: '/account/settings',
  ACCOUNT_REQUESTS: '/account/requests',
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
];

export const ACCOUNT_NAVS = [
  {
    path: ROUTES.ACCOUNT,
    title: 'Личный кабинет',
  },
  {
    path: ROUTES.ACCOUNT_REQUESTS,
    title: 'Ваши операции',
  },
  {
    path: ROUTES.ACCOUNT_PRIVACY_SETTINGS,
    title: 'Настройки безопасности',
  },
  {
    path: ROUTES.RULES,
    title: 'Правила сайта',
  },
  {
    path: ROUTES.FAQ,
    title: 'FAQ',
  },
];
