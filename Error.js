import React from 'react';
import InfoPage from './components/generics/InfoPage';
import Message from './components/Message';
import errorIcon from './images/error_illus.png';

const Error = () => (
  <InfoPage>
    <Message
      iconUrl={errorIcon}
      copy="Tenemos problemas para conectarnos a internet. Volvé a intentalo más tarde."
      ctaText="Reintentar"
    />
  </InfoPage>
);

export default Error;