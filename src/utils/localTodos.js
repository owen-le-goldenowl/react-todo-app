export const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};

export const fetchTodosFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};
