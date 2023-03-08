import React from "react";
import PropTypes from "prop-types";
import { memo } from "react";

const Button = ({ children, onDeleteTodo, onOpenModal, onUpdateTodo }) => {
  return (
    <>
      <button
        style={{
          padding: "2px 6px",
          outline: "none",
          border: "none",
          cursor: "pointer",
          pointerEvents: "no-allowed",
        }}
        onClick={
          onUpdateTodo ? onUpdateTodo : onOpenModal ? onOpenModal : onDeleteTodo
        }>
        {children}
      </button>
    </>
  );
};

Button.propType = {
  children: PropTypes.string.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default memo(Button);
