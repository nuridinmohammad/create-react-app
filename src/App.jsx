import "./App.css";
import TodoList, { Provider, AddTodo } from "./todos/TodoList";

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
