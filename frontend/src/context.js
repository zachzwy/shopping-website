import { createContext } from "react";

const MyContext = createContext({
  productList: {},
  cartProductList: {},
  sizeFilter: [],
  orderFilter: "select"
});

export default MyContext;
