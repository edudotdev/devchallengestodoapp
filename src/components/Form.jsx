import React, {useState} from 'react';

import styled from 'styled-components'

const FormS = styled.form`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr minmax(70px, 109px);
  gap: 25px;

  @media only screen and (max-width: 600px) {
    gap: 15px;
  }

  input, button {
    border-radius: 12px;
    padding: 20px 0;
    border: none;

    @media only screen and (max-width: 600px) {
      padding: 15px 0;
    }
  }

  input {
    border: 1px solid #BDBDBD;
    padding-left: 12px;
    font-size: 14px;
  }

  button {
    color: #fff;
    background: #2F80ED;
    box-shadow: 0px 2px 6px rgba(127, 177, 243, 0.4); 
  }
`

const Form = ({todos, setTodos}) => {

  const [nametodo, setNametodo] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    if(nametodo.trim() === "") {
      return
    }

    setTodos([
      ...todos, 
      {name: nametodo, state: false, id: new Date().getTime()}
    ])

    setNametodo("")
  }

  const handleNameTodo = e => {
    setNametodo(e.target.value) 
  }

  return ( 
    <FormS onSubmit={handleSubmit}>
      <input 
        onChange={handleNameTodo}
        type="text"
        maxLength="50"
        placeholder="add details" 
        value={nametodo}
      />

      <button>Add</button>
    </FormS>
   );
}
 
export default Form;