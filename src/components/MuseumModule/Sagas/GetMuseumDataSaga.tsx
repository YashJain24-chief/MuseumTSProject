import {put, call} from 'redux-saga/effects';
import {dispatchDataAction, dispatchError, dispatchLoading} from '../Actions';
import getMuseumData from '../service-file/getMuseumData';

export default function* GetMuseumDataSaga(): any {
  yield put(dispatchLoading());
  try {
    const response = yield getMuseumData();
    yield put(dispatchDataAction(response));
  } catch (error) {
    yield put(dispatchError());
  }
}
