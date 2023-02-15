import { useDispatch, useSelector } from "react-redux";
import { TodoInput } from "./TodoInput";
import Todo from "./Todo";
import { completeTodo, addTodo, removeTodo, updateTodo } from "../redux/Action";
import styled from "styled-components";

export const TodoList = () => {
  const state = useSelector((state) => ({ ...state.todos }));
  let dispatch = useDispatch();
  const create = (newTodo) => {
    dispatch(addTodo(newTodo));
  };

  const update = (id, updatedTask) => {
    dispatch(updateTodo(id, updatedTask));
  };

  return (
    <>
      <Header>Todo App</Header>
      <TodoInput createTodo={create} />
      <ListItems>
        {state.todos &&
          state.todos.map((todo) => {
            return (
              <Todo
                style={{ color: todo.complated ? "red" : "" }}
                key={todo.id}
                id={todo.id}
                task={todo.task}
                completed={todo.complated}
                toggleTodo={() => dispatch(completeTodo(todo))}
                removeTodo={() => dispatch(removeTodo(todo))}
                updateTodo={update}
              />
            );
          })}
      </ListItems>
    </>
  );
};

const Header = styled.h1`
  font-size: 34px;
  height: 90px;
  background-color: brown;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ListItems = styled.ul`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
