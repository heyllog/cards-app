import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

// Reducers
import cardReducer from './reducers/cardReducer';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  combineReducers({
    cards: cardReducer,
  }),
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
