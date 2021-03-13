import React from 'react'; 

import styled from 'styled-components'

const BtnDelete = styled.button`
  margin-top: 10px;
  width: 124px;
  height: 40px;
  border-radius: 4px;
  background: #EB5757;
  color: #fff;
  font-weight: 600;
  border: none; 
  font-size: 12px;
  margin-left: auto;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 16px;
  }
`

const Btndelete = ({handleDelete}) => {
  return ( 
    <BtnDelete onClick={handleDelete}>
      <span className="material-icons">
        delete_outline
      </span>
      delete all
    </BtnDelete>
   );
}
 
export default Btndelete;