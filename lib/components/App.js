import React from 'react';
import ArrticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';

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

  onStoreChange = () => {
    this.setState(this.props.store.getState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
  }

  compionentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  filterArticles() {
    let {articles, searchTerm} = this.state;
    if(searchTerm) {
      return pickBy(articles, (value) => {
        return value.title.match(searchTerm) || value.body.match(searchTerm);
      });
    }
    return articles;
  }

  render() {
    const articles = this.filterArticles();
    return (
      <div>
        <Timestamp/>
        <SearchBar doSearch={this.props.store.setSearchTerm}/>
        <ArrticleList articles={articles} />
      </div>
    );
  }
}
