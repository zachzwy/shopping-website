import React, { useContext } from "react";
import MyContext from "../../context";
import CartProduct from "./CartProduct";

export default function CartShelf() {
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
}
