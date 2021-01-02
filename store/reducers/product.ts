import { List, Map } from 'immutable';

export const defaultState = Map({
  products: Map({}),
  keys: List([]) as List<string>,
  count: 0
});

const state = (product = defaultState, { type, payload }: any) => {
  const newState = product;
  switch (type) {
    default:
  }

  return newState;
};

export default state;
