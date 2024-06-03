import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const handleClick = () => {
    if (todo) {
      setTodos([...todos, todo]);
      setTodo("");
    }
  }

  return (
    <>
      <h1>Todo App</h1>
      <input
        type="text"
        placeholder="input your task..."
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button onClick={handleClick}>
        Add Todo
      </button>
      {todos.map((element, index) => (
        <div key={index}>
          <input type="checkbox" id="index" />
          <label htmlFor="checkbox">{element}</label>
        </div>
      ))}
    </>
  );
}

export default App;