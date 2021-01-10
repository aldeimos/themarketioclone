import { fromJS, Map } from 'immutable';
import { createWrapper, HYDRATE, MakeStore } from 'next-redux-wrapper';
import { AnyAction, applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { combineReducers } from 'redux-immutable';
import thunk from 'redux-thunk';

import { blog, product, sexCategory, user } from './reducers';

const composeEnhancers = composeWithDevTools({
  trace: process.env.NODE_ENV === 'development'
});

const rootReducer = combineReducers({
  product,
  sexCategory,
  blog,
  user
});

const hydrationReducer = (state: any = Map({}), action: AnyAction) => {
  if (action.type === HYDRATE) {
    const nextState = state.merge(action.payload);
    if (state.count) nextState.count = state.count;
    return nextState;
  }
  return rootReducer(state, action);
};

const makeStore: MakeStore = () =>
  createStore(hydrationReducer, composeEnhancers(applyMiddleware(thunk)));

export const wrapper = createWrapper<any>(makeStore, {
  debug: false,
  serializeState: (state: any) => state.toJS(),
  deserializeState: (state: any) => fromJS(state)
});
