import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, CHANGE_TODO_FILTER, CLEAR_COMPLETED_TODOS } from "../constants/todoConstants";
import { createTodoInstance } from "../utils/todoUtils";

export const createTodo = content => dispatch => {
  const todo = createTodoInstance(content);
  dispatch(createTodoDispatchRequest(todo));
};

export const deleteTodo = id => dispatch => {
  dispatch(deleteTodoDispatchRequest(id));
};

export const updateTodo = (id, attributes) => dispatch => {
  dispatch(updateTodoDispatchRequest(id, attributes));
};

export const changeFilter = filter => dispatch => {
  dispatch(changeFilterDispatchRequest(filter));
};

export const clearCompletedTodos = () => dispatch => {
  dispatch(clearCompletedTodosDispatchRequest());
};

export const createTodoDispatchRequest = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});

export const deleteTodoDispatchRequest = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const updateTodoDispatchRequest = (id, attributes) => ({
  type: UPDATE_TODO,
  payload: { id, attributes }
});

export const changeFilterDispatchRequest = filter => ({
  type: CHANGE_TODO_FILTER,
  payload: { filter }
})

export const clearCompletedTodosDispatchRequest = () => ({
  type: CLEAR_COMPLETED_TODOS,
  payload: {}
})
