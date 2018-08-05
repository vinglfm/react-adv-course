import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Store from 'data-api';
import axios from 'axios';
import config from 'config';
import App from 'components/App';

const serverRender = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const store = new Store(resp.data);
  return {
    initialContent: ReactDOMServer.renderToString(
      <App store={store} />
    ),
    initialData: resp.data
  };
};

export default serverRender;