import React from 'react';
import ArticleList from '../ArticleList';

import renderer from 'react-test-renderer';

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a:{id: 'a'},
      b:{id: 'b'}
    },
    store: {
      lookupAuthor: jest.fn(() => ({}))
    }
  };

  it('renders correctly', () => {
    const element = renderer.create(
      <ArticleList articles={testProps.articles} store={testProps.store}/>
    ).toJSON();
    expect(element.children.length).toBe(2);
    expect(element).toMatchSnapshot();
  });
});