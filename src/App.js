import React, {useState, useEffect} from 'react';
import Todostates from './components/Todostates'
import Form from './components/Form'
import Todos from './components/Todos'
import Footer from './components/Footer'

import styled from 'styled-components'

const Container = styled.div`
  max-width: 600px;
  margin:  0 auto;
  padding: 32px 20px;

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
    getLocalStorage()  
  }, [])

  useEffect(() => {
    if (category === "active") {
      setFiltroTodos(todos.filter((todo) => todo.state === false))
    } else if (category === "completed") {
      setFiltroTodos(todos.filter((todo) => todo.state === true))
    } else {
      setFiltroTodos(todos)
    }

    saveLocalStorage()
  }, [category, todos])

  const saveLocalStorage = () => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }

  const getLocalStorage = () => {
    if(localStorage.getItem('todos')) {
      let todoLocal = JSON.parse(localStorage.getItem('todos'))
      setTodos(todoLocal)
    }else {
      localStorage.setItem('todos', JSON.stringify([]))
    }
  }

  return (
    <>
      <Container>
        <h1>#todo</h1> 
        <Todostates 
          setCategory={setCategory}
          category={category}
        />

        {category !== "completed"
          ?
              <Form
                todos={todos}
                setTodos={setTodos}
              />     
          : null
        }

        <Todos 
          setTodos={setTodos}
          category={category}
          todos={todos}
          filtroTodos={filtroTodos}
        />

      </Container>

      <Footer />
    </>
  );
}

export default App;
