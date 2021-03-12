import React from 'react';
import Todo from './Todo'

import styled from 'styled-components'

const TodosS = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 29px;
`

const Todos = ({setTodos, todos, category, filtroTodos}) => {

  return ( 
    <TodosS>   
      {filtroTodos.length ?
        filtroTodos.map(todo => ( 
          <Todo  
            todo={todo}
            setTodos={setTodos}
            todos={todos}
            filtroTodos={filtroTodos}
          />
        ))
        : null
      }

    </TodosS>
   );
}

export default Todos;