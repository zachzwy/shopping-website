import React, { useContext, useReducer, useEffect } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import MyContext from "./context";
import reducer from "./reducer";
import SizeFilter from "./components/SizeFilter";
import Shelf from "./components/shelf/Shelf";
import Cart from "./components/cart/Cart";
import "./style.scss";

const App = () => {
  const initState = useContext(MyContext);
  const [state, dispatch] = useReducer(reducer, initState);

  useEffect(() => {
    axios
      .get("https://react-shopping-cart-67954.firebaseio.com/products.json")
      .then(res => {
        dispatch({
          type: "FETCH_PRODUCT",
          payload: res.data.products
        });
      });
    // Get cart product list from localstorage
    dispatch({
      type: "GET_CART_PRODUCT",
      payload: JSON.parse(window.localStorage.getItem("cartProduct")) || {}
    });
  }, []);

  useEffect(() => {
    window.localStorage.setItem(
      "cartProduct",
      JSON.stringify(state.cartProductList)
    );
  }, [state.cartProductList]);

  return (
    <MyContext.Provider value={{ state, dispatch }}>
      <div className="app">
        <SizeFilter />
        <Shelf />
        <Cart />
      </div>
    </MyContext.Provider>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
