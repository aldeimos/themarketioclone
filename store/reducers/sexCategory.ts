import { List, Map } from 'immutable';

import * as actions from '../../common/constants/actions/sexCategory';
import { mapGenericList } from './abstract';

export const defaultState = Map({
  menCategories: Map({}),
  womenCategories: Map({}),
  keys: List([])
});

const state = (sexCategory = defaultState, { type, payload }: any) => {
  let newState = sexCategory;

  switch (type) {
    case actions.FETCH_SEX_CATEGORIES: {
      const { sexCategories } = payload;
      const [menCategories, womenCategories] = sexCategories;
      newState = mapGenericList('menCategories', newState, menCategories.categories);
      newState = mapGenericList('womenCategories', newState, womenCategories.categories);
      break;
    }
    default:
  }

  return newState;
};

export default state;
