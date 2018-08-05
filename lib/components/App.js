import React from 'react';
import ArrticleList from './ArticleList';

export default class App extends React.Component {
  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors
  };

  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };

  render() {
    return (
      <ArrticleList articles={this.state.articles} articleActions={this.articleActions} />
    );
  }
}
