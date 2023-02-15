import * as types from "./actionTyoe";
import { v4 as uuidv4 } from "uuid";
const initialState = {
  todos: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TODO:
      const newTodo = {
        id: uuidv4(),
        task: action.payload,
        complated: false,
      };
      const addedTodos = [...state.todos, newTodo];
      console.log(...state.todos);
      return {
        ...state,
        todos: addedTodos,
      };
    case types.REMOVE_TODO:
      const filterTodo = state.todos.filter((t) => t.id !== action.payload.id);
      return {
        ...state,
        todos: filterTodo,
      };
    case types.UPDATED_TODO:
      const updatedTodo = state.todos.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, task: action.value };
        }
        return todo;
      });
      return {
        ...state,
        todos: updatedTodo,
      };
    case types.DELETE_ALL_TODO:
      return initialState;

    case types.COMPLETE_TODO:
      const toggleTodos = state.todos.map((t) =>
        t.id === action.payload.id
          ? { ...action.payload, complated: !action.payload.complated }
          : t
      );
      return {
        ...state,
        todos: toggleTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
