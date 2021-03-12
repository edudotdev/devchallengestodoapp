import React from 'react';

import styled from 'styled-components'

const TodoS = styled.div`

  label {
    display: flex; 
  }

  p {
    font-size: 18px;
    font-weight: 500;
    user-select: none;
  }

  input {
    margin-right: 7px;
    appearance: none;
    width: 24px;
    height: 24px;
    border: 1px solid #828282;
    border-radius: 4px;
    outline: none;
    transition: background .3s ease;
    cursor: pointer;
  }

  input:checked {
    border: 1px solid #2F80ED;
    background: #2F80ED;
  }
`

const Todoall = ({todo, setTodos, todos}) => {

  const {name, state, id} = todo

  const handleClick = () => { 
    {setTodos(todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          state: !todo.state
        }
      }
      return todo
    }))}
  }

  return ( 
    <TodoS>
        <label >
          <input type="checkbox" onClick={handleClick}/> 
          <p>{`${name} ${state}`}</p>
        </label>

    </TodoS>
   );
}
 
export default Todoall;