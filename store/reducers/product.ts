import { List, Map } from 'immutable';

import { FETCH_PRODUCT_LIST } from '../../common/constants/actions/product';

export const defaultState = Map({
  products: Map({}),
  keys: List([]) as List<string>,
  count: 0
});

const state = (product = defaultState, { type, payload }: any) => {
  const newState = product;
  switch (type) {
    case FETCH_PRODUCT_LIST: {
      console.log(payload);
      break;
    }
    default:
  }

  return newState;
};

export default state;
