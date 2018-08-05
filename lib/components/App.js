import React from 'react';
import DataApi from '../DataApi';
import {data} from '../testData';
import ArrticleList from './ArticleList';

const api = new DataApi(data);

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors()
    };
  }
  
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  
  render() {
    return (
      <ArrticleList articles={this.state.articles} articleActions={this.articleActions}/>
    );
  }
}
