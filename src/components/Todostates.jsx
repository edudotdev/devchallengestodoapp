import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
  position: relative;
  margin-top: 45px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #BDBDBD;

  .indicator {
    position: absolute;
    height: 4px;
    width: 89px;
    bottom: -1px;
    background: #2F80ED;
    border-radius: 4px 4px 0px 0px;
    transition: left .3s ease;
  }

  button {
    width:  89px;
    padding: 19px 0;
    background: none;
    font-weight: 600;
    border: none;
    cursor: pointer;
    outline: none;
  }
`

const Todostates = ({category, setCategory}) => {

  const handleClick = e => {
    if(category === e.target.name){
      return
    } else {
      setCategory(e.target.name)
    } 
  }

  return ( 
    <Container>
      <button onClick={handleClick} name="all">All</button>
      <button onClick={handleClick} name="active">Active</button>
      <button onClick={handleClick} name="completed">Completed</button>
      <div className={`indicator ${category}`}></div>
    </Container>
   );
}
 
export default Todostates;