import {configureStore} from '@reduxjs/toolkit';
import museumReducer from '../components/MuseumModule/Reducers/MuseumReducer';
import museumReducerSpecific from '../components/MuseumModule/Reducers/MuseumSpecificReducer';
import createSagaMiddleware from 'redux-saga';
import RootSaga from './RootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  middleware: defaultMiddleware =>
    defaultMiddleware({thunk: false}).prepend(sagaMiddleWare),
  reducer: {
    museumData: museumReducer,
    museumDataSpecific: museumReducerSpecific,
  },
});

sagaMiddleWare.run(RootSaga);

export default store;
