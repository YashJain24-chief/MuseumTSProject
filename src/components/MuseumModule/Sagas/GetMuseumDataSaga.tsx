import {put, call} from 'redux-saga/effects';
import getMuseumData from '../service-file/getMuseumData';

export default function* GetMuseumDataSaga(): any {
  yield put({type: 'Loading'});
  try {
    const response = yield getMuseumData();
    yield put({type: 'Data', payload: response.data.objectIDs.slice(0, 25)});
  } catch (error) {
    yield put({type: 'Error'});
  }
}
