import React from "react";
import {Route, Link} from 'react-router-dom'
import Form from "./Form.js"
const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <br/>
      <Link to="/pizza" id ="order-pizza">order form</Link>
      <Route path="/pizza">
        <Form />
      </Route>
    </>
  );
};
export default App;
