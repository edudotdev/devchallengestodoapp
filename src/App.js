import React, {useState, useEffect} from 'react';
import Todostates from './components/Todostates'
import Form from './components/Form'
import Todos from './components/Todos'
import TodoCompleted from './components/TodoCompleted'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  margin: 32px auto 0 auto;

  h1 {
    font-family: Raleway;
    font-size:36px;
    text-align: center;
    color: #333333;
    font-weight: 700;
    letter-spacing: -2px;
  }
`

function App() {
  
  const [todos, setTodos] = useState([])
  const [category, setCategory] = useState("all")
  const [filtroTodos, setFiltroTodos] = useState([]) 
  
  useEffect(() => {
    if (category === "active") {
      setFiltroTodos(todos.filter((todo) => todo.state === false))
    } else if (category === "completed") {
      setFiltroTodos(todos.filter((todo) => todo.state === true))
    } else {
      setFiltroTodos(todos)
    }
  }, [category, todos])


  return (
    <Container>
      <h1>#todo</h1> 
      <Todostates 
        setCategory={setCategory}
        category={category}
      />

        {category !== "completed"
          ?
            <>
              <Form
                todos={todos}
                setTodos={setTodos}
              /> 
              <Todos 
                setTodos={setTodos}
                category={category}
                todos={todos}
                filtroTodos={filtroTodos}
              />
            </>
          : <TodoCompleted 
              setTodos={setTodos}
              category={category}
              todos={todos}
              filtroTodos={filtroTodos} 
            />
        }

    </Container>
  );
}

export default App;
