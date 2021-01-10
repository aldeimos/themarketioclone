interface NavigationOption {
  label: string;
  link: string;
}

export const navigationOptions: { [key: string]: NavigationOption } = {
  agreement: {
    link: '/agreement',
    label: 'Пользовательское соглашение'
  },
  privacyPolicy: {
    link: '/privacypolicy',
    label: 'Политика конфиденциальности'
  },
  services: {
    link: '/services',
    label: 'Сервисы'
  },
  faq: {
    link: '/faq',
    label: 'FAQ'
  },
  termsAndConditions: {
    link: '/termsandconditions',
    label: 'Правила оказания услуг'
  },
  contacts: {
    link: '/contacts',
    label: 'Контакты'
  },
  blog: {
    link: '/blog',
    label: 'Блог'
  },
  howSecureDealWorks: {
    link: '/how-secure-deal-works',
    label: 'Безопасная сделка'
  },
  secureDealRules: {
    link: '/securedealrules',
    label: 'Правила безопасной сделки'
  }
};

export const footerLinksSet = [
  navigationOptions.agreement,
  navigationOptions.privacyPolicy,
  navigationOptions.services,
  navigationOptions.faq,
  navigationOptions.termsAndConditions,
  navigationOptions.contacts,
  navigationOptions.blog,
  navigationOptions.howSecureDealWorks,
  navigationOptions.secureDealRules
];
