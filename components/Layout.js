import React from 'react';
import { createGlobalStyle } from 'styled-components/native';
import FontStyles from './FontStyles';

const GlobalStyle = createGlobalStyle`
* {
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
    border: 0 none;
    outline: 0;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`;

/*
 * Insertar Context ACA
 * Todos los children van a tener acceso (todas las views usan layout)
 */
const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <FontStyles />
    {children}
  </>
);

export default Layout;