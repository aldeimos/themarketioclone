import { Dispatch } from 'redux';

import { FETCH_SEX_CATEGORIES, FETCH_SIZE_LIST } from '../../common/constants/actions/sexCategory';
import { API_ROUTES, makeApiCall } from '../../services/api/api';

export const getCategories = () => async (
  dispatch: Dispatch<{ type: string; payload: Promise<unknown> }>
): Promise<unknown> => {
  const response = await makeApiCall(API_ROUTES.sexCategories, {
    method: 'GET'
  });
  return dispatch({
    type: FETCH_SEX_CATEGORIES,
    payload: response
  });
};

export const getSizes = () => async (
  dispatch: Dispatch<{ type: string; payload: Promise<unknown> }>
): Promise<unknown> => {
  const response = await makeApiCall(API_ROUTES.size, {
    method: 'GET'
  });
  return dispatch({
    type: FETCH_SIZE_LIST,
    payload: response
  });
};
