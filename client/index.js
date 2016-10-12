
import React from 'react';
import ReactDOM from 'react-dom';

window.onload = () => {
  fetch('https://api.cdnjs.com/libraries/jquery')
    .then(r => r.json())
    .then(r => console.log(r));
  const root = document.createElement('div');
  root.id = 'app';
  document.body.appendChild(root);
  ReactDOM.render((
    <h1>Hello React</h1>
  ), document.getElementById('app'));
};
