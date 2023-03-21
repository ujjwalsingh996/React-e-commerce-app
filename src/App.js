import React from "react";
import Products from "./components/Products";
import CartProvider from "./components/store/CartProvider";

function App() {
  return (
    <CartProvider>
      <Products></Products>
    </CartProvider>
  );
}

export default App;
