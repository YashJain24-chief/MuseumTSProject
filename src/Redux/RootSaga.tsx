import GetMuseumDataSaga from '../components/MuseumModule/Sagas/GetMuseumDataSaga';
import GetMuseumSpecificData from '../components/MuseumModule/Sagas/GetMuseumSpecificDataSaga';
import {MuseumActions} from '../components/MuseumModule/constants/ActionConstants';
import {takeEvery} from 'redux-saga/effects';

export default function* RootSaga() {
  yield takeEvery(MuseumActions.GET_MUSEUM_DATA, GetMuseumDataSaga);
  yield takeEvery(
    MuseumActions.GET_MUSEUM_SPECIFIC_DATA,
    GetMuseumSpecificData,
  );
}
