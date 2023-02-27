import React, { useReducer } from "react";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

const Todos = () => {
  const [state, dispatch] = useReducer(reducer, initialTodos);
  return (
    <>
      {state.map((todo) => (
        <div key={todo.id}>
          <label htmlFor="">
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => dispatch({ type: "COMPLETE", id: todo.id })}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </>
  );
};

export default Todos;
