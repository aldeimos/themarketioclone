import { List, Map } from 'immutable';

import * as actions from '../../common/constants/actions/blog';
import { mapGenericList } from './abstract';

export const defaultState = Map({
  blogs: Map({}),
  keys: List([]) as List<string>
});

const state = (blog = defaultState, { type, payload }: { type: string; payload: any }): any => {
  let newState = blog;

  switch (type) {
    case actions.FETCH_BLOG_LIST: {
      newState = mapGenericList('blogs', newState, payload);
      break;
    }
    default:
  }

  return newState;
};

export default state;
