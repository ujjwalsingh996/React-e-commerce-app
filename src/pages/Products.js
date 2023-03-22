import React, { useContext, useState } from "react";
import { Card, Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import Cart from "../components/Cart/Cart";

import "./Products.css";
import CartContext from "../components/store/cart-context";

const productsArr = [
  {
    route: "p1",
    title: "Colors",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    route: "p2",
    title: "Black and white Colors",

    price: 50,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    route: "p3",
    title: "Yellow and Black Colors",

    price: 70,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    route: "p4",
    title: "Blue Color",

    price: 100,

    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Products = () => {
  const [show, setShow] = useState(false);
  const cartCtx = useContext(CartContext);

  const handleClose = () => setShow(false);

  const addToCartHandler = (prod) => {
    cartCtx.addItem(prod);
  };
  return (
    <React.Fragment>
      <Cart show={show} handleClose={handleClose}></Cart>

      {productsArr.map((prod) => (
        <Link to={prod.route}>
          <Container className="products">
            <Card className="mt-3" style={{ width: "18rem" }}>
              <Card.Img variant="top" src={prod.imageUrl} />
              <Card.Body>
                <Card.Title>Album</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Rs {prod.price}
                </Card.Subtitle>
                <Card.Text>{prod.title}</Card.Text>
                <Button
                  onClick={() => addToCartHandler(prod)}
                  variant="primary"
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Container>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default Products;
