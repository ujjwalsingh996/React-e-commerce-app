import React from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const params = useParams();
  console.log(params.productTitle);

  let content;
  if (params.productTitle === "p1") {
    content = (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Product 1</h3>
          <p>Multicolor Product</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  if (params.productTitle === "p2") {
    content = (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%202.png"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3 style={{ color: "black" }}>Product 2</h3>
          <p style={{ color: "black" }}>Abstract Black</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (params.productTitle === "p3") {
    content = (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%203.png"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Product 3</h3>
          <p>Black and Yellow Product.</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }

  if (params.productTitle === "p4") {
    content = (
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://prasadyash2411.github.io/ecom-website/img/Album%204.png"
          alt="Fourth slide"
        />

        <Carousel.Caption>
          <h3>Product 4</h3>
          <p>Blue and White Product</p>
        </Carousel.Caption>
      </Carousel.Item>
    );
  }
  return (
    <section>
      <Carousel>{content}</Carousel>
    </section>
  );
};

export default ProductDetail;
