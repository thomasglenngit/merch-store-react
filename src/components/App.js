import React from 'react';
import DisplayWindow from './DisplayWindow';
import Header from './Header';
import Container from 'react-bootstrap/Container';
import Footer from './Footer';

function App() {
  const bodyStyle = {
    backgroundColor: 'white',
    color: 'black',
    minHeight: '100vh'
  }
  return(
    <Container fluid style={bodyStyle}>
      <Header />
      <DisplayWindow />
      <Footer />
    </Container>
  )
}

export default App;
