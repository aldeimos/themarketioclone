import { Map } from 'immutable';

export const mapGenericList = (entityName: string, state: any, data: any) => {
  let newState = state;
  const keys = newState.get('keys');

  let entities = Map({});

  data.forEach((item: any) => {
    const mappedItem = Map(item);

    entities = entities.set(item.id, mappedItem);
  });

  newState = newState.set(entityName, entities).set('keys', keys);

  return newState;
};
