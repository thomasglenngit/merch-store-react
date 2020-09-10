import React from 'react';
import DisplayWindow from './DisplayWindow';
import Header from './Header';
import { Container } from 'react-bootstrap';

function App() {
  return(
    <Container fluid>
      <Header />
      <DisplayWindow />
    </Container>
  )
}

export default App;
