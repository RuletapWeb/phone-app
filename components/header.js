import React from 'react';
import styled from 'styled-components/native';
import tapLogo from '../images/logo.png';

const HeaderWrapper = styled.header`
  background-color: #f6f7fb;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  top: 0;
`;

const Image = styled.img`
  width: 125px;
  height: 65px;

  @media (max-width: 700px) {
    width: 89.28px;
    height: 46.43px;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <Image src={tapLogo} alt="Tap Logo" />
  </HeaderWrapper>
);

export default Header;