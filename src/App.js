import React, { Component } from 'react';
import { Provider } from "react-redux";
import configureStore from "./store/configureStore"
import TodosContainer from "./containers/TodosContainer"
import { saveTodosToLocalStorage } from "./utils/todoUtils"
import './App.css';

const store = configureStore();

store.subscribe(() => {
  const { todos } = store.getState();
  saveTodosToLocalStorage(todos.items)
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <TodosContainer />
      </Provider>
    )
  }
}

export default App;
