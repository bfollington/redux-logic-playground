import React, { Component } from 'react';
import { Provider } from 'react-redux';
import './App.css';
import store from './state';
import Counter from './Counter';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Counter count={1} />
        </div>
      </Provider>
    );
  }
}

export default App;
