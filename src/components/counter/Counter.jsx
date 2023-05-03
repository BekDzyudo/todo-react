import React from "react";
import { useState } from "react";
import "./counter.css";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function inkrement() {
    if (count < 10) {
      setCount(count + 1);
    }

    if (count === 10) {
      setCount(0);
      setCount2(count2 + 1);
    }
  }
  function dekrement() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <div className="counter">
        <button className="inkrement" onClick={inkrement}>
          +
        </button>
        <h1>{count}</h1>
        <button className="dekrement" onClick={dekrement}>
          -
        </button>
      </div>
      <h1 className="hisob">Count: {count2} </h1>
      <hr className="hr" />
    </>
  );
};

export default Counter;
