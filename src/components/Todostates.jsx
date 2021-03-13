import React from 'react';

import styled from 'styled-components'

const Container = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: space-around;
  border-bottom: 1px solid #BDBDBD;
`
const Buttons = styled.div`
  position: relative;
  width: 90%;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    width: 85%;
  }

  .indicator {
    position: absolute;
    height: 4px;
    width: var(--btnState);
    bottom: -1px;
    background: #2F80ED;
    border-radius: 4px 4px 0px 0px;
    transition: left .3s ease;
  }

  button {
    width:  var(--btnState);
    padding: 19px 0;
    background: none;
    font-weight: 600;
    border: none;
    cursor: pointer;
    outline: none;

    @media only screen and (max-width: 600px) {
      font-size: 12px;  
    }
  }

  .all {
    left: 0;
    right: unset;
  }
  .active {
    left: calc(50% - (var(--btnState) / 2));
  }
  .completed {
    left: calc(100% - var(--btnState));
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
      <Buttons>
        <button onClick={handleClick} name="all">All</button>
        <button onClick={handleClick} name="active">Active</button>
        <button onClick={handleClick} name="completed">Completed</button>
        <div className={`indicator ${category}`}></div>
      </Buttons>
    </Container>
   );
}
 
export default Todostates;