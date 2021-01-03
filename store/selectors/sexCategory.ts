import { Collection } from 'immutable';
import { createSelector } from 'reselect';

export const storeSubsection = (store: Collection.Keyed<string, any>): any =>
  store.get('sexCategory');

export const getMenCategories = createSelector(storeSubsection, (store) => {
  return store.get('menCategories').toJS();
});

export const getWomenCategories = createSelector(storeSubsection, (store) => {
  return store.get('womenCategories').toJS();
});
