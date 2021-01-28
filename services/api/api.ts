type FetchOptions = {
  method: string;
  headers?: {
    [key: string]: string;
  };
  body?: any;
};

export const API_ROUTES = {
  sexCategories: 'dictionaries/sexCategories',
  size: 'dictionaries/sizes',
  blog: 'blog/pages',
  login: 'auth/emails/token',
  code: 'auth/emails',
  auth: 'users/self',
  newestWomen:
    'items?concreteCategoryIds[]=50&concreteCategoryIds[]=51&concreteCategoryIds[]=52&concreteCategoryIds[]=53&concreteCategoryIds[]=54&concreteCategoryIds[]=56&concreteCategoryIds[]=57&concreteCategoryIds[]=58&concreteCategoryIds[]=59&concreteCategoryIds[]=60&concreteCategoryIds[]=61&concreteCategoryIds[]=62&concreteCategoryIds[]=63&concreteCategoryIds[]=64&concreteCategoryIds[]=96&concreteCategoryIds[]=66&concreteCategoryIds[]=67&concreteCategoryIds[]=68&concreteCategoryIds[]=69&concreteCategoryIds[]=70&concreteCategoryIds[]=71&concreteCategoryIds[]=72&concreteCategoryIds[]=73&concreteCategoryIds[]=74&concreteCategoryIds[]=97&concreteCategoryIds[]=76&concreteCategoryIds[]=77&concreteCategoryIds[]=78&concreteCategoryIds[]=79&concreteCategoryIds[]=80&concreteCategoryIds[]=98&concreteCategoryIds[]=82&concreteCategoryIds[]=83&concreteCategoryIds[]=84&concreteCategoryIds[]=85&concreteCategoryIds[]=86&concreteCategoryIds[]=87&concreteCategoryIds[]=88&concreteCategoryIds[]=89&concreteCategoryIds[]=90&concreteCategoryIds[]=91&concreteCategoryIds[]=92&concreteCategoryIds[]=93&concreteCategoryIds[]=94&sort=-addedAt',
  newestMan:
    'items?concreteCategoryIds[]=3&concreteCategoryIds[]=4&concreteCategoryIds[]=5&concreteCategoryIds[]=6&concreteCategoryIds[]=7&concreteCategoryIds[]=9&concreteCategoryIds[]=10&concreteCategoryIds[]=11&concreteCategoryIds[]=12&concreteCategoryIds[]=13&concreteCategoryIds[]=14&concreteCategoryIds[]=15&concreteCategoryIds[]=16&concreteCategoryIds[]=17&concreteCategoryIds[]=95&concreteCategoryIds[]=19&concreteCategoryIds[]=20&concreteCategoryIds[]=21&concreteCategoryIds[]=22&concreteCategoryIds[]=23&concreteCategoryIds[]=24&concreteCategoryIds[]=25&concreteCategoryIds[]=26&concreteCategoryIds[]=27&concreteCategoryIds[]=29&concreteCategoryIds[]=30&concreteCategoryIds[]=31&concreteCategoryIds[]=32&concreteCategoryIds[]=33&concreteCategoryIds[]=35&concreteCategoryIds[]=36&concreteCategoryIds[]=37&concreteCategoryIds[]=38&concreteCategoryIds[]=39&concreteCategoryIds[]=40&concreteCategoryIds[]=41&concreteCategoryIds[]=42&concreteCategoryIds[]=43&concreteCategoryIds[]=44&concreteCategoryIds[]=45&concreteCategoryIds[]=46&concreteCategoryIds[]=47&sort=-addedAt',
  search:
    '/items?asdfsadf=1&concreteCategoryIds[]=3&concreteCategoryIds[]=4&concreteCategoryIds[]=5&concreteCategoryIds[]=6&concreteCategoryIds[]=7&concreteCategoryIds[]=9&concreteCategoryIds[]=10&concreteCategoryIds[]=11&concreteCategoryIds[]=12&concreteCategoryIds[]=13&concreteCategoryIds[]=14&concreteCategoryIds[]=15&concreteCategoryIds[]=16&concreteCategoryIds[]=17&concreteCategoryIds[]=95&concreteCategoryIds[]=19&concreteCategoryIds[]=20&concreteCategoryIds[]=21&concreteCategoryIds[]=22&concreteCategoryIds[]=23&concreteCategoryIds[]=24&concreteCategoryIds[]=25&concreteCategoryIds[]=26&concreteCategoryIds[]=27&concreteCategoryIds[]=29&concreteCategoryIds[]=30&concreteCategoryIds[]=31&concreteCategoryIds[]=32&concreteCategoryIds[]=33&concreteCategoryIds[]=35&concreteCategoryIds[]=36&concreteCategoryIds[]=37&concreteCategoryIds[]=38&concreteCategoryIds[]=39&concreteCategoryIds[]=40&concreteCategoryIds[]=41&concreteCategoryIds[]=42&concreteCategoryIds[]=43&concreteCategoryIds[]=44&concreteCategoryIds[]=45&concreteCategoryIds[]=46&concreteCategoryIds[]=47&priceFrom=&priceTo=&sort=-addedAt&skip=0&countryId=&cityId=&isBestOffer=false&isExchangeable=false&escrowAllowed=false&query='
};

export const makeApiCall = async (route: string, options: FetchOptions): Promise<any> => {
  const result = await fetch(`${process.env.API_URI}/${route}`, { ...options });

  try {
    return await result.json();
  } catch (error) {
    return;
  }
};

export const sendAuthCode = async (email: string): Promise<any> => {
  return await makeApiCall(API_ROUTES.code, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email })
  });
};
