import React, { Component } from 'react';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import TodoFooter from "./components/TodoFooter";

import { fetchTodosFromLocalStorage, saveTodosToLocalStorage } from "./utils/localTodos";

import './App.css';

const localTodos = fetchTodosFromLocalStorage();

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: localTodos,
    }
  }

  handleToggleTodo = id => {
    const { todos: oldTodos } = this.state;
    const newTodos = oldTodos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    saveTodosToLocalStorage(newTodos)
    this.setState({ todos: newTodos })
  }

  handleCreateTodo = content => {
    const { todos: oldTodos } = this.state;
    const newTodo = {
      id: (new Date()).getTime(),
      completed: false,
      content,
    }

    const todos = [...oldTodos, newTodo]
    saveTodosToLocalStorage(todos)
  }

  render() {
    const { todos } = this.state;
    console.log(todos)

    return (
      <div className="app-container" >
        <div className="todo-container">
          <TodoForm onCreateTodo={this.handleCreateTodo} />
          <TodoList todos={todos} onToggleTodo={this.handleToggleTodo} />
          <TodoFooter />
        </div>
      </div>
    )
      ;
  }
}

export default App;
