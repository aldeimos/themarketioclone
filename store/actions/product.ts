import { Dispatch } from 'redux';

import { FETCH_PRODUCT_LIST } from '../../common/constants/actions/product';
import { API_ROUTES, makeApiCall } from '../../services/api';

export const getWomenNewestProducts = () => async (
  dispatch: Dispatch<{ type: string; payload: { data } }>
): Promise<unknown> => {
  const response = await makeApiCall(API_ROUTES.newestWomen, { method: 'GET' });
  const correctPayload = {
    data: {
      items: [...response],
      genderType: 'women'
    }
  }; // Булщит, чтобы отличать в редьюсере, для какого гендера популярные товары

  return dispatch({
    type: FETCH_PRODUCT_LIST,
    payload: correctPayload
  });
};

export const getManNewestProducts = () => async (
  dispatch: Dispatch<{ type: string; payload: { data } }>
): Promise<unknown> => {
  const response = await makeApiCall(API_ROUTES.newestMan, { method: 'GET' });
  const correctPayload = {
    data: {
      items: [...response],
      genderType: 'man'
    }
  }; // Булщит, чтобы отличать в редьюсере, для какого гендера популярные товары

  return dispatch({
    type: FETCH_PRODUCT_LIST,
    payload: correctPayload
  });
};
