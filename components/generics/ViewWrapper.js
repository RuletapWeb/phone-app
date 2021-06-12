import React from 'react';
import styled from 'styled-components/native';

const Container = styled.div`
  width: 100%;
  max-width: ${props =>
    props.dMaxWidth ? `${props.dMaxWidth}px` : `auto`};
  background-color: ${props =>
    props.bgColor ? props.bgColor : `auto`};
`;

const ViewWrapper = ({ dMaxWidth, mMaxWidth, bgColor, children }) => (
  <Container dMaxWidth={dMaxWidth} bgColor={bgColor}>
    {children}
  </Container>
);

export default ViewWrapper;