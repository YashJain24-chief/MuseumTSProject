import {configureStore} from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import museumReducer from '../components/MuseumModule/Reducers/MuseumReducer';
import museumReducerSpecific from '../components/MuseumModule/Reducers/MuseumSpecificReducer';
import RootSaga from './RootSaga';

const sagaMiddleWare = createSagaMiddleware();

const store = configureStore({
  middleware: defaultMiddleware => {
    return defaultMiddleware({thunk: false}).prepend(sagaMiddleWare);
  },
  reducer: {
    museumData: museumReducer,
    museumDataSpecific: museumReducerSpecific,
  },
});

sagaMiddleWare.run(RootSaga);

export default store;
