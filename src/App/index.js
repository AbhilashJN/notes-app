import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Container from '../container';
import initStore from '../redux/store/store';

const store = initStore();
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Container />
      </Provider>
    );
  }
}

export default App;
