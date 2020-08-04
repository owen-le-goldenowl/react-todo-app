import { CREATE_TODO } from "../constants/todoConstants";
import { createTodoInstance } from "../utils/todoUtils";

export const createTodo = content => dispatch => {
  const todo = createTodoInstance(content);
  dispatch(createTodoDispatchRequest(todo));
};

export const createTodoDispatchRequest = todo => ({
  type: CREATE_TODO,
  payload: { todo }
});
