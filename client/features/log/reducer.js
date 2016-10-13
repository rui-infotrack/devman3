import createReducer from 'utils/createReducer';
import * as t from './actionTypes';

export default createReducer({
  isLoading: true,
  entries: []
}, {
  [t.LOAD_ENTRIES_PENDING]: state => ({ ...state, isLoading: true }),

  [t.LOAD_ENTRIES_SUCCESS]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      entries: action.payload.entries
    };
  },

  [t.LOAD_ENTRIES_FAILURE]: state => {
    return { ...state, isLoading: false };
  }
});
