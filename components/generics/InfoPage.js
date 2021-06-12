import React from 'react';
import styled from 'styled-components/native';
import Layout from '../components/Layout';

const FullHeight = styled.div`
  min-height: 100vh;
  display: grid;
  grid-template-rows: min-content 1fr;
`;
const Main = styled.main`
  height: 100%;
  display: grid;
  place-items: center;
`;

const InfoPage = ({ children }) => (
  <Layout>
    <FullHeight>
      <Main>{children}</Main>
    </FullHeight>
  </Layout>
);

export default InfoPage;