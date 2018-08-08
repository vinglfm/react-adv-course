class StateApi {
  
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: '',
      timestamp: new Date()
    };
    this.subscriptions = {};
    this.lastSubscriptionId = 0;
  }

  getState = () => {
    return this.data;
  }

  lookupAuthor = (authorId) => {
    return this.data.authors[authorId];
  }

  mapIntoObject(data) {
    return data.reduce((acc, elem) => {
      acc[elem.id] = elem;
      return acc;
    }, {});
  }

  setSearchTerm = (searchTerm) => {
    this.mergeWithState({
      searchTerm
    });
  };

  startClock = () => {    
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    });
  };

  mergeWithState = (stateChanged) => {
    this.data = {
      ...this.data,
      ...stateChanged
    };
    this.notifySubscribers();
  };

  subscribe = (callback) => {
    this.subscriptions[this.lastSubscriptionId] = callback;
    return this.lastSubscriptionId++;
  };

  unsubscribe = (subscriptionId) => {
    delete this.subscriptions[subscriptionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscriptions).forEach((callback) => callback());
  }
}

export default StateApi;