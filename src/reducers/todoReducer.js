import { CREATE_TODO } from "../constants/todoConstants";
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
