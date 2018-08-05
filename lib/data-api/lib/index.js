class StateApi {
  
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
    };
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
}

export default StateApi;