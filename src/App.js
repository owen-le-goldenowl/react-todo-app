import React, { Component } from 'react';

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList"

import './App.css';

const fakeTodos = [
  { id: 1, content: 'Learn ruby', completed: true },
  { id: 2, content: 'Learn react', completed: false },
];

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: fakeTodos,
    }
  }

  handleToggleTodo = id => {
    const { todos: oldTodos } = this.state;
    const newTodos = oldTodos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: newTodos });
  }

  render() {
    const { todos } = this.state;

    return (
      <div className="app-container" >
        <div className="todo-container">
          <TodoForm />
          <TodoList todos={todos} onToggleTodo={this.handleToggleTodo} />
        </div>
      </div>
    )
      ;
  }
}

export default App;
