import React, {useState} from 'react';

import styled from 'styled-components'

const FormS = styled.form`
  margin-top: 18px;
  display: grid;
  grid-template-columns: 1fr 109px;
  gap: 25px;

  input, button {
    border-radius: 12px;
    outline: none;
    padding: 20px 0;
    border: none;
  }

  input {
    border: 1px solid #BDBDBD;
    padding-left: 12px;
    font-size: 14px;
  }

  button {
    color: #fff;
    cursor: pointer;

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