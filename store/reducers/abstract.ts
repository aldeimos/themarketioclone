import { List, Map } from 'immutable';

export const mapCategoriesList = (categoryName: string, state: any, data: any) => {
  const { categories, name } = data;
  let newState = state;
  const baseRelativeUrl = `/search?sex=${name}&concreteCategoryIds=`;

  let category = Map({ ...data });
  let subCategories = List([]);

  categories.forEach((item: any) => {
    const subCategoriesIds: number[] = [];

    item.concreteCategories.forEach((subCategory) => {
      subCategory.relativeUrl = `${baseRelativeUrl}${subCategory.id}`;
      subCategoriesIds.push(subCategory.id);
    });

    item.relativeUrl = `${baseRelativeUrl}${subCategoriesIds.join(',')}`;

    subCategories = subCategories.push(item);
    subCategoriesIds.push(item.id);
  });

  category = category.set('categories', subCategories);

  newState = newState.set(categoryName, category);

  return newState;
};
