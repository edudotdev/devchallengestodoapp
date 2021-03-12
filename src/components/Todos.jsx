import React from 'react';
import Todoall from './Todoall'

import styled from 'styled-components'

const TodosS = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 29px;
`

const Todos = ({setTodos, todos, category}) => {

  
  return ( 
    <TodosS>   
    
      {todos.length ?
        todos.map(todo => ( 
          <Todoall  
            todo={todo}
            setTodos={setTodos}
            todos={todos}
          />
        ))
        : null
      }

    </TodosS>
   );
}
 
export default Todos;