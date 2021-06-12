import React from 'react';
import styled from 'styled-components/native';

const Container = styled.div`
  display: grid;
  place-items: center;
`;

const Message = ({ children }) => <Container>{children}</Container>;

export default Message;