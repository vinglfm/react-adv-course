import React from 'react';
import ReactDOM from 'react-dom';
import App from 'components/App';
import Store from 'data-api';

const store = new Store(window.initialData);

ReactDOM.hydrate(
  <App store={store}/>,
  document.getElementById('root')
);