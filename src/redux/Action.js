import * as types from "./actionTyoe";

export const completeTodo = (todo) => ({
  type: types.COMPLETE_TODO,
  payload: todo,
});

export const addTodo = (todo) => ({
  type: types.ADD_TODO,
  payload: todo,
});

export const removeTodo = (todo) => ({
  type: types.REMOVE_TODO,
  payload: todo,
});

export const updateTodo = (id, value) => ({
  type: types.UPDATED_TODO,
  id: id,
  value: value,
});

export const deleteAllTodo = () => ({
  type: types.DELETE_ALL_TODO,
});
