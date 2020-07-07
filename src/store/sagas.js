import { all, put, call, take, takeLatest, fork, cancel, cancelled } from 'redux-saga/effects';
import {
  LOAD_DATA,
  CANCEL_LOAD_DATA,
  putData,
  ADD_NEW_CARD,
  setStatus,
  addNewCard, loadData,
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
      console.log('CANCEL');
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
      console.log('CANCEL');
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
    yield take(CANCEL_LOAD_DATA);
    yield cancel(bgSyncTask);
  }
}

export default function* rootSaga() {
  yield all([fork(watchLoadData), fork(watchPostData)]);
}
