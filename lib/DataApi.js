class DataApi {
  
  constructor(rawData) {
    this.rawData = rawData;
  }

  getArticles() {
    return this.mapIntoObject(this.rawData.articles);
  }

  getAuthors() {
    return this.mapIntoObject(this.rawData.authors);
  }

  mapIntoObject(data) {
    return data.reduce((acc, elem) => {
      acc[elem.id] = elem;
      return acc;
    }, {});
  }
}

export default DataApi;