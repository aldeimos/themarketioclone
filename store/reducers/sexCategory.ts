import { Map } from 'immutable';

import * as actions from '../../common/constants/actions/sexCategory';
import { mapCategoriesList } from './abstract';

export const defaultState = Map({
  menCategories: Map({}),
  womenCategories: Map({})
});

const state = (
  sexCategory = defaultState,
  { type, payload }: { type: string; payload: any }
): any => {
  let newState = sexCategory;

  switch (type) {
    case actions.FETCH_SEX_CATEGORIES: {
      const { sexCategories } = payload;
      const [menCategories, womenCategories] = sexCategories;

      newState = mapCategoriesList('menCategories', newState, menCategories);
      newState = mapCategoriesList('womenCategories', newState, womenCategories);

      break;
    }
    case actions.FETCH_SIZE_LIST: {
      const { categories } = payload;
      const menCategories: any = newState.get('menCategories').get('categories');
      const womenCategories: any = newState.get('womenCategories').get('categories');
      const mappedMenCategories = {};
      const mappedWomenCategories = {};

      menCategories.forEach((cat) => {
        mappedMenCategories[`men-${cat.name}`] = cat;
      });

      womenCategories.forEach((cat) => {
        mappedWomenCategories[`women-${cat.name}`] = cat;
      });

      categories.forEach((cat) => {
        if (cat.sex == 'men' && mappedMenCategories[cat.name]) {
          mappedMenCategories[cat.name].sizes = cat.sizes;
        } else if (mappedWomenCategories[cat.name]) {
          mappedWomenCategories[cat.name].sizes = cat.sizes;
        }
      });

      break;
    }
    default:
  }

  return newState;
};

export default state;
