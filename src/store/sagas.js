import { all, put, call, take, takeLatest, fork, cancel, cancelled } from 'redux-saga/effects';
import {
  LOAD_DATA,
  CANCEL_LOAD_DATA,
  DELETE_CARD,
  ADD_NEW_CARD,
  NEW_TRANSACTION,
  CANCEL_ADD_NEW_CARD,
  CANCEL_DELETE_CARD,
  CANCEL_NEW_TRANSACTION,
  putData,
  loadData,
  setDeleted,
  setCardCreated,
  setTransactionComplete,
} from './reducers/cardReducer';

function* workerLoadData() {
  const controller = new AbortController();
  try {
    const response = yield call(fetch, 'http://localhost:3001/cards', {
      signal: controller.signal,
    });

    if (response.ok) {
      const json = yield response.json();
      yield put(putData(json));
    }
  } finally {
    if (yield cancelled()) {
      controller.abort();
    }
  }
}

function* workerPostData(action) {
  const controller = new AbortController();
  try {
    const response = yield call(fetch, 'http://localhost:3001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(action.payload),
      signal: controller.signal,
    });
    const json = yield response.json();
    // TODO сначала редирект, а только потом подгружается дата
    yield put(loadData());
    yield put(setCardCreated(json.id));
  } finally {
    if (yield cancelled()) {
      controller.abort();
    }
  }
}

function* workerTransactions(action) {
  const controller = new AbortController();
  try {
    yield call(fetch, 'http://localhost:3001/cards/' + action.payload.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(action.payload.data),
      signal: controller.signal,
    });
    yield put(loadData());
    yield put(setTransactionComplete(true));
  } finally {
    if (yield cancelled()) {
      controller.abort();
    }
  }
}

function* workerDeleteData(action) {
  const controller = new AbortController();
  try {
    yield call(fetch, 'http://localhost:3001/cards/' + action.payload, {
      method: 'DELETE',
      signal: controller.signal,
    });
    yield put(loadData());
    yield put(setDeleted(action.payload));
  } finally {
    if (yield cancelled()) {
      controller.abort();
    }
  }
}

function* watchLoadData() {
  while (true) {
    const bgSyncTask = yield takeLatest(LOAD_DATA, workerLoadData);
    yield take(CANCEL_LOAD_DATA);
    yield cancel(bgSyncTask);
  }
}

function* watchPostData() {
  while (true) {
    const bgSyncTask = yield takeLatest(ADD_NEW_CARD, workerPostData);
    yield take(CANCEL_ADD_NEW_CARD);
    yield cancel(bgSyncTask);
  }
}

function* watchDeleteData() {
  while (true) {
    const bgSyncTask = yield takeLatest(DELETE_CARD, workerDeleteData);
    yield take(CANCEL_DELETE_CARD);
    yield cancel(bgSyncTask);
  }
}

function* watchTransactions() {
  while (true) {
    const bgSyncTask = yield takeLatest(NEW_TRANSACTION, workerTransactions);
    yield take(CANCEL_NEW_TRANSACTION);
    yield cancel(bgSyncTask);
  }
}

export default function* rootSaga() {
  yield all([
    fork(watchLoadData),
    fork(watchPostData),
    fork(watchDeleteData),
    fork(watchTransactions),
  ]);
}
