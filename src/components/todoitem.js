import React from "react";
import "../style/App.css";
import { useState } from "react";
function TodoItem({ todo, index, onDelete }) {
  const [checked, setChecked] = useState(false);
  return (
    <div className="element">
      <input
        onChange={() => {
          setChecked(!checked);
        }}
        checked={checked}
        type="checkbox"
      />
      <li>{todo} </li>
      {!checked && (
        <button
          onClick={() => {
            onDelete(index);
          }}
        >
          clear
        </button>
      )}
    </div>
  );
}

export default TodoItem;
