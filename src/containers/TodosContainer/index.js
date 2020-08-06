import React, { Component } from 'react';
import { connect } from "react-redux";

import TodoForm from "../../components/TodoForm";
import TodoList from "../../components/TodoList"
import TodoFooter from "../../components/TodoFooter";
import { filterTodos, getIncompleteTodoCount } from "../../utils/todoUtils"
import { createTodo, deleteTodo, updateTodo, changeFilter, clearCompletedTodos } from "../../actions/todoActions"

import "./index.css";

class TodosContainer extends Component {
  handleCreateTodo = content => {
    const { createTodo } = this.props;
    createTodo(content);
  }

  handleUpdateTodo = (id, attributes) => {
    const { updateTodo } = this.props;
    updateTodo(id, attributes);
  }

  hadleDeleteTodo = id => {
    const { deleteTodo } = this.props;
    deleteTodo(id);
  }

  handleChangeFilter = filter => {
    const { changeFilter } = this.props;
    changeFilter(filter);
  }

  clearCompletedTodos = () => {
    const { clearCompletedTodos } = this.props;
    clearCompletedTodos();
  }

  render() {
    const { todos, filter: visibilityFilter, incompletedCount: incompletedTodosCount } = this.props;

    return (
      <div className="app-container" >
        <div className="todo-container">
          <TodoForm onCreateTodo={this.handleCreateTodo} />
          <TodoList todos={todos} onDeleteTodo={this.hadleDeleteTodo} onUpdateTodo={this.handleUpdateTodo} />
          <TodoFooter
            activeFilter={visibilityFilter}
            onChangeFilter={this.handleChangeFilter}
            incompletedTodosCount={incompletedTodosCount}
            clearCompletedTodos={this.clearCompletedTodos}
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
  deleteTodo,
  updateTodo,
  changeFilter,
  clearCompletedTodos
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
