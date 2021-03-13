import React from 'react';

import styled from 'styled-components'

const TodoS = styled.div`

  label {
    display: flex; 
    align-items: center;
    height: 100%;
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

const Todoall = ({todo, setTodos, todos, setDeleteid}) => {

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
      <form>
        <label>
          <input type="checkbox" readOnly checked={state} onClick={handleClick}/> 
          <p className={state ? "underline" : null}>{`${name}`}</p>
        </label>
      </form>
    </TodoS>
   );
}
 
export default Todoall;