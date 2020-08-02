import React, { Component } from "react";

import TodoItem from "../TodoItem";

import "./index.css";

class TodoList extends Component {
  render() {
    const { todos, onToggleTodo, onDeleteTodo, onUpdateTodo } = this.props;

    return (
      <div className="todo-list-container">
        {
          todos.map(todo => (
            <TodoItem
              data={todo}
              key={todo.id}
              onToggleTodo={() => onToggleTodo(todo.id)}
              onDeleteTodo={(() => { onDeleteTodo(todo.id) })}
              onUpdateTodo={attributes => { onUpdateTodo(todo.id, attributes) }}
            />
          ))
        }
        {
          todos.length === 0 && (
            <div className="no-todo">No todos</div>
          )
        }
      </div>
    )
  }
}

export default TodoList;
