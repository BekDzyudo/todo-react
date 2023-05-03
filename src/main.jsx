import React from "react";
import ReactDOM from "react-dom/client";
import Counter from "./components/counter/Counter.jsx";
import Todo from "./components/ToDoApp/todo.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Counter />
    <Todo />
  </React.StrictMode>
);
