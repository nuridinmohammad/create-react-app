import React, { useState } from "react";

const Button = ({ onClick, children }) => {
  return (
    <div>
      <button onClick={onClick}>{children}</button>
    </div>
  );
};

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>{count}</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          gap: "0.6rem",
        }}>
        <Button onClick={() => setCount(count + 1)}>+</Button>
        <Button onClick={() => (count > 0 ? setCount(count - 1) : count)}>
          -
        </Button>
        <Button onClick={() => setCount(0)}>reset</Button>
      </div>
    </>
  );
};

export default Counter;
