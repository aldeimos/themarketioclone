import { List, Map } from 'immutable';

import * as actions from '../../common/constants/actions/sexCategory';
import { mapCategoriesList } from './abstract';

export const defaultState = Map({
  menCategories: Map({}),
  womenCategories: Map({})
});

const state = (sexCategory = defaultState, { type, payload }: any) => {
  let newState = sexCategory;

  switch (type) {
    case actions.FETCH_SEX_CATEGORIES: {
      const { sexCategories } = payload;
      const [menCategories, womenCategories] = sexCategories;

      newState = mapCategoriesList('menCategories', newState, menCategories);
      newState = mapCategoriesList('womenCategories', newState, womenCategories);

      break;
    }
    default:
  }

  return newState;
};

export default state;
