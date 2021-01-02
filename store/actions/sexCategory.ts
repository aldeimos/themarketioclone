import { Dispatch } from 'redux';

import { makeApiCall } from '../../services/api';

export const getCategories = () => async (
  dispatch: Dispatch<{ type: string; payload: Promise<unknown> }>
): Promise<unknown> => {
  const response = await makeApiCall('dictionaries/sexCategories', {
    method: 'GET'
  });
  return dispatch({
    type: 'FETCH_SEX_CATEGORIES',
    payload: response
  });
};
