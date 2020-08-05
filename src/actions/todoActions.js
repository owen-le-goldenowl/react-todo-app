import { CREATE_TODO, DELETE_TODO } from "../constants/todoConstants";
import { createTodoInstance } from "../utils/todoUtils";

export const createTodo = content => dispatch => {
  const todo = createTodoInstance(content);
  dispatch(createTodoDispatchRequest(todo));
};

export const deleteTodo = id => dispatch => {
  dispatch(deleteTodoDispatchRequest(id));
};

export const createTodoDispatchRequest = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});

export const deleteTodoDispatchRequest = id => ({
  type: DELETE_TODO,
  payload: { id }
})
