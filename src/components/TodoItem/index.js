import React, { Component } from "react";

import "./index.css";
import greenTickIcon from '../../assets/images/green-tick.svg';
import blackTickIcon from '../../assets/images/black-tick.svg';
import editIcon from '../../assets/images/edit.svg';
import deleteIcon from '../../assets/images/delete.svg';
import checkIcon from '../../assets/images/check.svg';

class TodoItem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      editContent: "",
      editMode: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    const { data: { content, updatedAt } } = props;

    if (state.previousUpdatedAt !== updatedAt) {
      return {
        editContent: content,
        previousUpdatedAt: updatedAt,
      };
    }

    return null;
  }

  handleToggle = e => {
    e.preventDefault();

    const { onToggleTodo } = this.props;
    onToggleTodo();
  }

  handleDelete = e => {
    e.preventDefault();
    const { onDeleteTodo } = this.props;
    onDeleteTodo();
  }

  toggleEditMode = e => {
    e.preventDefault();

    const { editMode } = this.state;
    this.setState({ editMode: !editMode })
  }

  handleSaveTodo = () => {
    const { onUpdateTodo } = this.props;
    const { editContent } = this.state;

    this.setState({ editMode: false });
    onUpdateTodo({ content: editContent });
  }

  handleChangeEditContent = e => {
    this.setState({ editContent: e.target.value });
  }

  render() {
    const { data: { content, completed } } = this.props;
    const { editContent, editMode } = this.state;

    return (
      <div className="todo-item-container">
        <a href="#" className="todo-item-toggle" onClick={this.handleToggle}>
          {completed && <img src={greenTickIcon} alt="tick" />}
          {!completed && <img src={blackTickIcon} alt="tick" />}
        </a>

        {!editMode && (<div className={`todo-item-content ${completed} ? 'completed' : 'incompleted'`} >
          {content}
        </div>)}

        {editMode && (
          <div className='todo-item-content'>
            <form onSubmit={this.handleSaveTodo}>
              <input
                type='text'
                placeholder='Todo content'
                onChange={this.handleChangeEditContent}
                value={editContent}
              />
            </form>
          </div>
        )}

        <div className={`todo-item-options ${editMode ? 'edit' : 'view'}`}>
          {
            editMode && (
              <React.Fragment>
                <a href="#" className="icon-btn" onClick={this.handleSaveTodo}>
                  <img src={checkIcon} alt="edit" />
                </a>
                <a href="#" className="icon-btn" onClick={this.toggleEditMode}>
                  <img src={deleteIcon} alt="remove" />
                </a>
              </React.Fragment>
            )
          }

          {!editMode && (
            <React.Fragment>
              <a href="#" className="icon-btn" onClick={this.toggleEditMode}>
                <img src={editIcon} alt="edit" />
              </a>
              <a href="#" className="icon-btn" onClick={this.handleDelete}>
                <img src={deleteIcon} alt="remove" />
              </a>
            </React.Fragment>
          )}
        </div>
      </div>
    )
  }
}

export default TodoItem;
