import {put} from 'redux-saga/effects';
import Action from '../Types/Action';
import getMuseumSpecificData from '../service-file/getMuseumSpecificData';

export default function* GetMuseumSpecificData(action: Action): any {
  yield put({type: 'LoadingSpecific'});
  try {
    const response = yield getMuseumSpecificData(action.payload);
    yield put({
      type: 'DataSpecific',
      payload: response.data,
    });
  } catch (error) {
    yield put({type: 'ErrorSpecific'});
  }
}
