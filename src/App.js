import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore"
import TodosContainer from "./containers/TodosContainer"
import './App.css';

const store = configureStore();

class App extends Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    )
  }
}

export default App;
