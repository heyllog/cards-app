import { all, put, call, take, takeLatest, fork, cancel, cancelled } from 'redux-saga/effects';
import {
  LOAD_DATA,
  CANCEL_OPERATION,
  DELETE_CARD,
  ADD_NEW_CARD,
  NEW_TRANSACTION,
  putData,
  setStatus,
  loadData,
} from './reducers/cardReducer';

function* workerLoadData() {
  const controller = new AbortController();
  try {
    yield put(setStatus(false));

    const response = yield call(fetch, 'http://localhost:3001/cards', {
      signal: controller.signal,
    });

    if (response.ok) {
      const json = yield response.json();
      yield put(
        putData({
          data: json,
          status: true,
        })
      );
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
    yield put(setStatus(false));
    yield call(fetch, 'http://localhost:3001/cards', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(action.payload),
      signal: controller.signal,
    });
    yield put(loadData());
  } finally {
    if (yield cancelled()) {
      controller.abort();
    }
  }
}

function* workerTransactions(action) {
  const controller = new AbortController();
  try {
    yield put(setStatus(false));
    yield call(fetch, 'http://localhost:3001/cards/' + action.payload.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(action.payload.data),
      signal: controller.signal,
    });
    yield put(loadData());
  } finally {
    // TODO где выкидывать cancel
    if (yield cancelled()) {
      controller.abort();
    }
  }
}

function* workerDeleteData(action) {
  const controller = new AbortController();
  console.log('deleteCard ' + action.payload);
  try {
    yield put(setStatus(false));
    yield call(fetch, 'http://localhost:3001/cards/' + action.payload, {
      method: 'DELETE',
      signal: controller.signal,
    });
    // true
    yield put(loadData());
  } finally {
    if (yield cancelled()) {
      controller.abort();
    }
  }
}

function* watchLoadData() {
  while (true) {
    const bgSyncTask = yield takeLatest(LOAD_DATA, workerLoadData);
    yield take(CANCEL_OPERATION);
    yield cancel(bgSyncTask);
  }
}

function* watchPostData() {
  while (true) {
    const bgSyncTask = yield takeLatest(ADD_NEW_CARD, workerPostData);
    yield take(CANCEL_OPERATION);
    yield cancel(bgSyncTask);
  }
}

function* watchDeleteData() {
  while (true) {
    const bgSyncTask = yield takeLatest(DELETE_CARD, workerDeleteData);
    yield take(CANCEL_OPERATION);
    yield cancel(bgSyncTask);
  }
}

function* watchTransactions() {
  while (true) {
    const bgSyncTask = yield takeLatest(NEW_TRANSACTION, workerTransactions);
    // TODO могу ли я использовать один cancel для всех операций
    yield take(CANCEL_OPERATION);
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
