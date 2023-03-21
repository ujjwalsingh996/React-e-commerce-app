import React, {useState} from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import Cart from './components/Cart/Cart'
import Products from './components/Products';


function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Cart show={show} handleClose={handleClose}/>
      <Navbar bg="dark" expand='lg' variant='dark' >
        <Container>
          <Navbar.Brand href='#'>Home</Navbar.Brand>
          <Navbar.Brand href='#'>Store</Navbar.Brand>
          <Navbar.Brand href='#'>About</Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
          Cart (4)
        </Button>
        </Container>
      </Navbar>
      <Products></Products>
     
    </React.Fragment>
  );
}

export default App;
