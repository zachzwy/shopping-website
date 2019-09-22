import React, { useState, useContext } from "react";
import MyContext from "../../context";
import CartProduct from "./CartProduct";

const CartShelf = () => {
  const { state } = useContext(MyContext);
  const { cartProductList } = state;

  return (
    <div className="cart-shelf">
      {Object.keys(cartProductList).length ? (
        Object.entries(cartProductList).map(([id, value]) => (
          <CartProduct key={id} value={value} />
        ))
      ) : (
        <div className="nothing-in-cart">
          You don't have anything in cart yet
        </div>
      )}
    </div>
  );
};

export default CartShelf;
