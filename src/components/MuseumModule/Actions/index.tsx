import {MuseumActions} from '../constants/ActionConstants';

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

export function dispatchLoading() {
  return {type: MuseumActions.LOADING};
}

export function dispatchDataAction(response: any) {
  return {
    type: MuseumActions.Data,
    payload: response.data.objectIDs.slice(0, 25),
  };
}

export function dispatchError() {
  return {type: MuseumActions.Error};
}

export function dispatchLoadingSpecific() {
  return {type: MuseumActions.LoadingSpecific};
}

export function dispatchDataSpecificAction(response: any) {
  return {
    type: MuseumActions.DataSpecific,
    payload: response.data,
  };
}

export function dispatchErrorSpecific() {
  return {type: MuseumActions.ErrorSpecific};
}
