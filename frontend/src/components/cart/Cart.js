import React, { useState } from "react";
import CartShelf from "./CartShelf";
import Checkout from "./Checkout";

export default function Cart() {
  const [isShown, setIsShown] = useState(0);
  return (
    <div
      className="cart"
      style={{
        left: `calc(100vw - ${isShown ? 500 : 0}px)`
      }}
    >
      <div className="cart-button" onClick={() => setIsShown(!isShown)}>
        {isShown ? "X" : "Cart"}
      </div>
      <div className="cart-container">
        <div className="cart-title">CART</div>
        <CartShelf />
        <Checkout />
      </div>
    </div>
  );
}
