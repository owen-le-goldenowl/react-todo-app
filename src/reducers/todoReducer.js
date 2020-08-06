import { CREATE_TODO, DELETE_TODO, UPDATE_TODO, CHANGE_TODO_FILTER } from "../constants/todoConstants";
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
    case UPDATE_TODO:
      return {
        ...state,
        items: state.items.map(item => (
          item.id === payload.id ?
            { ...item, ...payload.attributes } :
            item
        ))
      }
    case DELETE_TODO:
      return {
        ...state, items: state.items.filter(({ id }) => id !== payload.id)
      }
    case CHANGE_TODO_FILTER:
      return {
        ...state,
        filter: payload.filter
      }
    default:
      return state;
  }
}

export default todoReducer;
