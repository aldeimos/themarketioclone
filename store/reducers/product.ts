import { List, Map } from 'immutable';

import { FETCH_PRODUCT_LIST } from '../../common/constants/actions/product';
import { mapGenericList, splitKeys } from './abstract';

export const defaultState = Map({
  products: Map({}),
  keys: List([]) as List<string>,
  menKeys: List([]) as List<string>,
  womenKeys: List([]) as List<string>,
  count: 0
});

const state = (product = defaultState, { type, payload }: any) => {
  let newState = product;

  switch (type) {
    case FETCH_PRODUCT_LIST: {
      const { gender, data } = payload;
      newState = mapGenericList('products', newState, payload, true);
      newState = splitKeys(`${gender}Keys`, newState, data);
      break;
    }
    default:
  }

  return newState;
};

export default state;
