import React from "react";

function Button({ text, children }) {
  return (
    <button className="button">
      {text} {children}
    </button>
  );
}

export default Button;
