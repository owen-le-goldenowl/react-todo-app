import { CREATE_TODO, UPDATE_TODO, DELETE_TODO, CHANGE_TODO_FILTER, CLEAR_COMPLETED_TODO } from "../constants/todoConstants";
import { fetchTodosFromLocalStorage } from "../utils/todoUtils"

const initialState = {
  items: fetchTodosFromLocalStorage(),
  filter: 'all'
};

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_TODO:
      return {
        ...state, items: [...state.items, payload.todo]
      }
    default:
      return state;
  }
}

export default todoReducer;
