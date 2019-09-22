import React, { useContext } from "react";
import MyContext from "../../context";

const CartProduct = ({ value }) => {
  const { dispatch } = useContext(MyContext);
  const { product, quantity } = value;
  return (
    <div className="cart-product">
      <div className="cart-product-thumb">
        <img
          src={require(`../../static/products/${product.sku}_2.jpg`)}
          alt={product.title}
          width={120 * 0.5}
          height={174 * 0.5}
        />
      </div>
      <div className="cart-product-information">
        {product.title}
        <br />${product.price}
      </div>
      <div className="cart-product-quantity">X {quantity}</div>
      <div className="cart-product-remove">
        <div
          className="cart-product-remove-icon"
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_CART",
              payload: product.id
            })
          }
        >
          -
        </div>
      </div>
    </div>
  );
};

export default CartProduct;
