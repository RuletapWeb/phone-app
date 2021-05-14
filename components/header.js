import React from 'react';
import { Text } from 'react-native';

const Header = (props) => {
  return (
    <Text>Hello {props.name}, Welcome to RuleTap!</Text>
  );
}

export default Header;