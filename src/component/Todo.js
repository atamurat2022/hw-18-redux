import { useState } from "react";
import styled from "styled-components";

export const Todo = ({
  task,
  toggleTodo,
  completed,
  id,
  removeTodo,
  updateTodo,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editTask, setEditTask] = useState(task);
  const handleUpdate = (e) => {
    e.preventDefault();
    if (editTask) updateTodo(id, editTask);
    setIsEditing(false);
  };

  return (
    <ListItemWrapper>
      {isEditing ? (
        <div>
          <form onSubmit={handleUpdate}>
            <Input
              type="text"
              name="task"
              value={editTask}
              onChange={(e) => setEditTask(e.target.value)}
            />
            <Btn>save</Btn>
          </form>
        </div>
      ) : (
        <ul>
          <Listitems
            onClick={toggleTodo}
            style={{ color: completed ? "red" : "" }}
          >
            {task}
          </Listitems>
        </ul>
      )}
      <span>
        <Btn onClick={() => setIsEditing(true)}>Edit</Btn>

        <Btn onClick={removeTodo}>Delete</Btn>
      </span>
    </ListItemWrapper>
  );
};

export default Todo;

const ListItemWrapper = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  justify-content: center;
  background-color: olive;
`;

const Listitems = styled.li`
  background-color: bisque;
  list-style: none;
  width: 700px;
  height: 40px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 5px;
  color: #000;
  font-size: 22px;
`;
const Btn = styled.button`
  width: 50px;
  height: 40px;
  background-color: salmon;
  border: none;
  :hover {
    background-color: floralwhite;
  }
`;

const Input = styled.input`
  width: 700px;
  height: 40px;
`;
