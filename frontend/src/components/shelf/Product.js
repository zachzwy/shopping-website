import React, { useContext } from "react";
import MyContext from "../../context";

const Product = ({ product }) => {
  const { dispatch } = useContext(MyContext);

  return (
    <div className="product">
      <div className="product-thumb">
        <img
          src={require(`../../static/products/${product.sku}_2.jpg`)}
          alt={product.title}
        />
      </div>
      <div className="product-name">{product.title}</div>
      <div className="product-price">${product.price}</div>
      <div
        className="product-add-to-cart"
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: product
          })
        }
      >
        Add to cart
      </div>
    </div>
  );
};

export default Product;
