import React from 'react';

import ArticleList from '../ArticleList';
import Article from '../Article';
//import renderer from 'react-test-renderer';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

import 'babel-polyfill'

describe('ArticleList', () => {
  const testProps = {
    articles: {
      a: {id: 'abc'},
      b: {id: 'abcde'},
    },
  };

  Article.propTypes = {};

  it('renders correctly', () => {
    const wrapper = shallow(
      <ArticleList
        {...testProps}
      />
    );
    expect(wrapper.find('Article').length).toBe(2);
    expect(wrapper).toMatchSnapshot();
  });
});
