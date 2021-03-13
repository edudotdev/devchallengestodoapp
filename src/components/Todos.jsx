import React from 'react';
import Todo from './Todo'
import BtnDelete from './Btndelete'

import styled from 'styled-components'

const TodosS = styled.div`
  margin-top: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 29px;
`

const Todos = ({setTodos, todos, category, filtroTodos}) => {

  const handleDelete = () => {
    setTodos(todos.filter(todo => todo.state === false))
  }

  return ( 
    <TodosS>   
      {filtroTodos.length 
        ?
          filtroTodos.map(todo => ( 
            <Todo  
              todo={todo}
              setTodos={setTodos}
              todos={todos}
              filtroTodos={filtroTodos}
              category={category}
            />
          ))
        : 
          <p>no hay nada</p>
      }

      {category === 'completed' && filtroTodos.length !== 0
        ?
          <BtnDelete
          handleDelete={handleDelete}
          />
        :
          null
      }

    </TodosS>
   );
}

export default Todos;