import React from "react";
import { useState } from "react";
import "./todoStyle.scss";
import "./font-awesome-4.7.0/css/font-awesome.min.css";

const Todo = () => {
  const [ToDo, setToDo] = useState([]);

  function AllToDo(e) {
    e.preventDefault();
    let text = document.querySelector(".text");

    let id = !ToDo.at(-1) ? 0 : ToDo.at(-1).id;

    let obj = {
      id: id + 1,
      text: text.value,
    };

    setToDo((prev) => [...prev, obj]);
    text.value = null;
  }
  function Exit() {
    alert("Keyingi darsda o'chadi :)");
  }

  return (
    <div className="todoApp">
      <h1 className="title">To Do List</h1>
      <form action="" className="todoForm" onSubmit={AllToDo}>
        <input type="text" placeholder="Enter your text" className="text" />
      </form>
      <ul className="infoBlog">
        {ToDo.map((item) => {
          return (
            <li className="info" key={item.id}>
              {item.text}{" "}
              <i class="fa fa-times exit" onClick={Exit} aria-hidden="true"></i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todo;
