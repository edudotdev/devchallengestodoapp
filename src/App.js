import React, {useState} from 'react';
import Todostates from './components/Todostates'
import Form from './components/Form'
import Todos from './components/Todos'


import styled from 'styled-components'

const Container = styled.div`
  width: 600px;
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

const ContainerTodos = styled.div`
  margin-top: 33px;
`

function App() {
  
  const [todos, setTodos] = useState([])
  const [category, setCategory] = useState("all")
  

  return (
    <Container>
      <h1>#todo</h1> 
      <Todostates 
        setCategory={setCategory}
        category={category}
      />
      <Form 
        todos={todos}
        setTodos={setTodos}
      />
      <ContainerTodos> 
        <Todos 
          setTodos={setTodos}
          category={category}
          todos={todos}
        />
      </ContainerTodos>
    </Container>
  );
}

export default App;
