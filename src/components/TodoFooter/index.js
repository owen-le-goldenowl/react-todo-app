import React, { Component } from "react";
import "./index.css";

class TodoFooter extends Component {
  render() {
    return (
      <div className="todo-footer-container">
        <div className="todo-left-count">
          2 items left
        </div>
        <div className="todo-menus">
          <a href="#" className="active">All</a>
          <a href="#" >Active</a>
          <a href="#" >Complete</a>
        </div>
      </div>
    )
  }
}

export default TodoFooter;
