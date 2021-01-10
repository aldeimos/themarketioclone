import { List, Map } from 'immutable';

import { FETCH_PRODUCT_LIST, SET_PRODUCT_LIKE } from '../../common/constants/actions/product';
import { mapGenericList, splitKeys } from './abstract';

export const defaultState = Map({
  products: Map({}),
  keys: List([]) as List<string>,
  menKeys: List([]) as List<string>,
  womenKeys: List([]) as List<string>,
  count: 0
});

const state = (product = defaultState, { type, payload }: any): typeof defaultState => {
  let newState: Map<string, any> = product;

  switch (type) {
    case FETCH_PRODUCT_LIST: {
      const { gender, data } = payload;
      newState = mapGenericList('products', newState, payload, true);
      newState = splitKeys(`${gender}Keys`, newState, data);
      break;
    }
    case SET_PRODUCT_LIKE: {
      const { productId, value } = payload;

      let products = newState.get('products');
      let currentItem = newState.get('products').get(productId);
      const currentItemLikesCount = currentItem.get('likesCount');

      currentItem = currentItem
        .set('isLiked', value)
        .set('likesCount', value ? currentItemLikesCount + 1 : currentItemLikesCount - 1);
      products = products.set(productId, currentItem);

      newState = newState.set('products', products);
      break;
    }
    default:
  }

  return newState;
};

export default state;
