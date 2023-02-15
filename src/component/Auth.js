import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActionType } from "../redux/actionTyoe";

const Auth = () => {
  const navigate = useNavigate();
  const [formState, setState] = useState({
    email: "",
    password: "",
  });

  const inputChangeHandler = (name) => {
    return (event) => {
      setState((prevState) => ({ ...prevState, [name]: event.target.value }));
    };
  };

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formState.email.includes("@") && formState.password.length > 5) {
      dispatch({
        type: authActionType.LOG_IN,
        payload: formState.email,
      });
      navigate("/todos");
    }
  };

  return (
    <main>
      <LoginWrapper>
        <FormWrapper onSubmit={submitHandler}>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              onChange={inputChangeHandler("email")}
              value={formState.email}
              placeholder="qwerty@qwert"
            />
          </div>
          <div>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              onChange={inputChangeHandler("password")}
              value={formState.password}
              placeholder="12345"
            />
          </div>
          <Btn>Login</Btn>
        </FormWrapper>
      </LoginWrapper>
    </main>
  );
};

export default Auth;

const LoginWrapper = styled.section`
  width: 70%;
  height: 50vh;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
  background-color: bisque;
  border-radius: 10px;
  padding: 20px;
`;
const FormWrapper = styled.form`
  max-height: 300px;
  width: 70%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 100px;
`;

const Input = styled.input`
  width: 300px;
  margin-bottom: 70px;
  height: 30px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 5px;
  outline: none;
  border: none;
  padding-left: 10px;
`;

const Label = styled.label`
  font-size: 22px;
  margin-right: 20px;
`;

const Btn = styled.button`
  width: 30%;
  height: 40px;
  background-color: saddlebrown;
  border-radius: 5px;
  border: none;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
  :hover {
    background-color: lightgreen;
  }
`;
