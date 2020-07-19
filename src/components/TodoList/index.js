import React, { Component } from "react";

import TodoItem from "../TodoItem";

import "./index.css";

class TodoList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <div className="todo-list-container">
        {
          todos.map(todo => (
            <TodoItem data={todo} key={todo.id} />
          ))
        }
      </div>
    )
  }
}

export default TodoList;
