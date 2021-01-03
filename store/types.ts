export type ProductCategory = {
  id: number;
  name: string;
  relativeUrl: string;
  translations: {
    en: string;
    ru: string;
  };
  concreteCategories: ProductCategory[];
};

export type SexCategory = {
  id: number;
  name: string;
  translations: {
    en: string;
    ru: string;
  };
  relativeUrl: string;
  categories: ProductCategory[];
};
