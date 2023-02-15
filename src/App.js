import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Auth from "./component/Auth";
import { TodoList } from "./component/TodoList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route path="/todos" element={<TodoList />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;
