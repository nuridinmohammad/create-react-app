import "./App.css";
import TodoList, { Provider, AddTodo } from "./todos/TodoList";
import Todos from "./todos/Todos";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Provider>
          <AddTodo />
          <TodoList />
        </Provider>
      </div>
    </div>
  );
}

export default App;
