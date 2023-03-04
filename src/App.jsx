import { AddTodo, Provider, TodoList } from "./todos/TodoList";

function App() {
  return (
    <>
      <Provider>
        <AddTodo />
        <TodoList />
      </Provider>
    </>
  );
}

export default App;
