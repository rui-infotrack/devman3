import createReducer from 'utils/createReducer';
import * as t from './actionTypes';

export default createReducer({ number: 1 }, {
  [t.INCREMENT]: state => ({ ...state, number: state.number + 1 }),

  [t.DECREMENT]: state => ({ ...state, number: state.number - 1 })
});
