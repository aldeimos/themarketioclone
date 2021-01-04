import { List, Map } from 'immutable';

export const mapCategoriesList = (categoryName: string, state: any, data: any): any => {
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

export const mapGenericList = (
  entityName: string,
  state: any,
  payload: any,
  isAppending = false
): any => {
  const { data } = payload;

  let newState = state;
  let keys = newState.get('keys');
  let entities = isAppending ? state.get(entityName) : Map({});

  data.forEach((item) => {
    if (!keys.includes(item.id)) {
      keys = keys.push(item.id);
    }

    const mappedItem = Map(item);
    entities = entities.set(item.id, mappedItem);
  });

  newState = newState.set(entityName, entities).set('keys', keys);

  return newState;
};

export const splitKeys = (keysField: string, state: any, data: any): any => {
  let newState = state;
  let resultKeys = newState.get(keysField);

  data.forEach((item) => {
    if (!resultKeys.includes(item.id)) {
      resultKeys = resultKeys.push(item.id);
    }
  });

  newState = newState.set(keysField, resultKeys);

  return newState;
};
