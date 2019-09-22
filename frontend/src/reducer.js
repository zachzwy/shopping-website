const reducer = (state, action) => {
  let id = null;
  switch (action.type) {
    case "FETCH_PRODUCT":
      return {
        ...state,
        productList: action.payload
      };
    case "GET_CART_PRODUCT":
      return {
        ...state,
        cartProductList: action.payload
      };
    case "TOGGLE_SIZE_FILTER":
      return {
        ...state,
        sizeFilter: state.sizeFilter.includes(action.payload)
          ? state.sizeFilter.filter(size => size !== action.payload)
          : [...state.sizeFilter, action.payload]
      };
    case "UPDATE_ORDER_FILTER":
      return {
        ...state,
        orderFilter: action.payload
      };
    case "ADD_TO_CART":
      id = action.payload.id;
      if (state.cartProductList.hasOwnProperty(id))
        return {
          ...state,
          cartProductList: {
            ...state.cartProductList,
            [id]: {
              product: state.cartProductList[id].product,
              quantity: state.cartProductList[id].quantity + 1
            }
          }
        };
      else
        return {
          ...state,
          cartProductList: {
            ...state.cartProductList,
            [id]: {
              product: action.payload,
              quantity: 1
            }
          }
        };
    case "REMOVE_FROM_CART":
      id = action.payload;
      if (state.cartProductList[id].quantity === 1) {
        const newCartProductList = { ...state.cartProductList };
        delete newCartProductList[id];
        return {
          ...state,
          cartProductList: newCartProductList
        };
      } else
        return {
          ...state,
          cartProductList: {
            ...state.cartProductList,
            [id]: {
              product: state.cartProductList[id].product,
              quantity: state.cartProductList[id].quantity - 1
            }
          }
        };

    default:
      return new Error();
  }
};

export default reducer;
