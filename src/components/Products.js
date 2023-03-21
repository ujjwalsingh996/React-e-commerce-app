import React, { useContext, useState } from "react";
import { Card, Button, Container, Navbar } from "react-bootstrap";
import Cart from "./Cart/Cart";

import "./Products.css";
import CartContext from "./store/cart-context";

const productsArr = [
  {
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  const [show, setShow] = useState(false);
  const cartCtx = useContext(CartContext);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const addToCartHandler = (prod) => {
    cartCtx.addItem(prod);
  };
  return (
    <React.Fragment>
      <Cart show={show} handleClose={handleClose}></Cart>
      <Navbar bg="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand href="#">Home</Navbar.Brand>
          <Navbar.Brand href="#">Store</Navbar.Brand>
          <Navbar.Brand href="#">About</Navbar.Brand>
          <Button variant="primary" onClick={handleShow}>
            Cart ({cartCtx.items.length})
          </Button>
        </Container>
      </Navbar>
      {productsArr.map((prod) => (
        <Container className="products">
          <Card className="mt-3" style={{ width: "18rem" }}>
            <Card.Img variant="top" src={prod.imageUrl} />
            <Card.Body>
              <Card.Title>Album</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Rs {prod.price}
              </Card.Subtitle>
              <Card.Text>{prod.title}</Card.Text>
              <Button onClick={() => addToCartHandler(prod)} variant="primary">
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        </Container>
      ))}
    </React.Fragment>
  );
};

export default Products;
