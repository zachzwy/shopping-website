import React, { useContext } from "react";
import MyContext from "../../context";
import Product from "./Product";
import OrderFilter from "./OrderFilter";

const Shelf = () => {
  const { state } = useContext(MyContext);
  let { productList, sizeFilter, orderFilter } = state;

  productList = Object.values(productList);

  productList = sizeFilter.length
    ? productList.filter(product => {
        for (let availSize of product.availableSizes) {
          if (sizeFilter.includes(availSize)) return true;
        }
        return false;
      })
    : productList;

  if (orderFilter === "select") productList = productList;
  else
    productList.sort((a, b) =>
      orderFilter === "low-to-high" ? a.price - b.price : b.price - a.price
    );

  return (
    <div className="shelf">
      <OrderFilter productsFound={productList.length} />
      <div className="product-list">
        {productList.map(product => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shelf;
