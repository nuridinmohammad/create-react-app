import FormInput from "./components/FormInput";
import TodoItem from "./components/TodoItem";
import logo from "../assets/react.svg";
import "./style.css";
import { useCallback, useState } from "react";
import EditModal from "./components/EditModal";

function TaskListApp() {
  const [todos, setTodos] = useState([
    { id: 1, title: "title 1" },
    { id: 2, title: "title 2" },
  ]);
  const [isEdit, setIsEdit] = useState(false);
  const [todoItem, setTodoItem] = useState({ id: "", title: "" });

  const handleUpdateTodo = useCallback(() => {
    const { id, title } = todoItem;
    const newData = { id, title };
    const newTodos = todos;
    newTodos.splice(id - 1, 1, newData);
    setTodos(newTodos);
    setIsEdit(false);
    setTodoItem({ id: "", title: "" });
  }, [todos, todoItem]);

  const handleChangeTitle = (e) => {
    setTodoItem({ ...todoItem, title: e.target.value });
  };

  const handleOpenModal = useCallback(
    (id, todo) => {
      setIsEdit(!isEdit);
      setTodoItem({ id: id, title: todo });
    },
    [isEdit]
  );

  const handleDeleteTodo = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  );

  const handleAddTodo = useCallback(
    (data) => {
      const id = todos.length;
      const newTodo = {
        id: id + 1,
        title: data,
      };

      setTodos([...todos, newTodo]);
    },
    [todos]
  );

  return (
    <div className="App">
      <div className="logo">
        <img src={logo} alt="logo" />
        <h3>Todo App</h3>
      </div>
      <div className="input-form">
        <FormInput onAddTodo={handleAddTodo} />
      </div>
      <div className="list">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onDeleteTodo={handleDeleteTodo}
            onOpenModal={handleOpenModal}
          />
        ))}
      </div>
      <div>
        <EditModal
          isEdit={isEdit}
          todoItem={todoItem}
          onUpdateTodo={handleUpdateTodo}
          onSetTitle={handleChangeTitle}
        />
      </div>
    </div>
  );
}

export default TaskListApp;
