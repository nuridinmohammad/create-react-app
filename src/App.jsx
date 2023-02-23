import { useState } from "react";
import "./App.css";
import Counter from "./counter/Counter";

function App() {
  return (
    <div className="App">
      <div className="card">
        <Counter />
      </div>
    </div>
  );
}

export default App;
