// Form.propTypes = {


import React from "react";


const Form = ({ addToDo }) => (
  <form onSubmit={ (e) => { e.preventDefault(); addToDo(e.target.todoName.value)} }>
    <input type="text" id="todoName" name="todoName" />
    <button type="submit">Dodaj</button>
  </form>
);

export default Form;