import React, { Component } from 'react';
import { connect } from "react-redux";

import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList"
import TodoFooter from "../../components/TodoFooter";
import { filterTodos, getIncompleteTodoCount } from "../../utils/todoUtils"
import { createTodo, deleteTodo } from "../../actions/todoActions"

import "./index.css";

class TodosContainer extends Component {
  handleToggleTodo = content => {
  }

  handleCreateTodo = content => {
    const { createTodo } = this.props;
    createTodo(content);
  }


  handleUpdateTodo = (id, attributes) => {
    // const { todos: oldTodos } = this.state;
    // const newTodos = oldTodos.map(todo =>
    //   todo.id === id ? { ...todo, ...attributes, updatedAt: getCurrentTime() } : todo
    // )
    // saveTodosToLocalStorage(newTodos)
    // this.setState({ todos: newTodos })
    return ''
  }

  hadleDeleteTodo = id => {
    const { deleteTodo } = this.props;
    deleteTodo(id)
  }

  render() {
    const { todos, filter: visibilityFilter, incompletedCount: incompletedTodosCount } = this.props;

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
  }

}


const mapStateToProps = ({ todos }) => {
  const { items, filter } = todos;
  const filteredItems = filterTodos(items, filter);
  const incompletedCount = getIncompleteTodoCount(items)

  return {
    todos: filteredItems,
    filter,
    incompletedCount
  }
}

const mapDispatchToProps = {
  createTodo,
  deleteTodo
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
