import "./style/App.css";
import Button from "./components/button";
import Avatar from "./components/avatar";
import { useState, useEffect } from "react";
import PlayerCard from "./components/playercard";
import TodoItem from "./components/todoitem";

function App() {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  return (
    <div className="app">
      <div className="input">
        <input
          value={todoName}
          onChange={(e) => {
            setTodoName(e.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodos([...todos, todoName]);
            setTodoName("");
          }}
        >
          save
        </button>
      </div>

      <div className="todos">
        <p>Todos:</p>
        <ul
          style={{
            listStyleType: "none",
          }}
        >
          {todos.length > 0 ? (
            todos.map((todo, index) => (
              <TodoItem
                key={index}
                index={index}
                todo={todo}
                onDelete={(todoIndex) => {
                  const newTodos = todos.filter(
                    (todo, index) => index !== todoIndex
                  );
                  setTodos(newTodos);
                }}
              />
            ))
          ) : (
            <div>No Todos</div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
