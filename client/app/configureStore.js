import rootReducer from './rootReducer';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
import {
  applyMiddleware,
  compose,
  createStore
} from 'redux';

export default () => {
  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(
        thunk,
        routerMiddleware(browserHistory)
      )
    )
  );

  if (module.hot) {
    module.hot.accept('./rootReducer', () => {
      const nextRootReducer = require('./rootReducer');

      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
};
