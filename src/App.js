import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import Products from './components/Products';


function App() {
  return (
    <React.Fragment>
      <Navbar bg="dark" expand='lg' variant='dark' >
        <Container>
          <Navbar.Brand href='#'>Home</Navbar.Brand>
          <Navbar.Brand href='#'>Store</Navbar.Brand>
          <Navbar.Brand href='#'>About</Navbar.Brand>
        </Container>
      </Navbar>
      <Products></Products>
    </React.Fragment>
  );
}

export default App;
