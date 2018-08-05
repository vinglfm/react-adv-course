import React from 'react';
import ReactDOMServer from 'react-dom/server';
import DataApi from 'data-api';
import axios from 'axios';
import config from 'config';
import App from 'components/App';

const initialState = async () => {
  const resp = await axios.get(`http://${config.host}:${config.port}/data`);
  const api = new DataApi(resp.data);
  return {
    articles: api.getArticles(),
    authors: api.getAuthors()
  };
};

const serverRender = async () => {
  let initialData = await initialState();
  return {
    initialContent: ReactDOMServer.renderToString(
      <App initialData={initialData} />
    ),
    initialData
  };
};

export default serverRender;