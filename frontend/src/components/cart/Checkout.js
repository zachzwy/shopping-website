import React, { useContext } from "react";
import MyContext from "../../context";

const Checkout = () => {
  const { state } = useContext(MyContext);
  const { cartProductList } = state;
  const subtotal = Object.values(cartProductList).reduce(
    (total, { product, quantity }) => total + product.price * quantity,
    0
  );
  return (
    <div className="checkout">
      <div className="checkout-subtotal">
        SUBTOTAL
        <span className="checkout-subtotal-number">{subtotal.toFixed(2)}</span>
      </div>
      <div className="checkout-button">CHECKOUT</div>
    </div>
  );
};

export default Checkout;
