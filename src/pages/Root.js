import React, { useContext, useState } from "react";
import { Navbar, Container, Button } from "react-bootstrap";
import CartContext from "../components/store/cart-context";
import Cart from "../components/Cart/Cart";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const cartCtx = useContext(CartContext);
  const handleShow = () => setShow(true);
  return (
    <React.Fragment>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="/homepage">Home</Navbar.Brand>
          <Navbar.Brand href="/">Store</Navbar.Brand>
          <Navbar.Brand href="/aboutus">About</Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
            Cart ({cartCtx.items.length})
          </Button>
        </Container>
      </Navbar>
      <Cart show={show} handleClose={handleClose}></Cart>
      <Outlet></Outlet>
    </React.Fragment>
  );
};

export default RootLayout;
