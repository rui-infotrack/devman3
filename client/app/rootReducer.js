import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import log from 'features/log';

export default combineReducers({
  [log.constants.NAME]: log.reducer,
  routing: routerReducer
});
