import { Collection } from 'immutable';
import { createSelector } from 'reselect';

export const storeSubsection = (store: Collection.Keyed<string, any>): any =>
  store.get('sexCategory');

export const getMenCategories = createSelector(storeSubsection, (test) => {
  return test.get('menCategories').valueSeq().toJS();
});
