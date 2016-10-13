import * as t from './actionTypes';

export const loadEntries = () => ({
  type: t.LOAD_ENTRIES_PENDING
});

export const loadEntriesSuccess = entries => ({
  type: t.LOAD_ENTRIES_SUCCESS,
  payload: { entries }
});

export const loadEntriesFailure = error => ({
  type: t.LOAD_ENTRIES_FAILURE,
  payload: { error }
});
