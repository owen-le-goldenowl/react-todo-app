import { CREATE_TODO, DELETE_TODO, UPDATE_TODO } from "../constants/todoConstants";
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
    default:
      return state;
  }
}

export default todoReducer;
