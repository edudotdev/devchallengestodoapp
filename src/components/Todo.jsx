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

const Task = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;

  button {
    border: none;
    background: none;
    color: #BDBDBD; 
    text-align: center;
    cursor: pointer;
    
    span {
      font-size: 28px;
    }
  }
`

const Todo = ({todo, setTodos, todos, category}) => {

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

  const handleDelete = () => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return ( 
    <TodoS>
      <Task> 
        <label>
          <input type="checkbox" readOnly checked={state} onClick={handleClick}/> 
          <p className={state ? "underline" : null}>{`${name}`}</p>
        </label>
    
        {category === "completed" ? 
          <button onClick={handleDelete}>
          <span className="material-icons">
            delete_outline
          </span> 
        </button>
        : null
        }
      </Task>
    </TodoS>
   );
}
 
export default Todo;