import { Map } from 'immutable';

import * as actions from '../../common/constants/actions/user';

export const defaultState = Map({
  user: Map({})
});

const state = (user = defaultState, { type, payload }: { type: string; payload: any }): any => {
  let newState = user;

  switch (type) {
    case actions.FETCH_USER_PROFILE: {
      newState = newState.set('user', Map(payload));
      break;
    }
    default:
  }

  return newState;
};

export default state;
