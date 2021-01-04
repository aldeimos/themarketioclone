import { Collection } from 'immutable';
import pluralize from 'pluralize';
import { createSelector } from 'reselect';

export const storeSubsection = (
  store: Collection.Keyed<string, any>,
  props: { entityName: string }
): any => {
  return store.get(props.entityName);
};

export const entityName = (store: Collection.Keyed<string, any>, props: { entityName: string }) =>
  props.entityName;

export const ownEntityId = (
  store: Collection.Keyed<string, any>,
  props: { itemId: string | null }
) => props.itemId;

export const getEntityIds = createSelector(storeSubsection, (store: any) => {
  return store.get('keys').toArray();
});

export const getEntities = createSelector(
  storeSubsection,
  entityName,
  (store: any, entity: string) => store.get(pluralize(entity))
);

export const getEntity = createSelector(
  getEntities,
  ownEntityId,
  (ents: any, id: string | null) => {
    const item = ents.get(id);
    return item ? item.toJS() : null;
  }
);
