import React  from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  state = {
    answer: 199
  };
  asyncFunc = () => {
    return Promise.resolve(40);
  }
  async componentDidMount() {
    this.setState({
      answer: await this.asyncFunc()
    });
  }
  render() {
    return (
      <div>Hello Class Component: -- {this.state.answer}</div>
    );
  }

}

export default App;

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
