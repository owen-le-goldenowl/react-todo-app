/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";
import "./index.css";

class TodoFooter extends Component {
  render() {
    const { onChangeFilter, activeFilter, incompletedTodosCount } = this.props;

    return (
      <div className="todo-footer-container">
        <div className="todo-left-count">
          {incompletedTodosCount} items left
        </div>
        <div className="todo-menus">
          <a
            href="#"
            className={activeFilter === 'all' ? 'active' : null}
            onClick={() => { onChangeFilter('all') }}
          >
            All
          </a>

          <a
            href="#"
            className={activeFilter === 'active' ? 'active' : null}
            onClick={() => { onChangeFilter('active') }}
          >
            Active
          </a>

          <a
            href="#"
            className={activeFilter === 'completed' ? 'completed' : null}
            onClick={() => { onChangeFilter('completed') }}
          >
            Complete
          </a>
        </div>
      </div>
    )
  }
}

export default TodoFooter;
