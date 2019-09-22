import React, { useState, useContext } from "react";
import CartShelf from "./CartShelf";
import Checkout from "./Checkout";

const Cart = () => {
  const [offset, setOffset] = useState(0);
  return (
    <div
      className="cart"
      style={{
        left: `calc(100vw - ${offset}px)`
      }}
    >
      <div
        className="cart-button"
        onClick={() => setOffset(offset => 500 - offset)}
      >
        {offset ? "X" : "Cart"}
      </div>
      <div className="cart-container">
        <div className="cart-title">CART</div>
        <CartShelf />
        <Checkout />
      </div>
    </div>
  );
};

export default Cart;
