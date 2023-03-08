import React, { useEffect, useRef, useState } from "react";
import { memo } from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const FormInput = ({ onAddTodo}) => {
  const [value, setValue] = useState("");
  const onFocus = useRef();

  useEffect(() => onFocus.current.focus(), []);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onAddTodo(value);
          setValue("");
        }}
        style={{ marginBottom: "6px" }}>
        <label htmlFor="input-todo">
          <input
            type="text"
            name="input-todo"
            id="input-todo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            ref={onFocus}
          />
          <Button>Add Todo</Button>
        </label>
      </form>
    </>
  );
};

FormInput.propTypes = {
  onAddTodo: PropTypes.func.isRequired,
};
export default memo(FormInput);
