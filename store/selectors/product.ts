import { Collection } from 'immutable';
import { createSelector } from 'reselect';

export const storeSubsection = (store: Collection.Keyed<string, any>): any => store.get('product');

const genderType = (store: Collection.Keyed<string, any>, props: { genderType: string }) => {
  return props.genderType;
};

export const getEntitiesIdsByGender = createSelector(
  storeSubsection,
  genderType,
  (store: any, gender) => {
    return store.get(`${gender}Keys`).toArray();
  }
);
