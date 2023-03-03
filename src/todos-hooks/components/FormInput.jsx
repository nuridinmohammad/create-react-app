import React from "react";
import { Button } from "./Button";

const FormInput = () => {
  return (
    <>
      <form>
        <input
          type="text"
          name="todos"
          id="todos"
          required
          placeholder="What needs to be done?"
        />

        <Button id="add">Create</Button>
      </form>
    </>
  );
};

export default FormInput;
