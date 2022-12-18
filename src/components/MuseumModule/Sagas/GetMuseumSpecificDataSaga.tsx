import {put} from 'redux-saga/effects';
import Action from '../Types/Action';
import getMuseumSpecificData from '../service-file/getMuseumSpecificData';
import {
  dispatchDataSpecificAction,
  dispatchErrorSpecific,
  dispatchLoadingSpecific,
} from '../Actions';

export default function* GetMuseumSpecificData(action: Action): any {
  yield put(dispatchLoadingSpecific());
  try {
    const response = yield getMuseumSpecificData(action.payload);
    yield put(dispatchDataSpecificAction(response));
  } catch (error) {
    yield put(dispatchErrorSpecific());
  }
}
