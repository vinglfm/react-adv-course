import React from 'react';
import ArrticleList from './ArticleList';
import PropTypes from 'prop-types';

export default class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  state = this.props.store.getState();

  render() {
    return (
      <ArrticleList articles={this.state.articles} />
    );
  }
}
