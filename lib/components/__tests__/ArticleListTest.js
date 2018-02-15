import React from 'react';

import ArticleList from '../ArticleList';

import renderer from "react-test-renderer";

import 'babel-polyfill'

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {id: 'abc'},
      b: {id: 'abcde'},
    },
    articleActions:{
      lookupAuthor: jest.fn(()=>({})),
    }
  };
  it('renders correctly', () => {
    const tree = renderer.create(
      <ArticleList
        {...testProps}
      />
    ).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
