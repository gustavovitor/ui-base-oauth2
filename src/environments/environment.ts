const PrimaryWebService = 'http://localhost:8080/';

export const environment = {
  production: false,

  TokenWhitelistedDomains: [/localhost:8080/],
  TokenBlacklistedRoutes: [/\/oauth\/token/],

  WebServiceList: {
    URLAuth: PrimaryWebService + 'oauth/token',
    URLUser: PrimaryWebService + 'user',
    URLLogout: PrimaryWebService + 'token/revoke'
  },

  SuccessSummaryMessages: [
    'Uufs, consegui.',
    'Opa, deu certo!',
    'Beleza, consegui!'
  ],

  WarningSummaryMessages: [
    'Ei, atenção!',
    'Cuidado, olhe bem..',
    'Calma aí, falta algo?'
  ],

  ErrorSummaryMessages: [
    'Hm, algo deu errado.',
    'Vish, pegou fogo aqui.',
    'Pera, fiquei sobrecarregado!'
  ],

  InfoSummaryMessages: [
    'Ei, olhe aqui..',
    'Sabia dessa?'
  ]
};
