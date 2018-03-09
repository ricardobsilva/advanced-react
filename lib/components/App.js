import React from 'react';

import DataApi from 'state-api';
import ArticleList from './ArticleList';
import axios from 'axios';
//import {data} from '../testData';
//const api = new DataApi(data);

class App extends React.Component {
  state = {
    authors: this.props.initialData.authors,
    articles: this.props.initialData.articles,
  }
  async componentDidMount() {
    const resp = await axios.get('/data');
    const api = new DataApi(resp.data);

    this.setState(()=> ({
      articles: api.getArticles(),
      authors: api.getAuthors(),
    }));
  }
  articleActions = {
    lookupAuthor: (authorId) => this.state.authors[authorId],
  };
  render() {
    return (
      <ArticleList
        articles={this.state.articles}
        articleActions={this.articleActions}
      />
    );
  }
}
export default App;
