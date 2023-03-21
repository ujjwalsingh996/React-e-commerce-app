import React from "react";
import { Card, Button, Container } from "react-bootstrap";
import './Products.css'

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
  return (
    <React.Fragment>
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
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
        </Container>
      ))}
    </React.Fragment>
  );
};

export default Products;