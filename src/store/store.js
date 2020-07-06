import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(combineReducers(), applyMiddleware());
sagaMiddleware.run(rootSaga);

export default store;
