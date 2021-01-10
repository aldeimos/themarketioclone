import { Dispatch } from 'redux';

import { FETCH_PRODUCT_LIST, SET_PRODUCT_LIKE } from '../../common/constants/actions/product';
import { API_ROUTES, makeApiCall } from '../../services/api/api';

export const getWomenNewestProducts = () => async (
  dispatch: Dispatch<{ type: string; payload: { data } }>
): Promise<unknown> => {
  const token = localStorage.getItem('token');

  const options = {
    method: 'GET',
    headers: {}
  };

  if (token) {
    (options as any).headers.authorization = `Bearer ${token}`;
  }

  const response = await makeApiCall(API_ROUTES.newestWomen, { ...options });
  const correctPayload = {
    data: [...response],
    gender: 'women'
  }; // Булщит, чтобы отличать в редьюсере, для какого гендера популярные товары

  return dispatch({
    type: FETCH_PRODUCT_LIST,
    payload: correctPayload
  });
};

export const getManNewestProducts = () => async (
  dispatch: Dispatch<{ type: string; payload: { data } }>
): Promise<unknown> => {
  const token = localStorage.getItem('token');

  const options = {
    method: 'GET',
    headers: {}
  };

  if (token) {
    (options as any).headers.authorization = `Bearer ${token}`;
  }

  const response = await makeApiCall(API_ROUTES.newestMan, { ...options });
  const correctPayload = {
    data: [...response],
    gender: 'men'
  }; // Булщит, чтобы отличать в редьюсере, для какого гендера популярные товары

  return dispatch({
    type: FETCH_PRODUCT_LIST,
    payload: correctPayload
  });
};

export const manageProductLikeMark = (productId: string, method: string, value: boolean) => async (
  dispatch: Dispatch<{ type: string; payload: { productId: string; value: boolean } }>
): Promise<unknown> => {
  const token = localStorage.getItem('token');

  await makeApiCall(`items/${productId}/likes`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`
    }
  });

  return dispatch({
    type: SET_PRODUCT_LIKE,
    payload: {
      productId,
      value
    }
  });
};
