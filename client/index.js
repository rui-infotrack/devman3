require('app/global.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'app/Root';

window.onload = () => {
  const root = document.createElement('div');
  root.id = 'app';
  document.body.appendChild(root);
  ReactDOM.render((
    <Root />
  ), document.getElementById('app'));
};
