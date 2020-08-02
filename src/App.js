import React, { Component } from 'react';
import { v4 as uuidv4 } from "uuid"

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"
import TodoFooter from "./components/TodoFooter";

import { fetchTodosFromLocalStorage, saveTodosToLocalStorage } from "./utils/localTodos";

import './App.css';

const localTodos = fetchTodosFromLocalStorage();
const getCurrentTime = () => (new Date()).getTime();


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: localTodos,
      visibilityFilter: 'all',
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
    const now = getCurrentTime();
    const newTodo = {
      id: uuidv4(),
      completed: false,
      content,
      createdAt: now,
      updatedAt: now
    }

    const todos = [...oldTodos, newTodo]
    saveTodosToLocalStorage(todos)
    this.setState({ todos })
  }

  handleUpdateTodo = (id, attributes) => {
    const { todos: oldTodos } = this.state;
    const newTodos = oldTodos.map(todo =>
      todo.id === id ? { ...todo, ...attributes, updatedAt: getCurrentTime() } : todo
    )
    saveTodosToLocalStorage(newTodos)
    this.setState({ todos: newTodos })
  }

  hadleDeleteTodo = id => {
    const { todos: oldTodos } = this.state;
    const newTodos = oldTodos.filter(todo => todo.id !== id)
    saveTodosToLocalStorage(newTodos)
    this.setState({ todos: newTodos })
  }

  handleChangeFilter = targetFilter => {
    this.setState({ visibilityFilter: targetFilter })
  }

  getTodosByFilter = () => {
    const { todos, visibilityFilter } = this.state;
    switch (visibilityFilter) {
      case 'all':
        return todos;
      case 'active':
        return todos.filter(({ completed }) => !completed);
      case 'completed':
        return todos.filter(({ completed }) => completed);
      default:
        return todos;
    }
  }

  getIncompleteTodoCount = () => {
    const { todos } = this.state;
    return todos.filter(({ completed }) => !completed).length;
  }

  render() {
    const todos = this.getTodosByFilter();
    const incompletedTodosCount = this.getIncompleteTodoCount();
    const { visibilityFilter } = this.state;

    return (
      <div className="app-container" >
        <div className="todo-container">
          <TodoForm onCreateTodo={this.handleCreateTodo} />
          <TodoList todos={todos} onToggleTodo={this.handleToggleTodo} onDeleteTodo={this.hadleDeleteTodo} onUpdateTodo={this.handleUpdateTodo} />
          <TodoFooter
            activeFilter={visibilityFilter}
            onChangeFilter={this.handleChangeFilter}
            incompletedTodosCount={incompletedTodosCount}
          />
        </div>
      </div>
    )
      ;
  }
}

export default App;
