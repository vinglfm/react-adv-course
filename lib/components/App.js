import React from 'react';
import ArticleList from './ArticleList';
import SearchBar from './SearchBar';
import Timestamp from './Timestamp';
import PropTypes from 'prop-types';
import pickBy from 'lodash.pickby';
// import Pref from 'react-addons-perf';//Do not work on react 16

export default class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  };

  getChildContext() {
    return {
      store: this.props.store
    };
  }

  appState = () => {
    const {articles, searchTerm} = this.props.store.getState();
    return {articles, searchTerm};
  };

  state = this.appState();

  onStoreChange = () => {
    this.setState(this.appState());
  }

  componentDidMount() {
    this.subscriptionId = this.props.store.subscribe(this.onStoreChange);
    this.props.store.startClock();
    // setImmediate(() => {
    //   Pref.start();
    // });
    // setTimeout(() => {
    //   Pref.stop();
    //   Pref.printWasted();
    // }, 5000);
  }

  compionentWillUnmount() {
    this.props.store.unsubscribe(this.subscriptionId);
  }

  filterArticles() {
    let {articles, searchTerm} = this.state;
    if(searchTerm) {
      const searchRegExp = new RegExp(searchTerm, 'i');
      return pickBy(articles, (value) => {
        return value.title.match(searchRegExp) || value.body.match(searchRegExp);
      });
    }
    return articles;
  }

  render() {
    const articles = this.filterArticles();
    return (
      <div>
        <Timestamp/>
        <SearchBar/>
        <ArticleList articles={articles} />
        {/* {ArticleList({articles})} */}
      </div>
    );
  }
}
