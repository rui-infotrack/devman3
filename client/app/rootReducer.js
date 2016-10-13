import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import counter from 'features/counter';

export default combineReducers({
  [counter.constants.NAME]: counter.reducer,
  routing: routerReducer
});
