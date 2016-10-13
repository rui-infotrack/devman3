import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import Layout from './components/Layout';
import log from 'features/log';

export default (
  <Route path="/" component={Layout}>
    <IndexRedirect to="logs" />
    <Route path="logs" component={log.components.MasterView} />
  </Route>
);
