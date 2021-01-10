import { Collection } from 'immutable';
import { createSelector } from 'reselect';

export const storeSubsection = (store: Collection.Keyed<string, any>): any => {
  return store.get('user');
};

export const getUser = createSelector(storeSubsection, (store) => {
  const user = store.get('user');
  return user ? user.toJS() : null;
});
