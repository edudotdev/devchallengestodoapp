import React from 'react';

import styled from 'styled-components'

const FooterS = styled.footer`
  position: absolute;
  width: 100%;
  background: #fff;
  bottom: 0;
  padding: 24px 0;
  text-align: center;

  p {
    color: #A9A9A9;

    @media only screen and (max-width: 600px) {
      font-size: 12px;  
    }
  }
`

const Footer = () => {
  return ( 
    <FooterS>
      <p>created by <b>EduardinhoRL</b> - devChallenges.io</p>
    </FooterS>
   );
}
 
export default Footer;