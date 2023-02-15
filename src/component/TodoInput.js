import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
// import { deleteAllTodo } from "../redux/Action";
import { DELETE_ALL_TODO } from "../redux/actionTyoe";

export const TodoInput = ({ createTodo }) => {
  // console.log(deleteAllTodo());
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const onChange = (e) => {
    setTask(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();

    if (task) createTodo(task);
    setTask("");
  };

  const handleDeleteAll = (e) => {
    dispatch({ type: DELETE_ALL_TODO });
  };

  return (
    <>
      <FormInput onSubmit={handlerSubmit}>
        <Input
          type="text"
          placeholder="Enter task..."
          id="task"
          name="task"
          value={task}
          onChange={onChange}
        />
        <AddButton>Add</AddButton>
      </FormInput>
      <DeletteAllBtn onClick={handleDeleteAll}>Delete All</DeletteAllBtn>
    </>
  );
};

const FormInput = styled.form`
  height: 7em;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Input = styled.input`
  width: 50%;
  height: 40px;
  padding-left: 10px;
`;

const AddButton = styled.button`
  width: 70px;
  height: 40px;
`;

const DeletteAllBtn = styled.button`
  height: 3em;
  width: 16rem;
  margin-left: auto;
  margin-right: auto;
  color: #fff;
  font-size: 22px;
  background-color: crimson;
  border: none;
  border-radius: 7px;
`;
