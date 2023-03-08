import Button from "./Button";

const EditModal = ({ isEdit, todoItem, onUpdateTodo, onSetTitle }) => {
  if (isEdit) {
    return (
      <>
        <h3>Edit Task</h3>
        <input
          type="text"
          name="edit-todo-item"
          id={todoItem.id}
          value={todoItem.title}
          onChange={onSetTitle}
        />

        <Button onUpdateTodo={() => onUpdateTodo()}>save</Button>
      </>
    );
  } else {
    return null;
  }
};

export default EditModal;
