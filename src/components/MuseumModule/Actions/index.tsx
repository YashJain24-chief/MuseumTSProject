import {MuseumActions} from './constants';

export function dispatchMuseumDataAction() {
  return {
    type: MuseumActions.GET_MUSEUM_DATA,
  };
}

export function dispatchMuseumSpecificDataAction(id: number) {
  return {
    type: MuseumActions.GET_MUSEUM_SPECIFIC_DATA,
    payload: id,
  };
}
