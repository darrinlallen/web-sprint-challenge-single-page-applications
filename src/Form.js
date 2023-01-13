import React, { useEffect, useState } from "react";
import  ReactDOM  from "react-dom";
import * as yup from 'yup'
import axios from 'axios'

const schema = yup.object().shape({
  user: yup.string().min(2, 'name must be at least 2 characters'),
    size: yup.string(),
    instr: yup.string(),
    topping1: yup.bool(),
    topping2: yup.bool(),
    topping3: yup.bool(),
    topping4: yup.bool()
  
   })
  
  
export default function MyForm() {

   const [form, setForm] = useState({
    user: '',
    size: '',
    instr : '',
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false
   })
   const [errors, setErrors] =   useState({
    user: '',
    size: '',
    instr: '',
    topping1: true,
    topping2: false,
    topping3: false,
    topping4: false
   })
   const setFormErrors = (name, value) => {
    yup.reach(schema, name).validate(value)
    .then(() => setErrors({...errors, [name]: ''}))
    .catch(err => setErrors({...errors, [name]: err.errors[0] }))
   }
   const[disabled, setDisabled] = useState(true)
   const change = event => {
    const {checked, value, name, type} = event.target
    const valueToUse = type ==='checkbox' ? checked: value
    setFormErrors(name, valueToUse)
    setForm({...form, [name]: valueToUse})
   }

  const submit = event => {
    event.preventDefault();
    const newOrder = { user: form.user, size: form.size, instr: form.instr, topping1: form.topping1, topping2: form.topping2}
    axios.post('https://reqres.in/api/orders', newOrder)
    
    .then(res => {
      setForm({ user: '', size: '', instr: '', topping1: false, topping2: false, topping3: false, topping4: false
       })
    })
    .catch(err => {
      debugger
    })
  }
    
useEffect(() => {
  schema.isValid(form).then(valid => setDisabled(!valid)) },
  [form])

  return (
    <>
    <div>{errors.user}</div>
      <form id="pizza-form" onSubmit={submit}>
        <label>Enter your name:
          <input onChange={change} id="name-input" type="text" name="user" value={form.user}/>
        </label>
        <br/>
        <select id="size-dropdown">

<option onChange={change} value="1" small>small</option>

<option onChange={change} value="2">medium</option>

<option onChange={change} value="3">large</option>

</select>
<br/>
<label>enter instructions
          <input onChange={change}  id="special-text" type="text" name="instr" value={form.instr}/>
        </label>
        <br/>
        <label>mushroom
          <input onChange={change} checked={form.topping1} type="checkbox" name="topping1" />
        </label>
        <label>peperoni
          <input onChange={change} checked={form.topping2} type="checkbox" name="topping2"/>
        </label>
        <label>bbq
          <input  onChange={change} checked={form.topping3} type="checkbox" name="topping3" />
        </label>
        <label>hamburger
          <input onChange={change} checked={form.topping4} type="checkbox" name="topping4"/>
        </label>
        <br/>
        <button disabled={disabled} id="order-button" type="submit">Add to order</button>
      
      </form>
      </>
  )  
    
  
  
  const someElement = document.getElementById("root")
  if (someElement){
  ReactDOM.render(<MyForm />,   someElement)
  }
}