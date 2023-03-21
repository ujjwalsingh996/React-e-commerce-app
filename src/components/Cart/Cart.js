import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ListGroup, Offcanvas, Toast } from "react-bootstrap";

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
const Cart = (props) => {
  return (
    <>
      <Offcanvas show={props.show} onHide={props.handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            {productsArr.map((prod) => (<Toast>
            <Toast.Body><img
                src={prod.imageUrl}
                className="rounded me-2"
                alt="image"
              /><strong>{prod.title} - Rs {prod.price}</strong>{' '}
              <Button className="content-right">Remove</Button></Toast.Body>
          </Toast>))}
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Cart;
