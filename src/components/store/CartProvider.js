import React, { useState } from "react";
import CartContext from "./cart-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);
  const addItemtoCartHandler = (arr) => {
    setItems((prevItem) => [...prevItem, arr]);
    console.log(items);
  };
  const cartContext = {
    items: items,
    addItem: addItemtoCartHandler,
    removeItem: (item) => {},
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
