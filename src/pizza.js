import React from "react";
import { ReactDOM } from "react-dom";
function MyForm() {
    return (
      <form id="pizza-form">
        <label>Enter your name:
          <input type="text" />
        </label>
      </form>
    )
  }
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(<MyForm />);