import React from 'react';
import ArrticleList from './ArticleList';

export default class App extends React.Component {
  state = this.props.store.getState();
  
  render() {
    return (
      <ArrticleList articles={this.state.articles} store={this.props.store} />
    );
  }
}
