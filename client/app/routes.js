import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Layout from './components/Layout';
import log from 'features/log';

export default (
  <Route path="/" component={Layout}>
    <IndexRedirect to="logs/production" />
    <Route path="logs/production" component={log.components.MasterView} env="production" />
    <Route path="logs/stage" component={log.components.MasterView} env="stage" />
    <Route path="logs/test" component={log.components.MasterView} env="test" />
  </Route>
);
