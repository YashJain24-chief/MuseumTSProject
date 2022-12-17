import {put, call} from 'redux-saga/effects';
import getMuseumSpecificData from '../service-file/getMuseumSpecificData';

export default function* GetMuseumSpecificData(action: any): any {
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
