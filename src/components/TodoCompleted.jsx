import React, {useState} from 'react';
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

const BtnDelete = styled.button`
  margin-top: 40px;
  width: 124px;
  height: 40px;
  border-radius: 4px;
  background: #EB5757;
  color: #fff;
  font-weight: 600;
  border: none;
  float: right;
  font-size: 12px;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 16px;
  }
`

const TodoCompleted = ({setTodos, todos, category, filtroTodos}) => {

  const [deleteid, setDeleteid] = useState("")

  const handleDelete = () => {
    setTodos(todos.filter(todo => todo.id !== deleteid))
  }

  return ( 
    <>
      <TodoCompletedS>
        {filtroTodos ?
          filtroTodos.map(todo => ( 
            <Task>
              <Todo  
                todo={todo}
                setTodos={setTodos}
                todos={todos}
                filtroTodos={filtroTodos}
                setDeleteid={setDeleteid}
              />

              <button onClick={handleDelete}>
                <span className="material-icons">
                  delete_outline
                </span> 
              </button>
            </Task>
          ))
          : null
        }

      </TodoCompletedS>

      <BtnDelete>
        <span className="material-icons">
          delete_outline
        </span>
        delete all
      </BtnDelete>
    </>
   );
}
 
export default TodoCompleted;