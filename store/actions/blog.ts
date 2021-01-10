import { Dispatch } from 'redux';

import { FETCH_BLOG_LIST } from '../../common/constants/actions/blog';
import { API_ROUTES, makeApiCall } from '../../services/api/api';

export const getBlogPosts = () => async (
  dispatch: Dispatch<{ type: string; payload: Promise<unknown> }>
): Promise<unknown> => {
  const response = await makeApiCall(API_ROUTES.blog, {
    method: 'GET'
  });

  response.data = [...response];

  return dispatch({
    type: FETCH_BLOG_LIST,
    payload: response
  });
};
