import React from 'react';
import Todo from './Todo'

import styled from 'styled-components'

const TodoCompletedS = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 29px;
`

const Task = styled.div`
  display: grid;
  grid-template-columns: 1fr 40px;
`

const TodoCompleted = ({setTodos, todos, category, filtroTodos}) => {
  return ( 
    <TodoCompletedS>
      {filtroTodos ?
        filtroTodos.map(todo => ( 
          <Task>
            <Todo  
              todo={todo}
              setTodos={setTodos}
              todos={todos}
              filtroTodos={filtroTodos}
            />

            <button> delete</button>
          </Task>
        ))
        : null
      }

      <h2>modification</h2>
    </TodoCompletedS>
   );
}
 
export default TodoCompleted;