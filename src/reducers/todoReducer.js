import { CREATE_TODO, DELETE_TODO } from "../constants/todoConstants";
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
    case DELETE_TODO:
      return {
        ...state, items: state.items.filter(({ id }) => id !== payload.id)
      }
    default:
      return state;
  }
}

export default todoReducer;
