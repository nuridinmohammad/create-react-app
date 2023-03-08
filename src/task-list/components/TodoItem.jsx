import React, { useState } from "react";
import PropTypes from "prop-types";
import { memo } from "react";
import Button from "./Button";

const TodoItem = ({ todo, onDeleteTodo, onOpenModal }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "300px",
        padding: "4px",
        overflow: "auto",
      }}>
      <span>{todo.title}</span>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
          alignItems: "center",
        }}>
        <Button onOpenModal={() => onOpenModal(todo.id, todo.title)}>
          edit
        </Button>
        <Button onDeleteTodo={() => onDeleteTodo(todo.id)}>delete</Button>
      </div>
    </div>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};

export default memo(TodoItem);
