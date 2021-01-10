import { ActionCreator, Dispatch } from 'redux';

import { FETCH_USER_PROFILE } from '../../common/constants/actions/user';
import { API_ROUTES, makeApiCall } from '../../services/api/api';

export const getUser = () => async (
  dispatch: Dispatch<{ type: string; payload: { data: any } }>
): Promise<any> => {
  const token = localStorage.getItem('token');

  if (token) {
    const user = await makeApiCall(API_ROUTES.auth, {
      method: 'GET',
      headers: {
        authorization: `Bearer ${token}`
      }
    });

    return dispatch({
      type: FETCH_USER_PROFILE,
      payload: user
    });
  }

  return dispatch({
    type: FETCH_USER_PROFILE,
    payload: null
  });
};

// TODO разобраться с нормальным типом dispatch

export const getAuthToken = (code: string, email: string) => async (
  dispatch: ActionCreator<{ type: string; payload: { data: any } }>
): Promise<any> => {
  const tokenResponse = await makeApiCall(API_ROUTES.login, {
    method: 'POST',
    body: JSON.stringify({ code, email }),
    headers: { 'Content-Type': 'application/json' }
  });

  if (tokenResponse.token) {
    localStorage.setItem('token', tokenResponse.token);
    return dispatch(getUser());
  }
};

//TODO remove any
export const getUserLogout = () => (dispatch): Dispatch<{ type: string; payload: null }> => {
  localStorage.removeItem('token');

  return dispatch({
    type: FETCH_USER_PROFILE,
    payload: null
  });
};
