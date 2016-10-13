import React from 'react';
import { Route } from 'react-router';
import counter from 'features/counter';

export default (
  <Route path="/" component={counter.components.Counter} />
);
