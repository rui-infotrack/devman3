import { takeLatest } from 'redux-saga';
import { call, put } from 'redux-saga/effects';
import * as t from './actionTypes';
import * as a from './actions';
import * as api from './api';

export function* loadEntries() {
  try {
    const entries = yield call(api.fetchLogs);
    yield put(a.loadEntriesSuccess(entries));
  } catch (error) {
    yield put(a.loadEntriesFailure(error));
  }
}

export default [
  takeLatest(t.LOAD_ENTRIES_PENDING, loadEntries)
];
