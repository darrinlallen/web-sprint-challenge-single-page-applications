import React, { useEffect } from "react";
import  ReactDOM  from "react-dom";
import * as yup from 'yup'
const schema = yup.object().shape({
 user: yup.string().min(2, 'name must be at least 2 characters') })
function MyForm() {
    return (
      <form id="pizza-form">
        <label>Enter your name:
          <input id="name-input" type="text" name="user" />
        </label>
      </form>
    )
    }
    
  const someElement = document.getElementById("root")
  if (someElement){
  ReactDOM.render(<MyForm />,   someElement)
  }
  export default MyForm