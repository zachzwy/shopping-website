import React, { useContext } from "react";
import MyContext from "../../context";

const OrderFilter = ({ productsFound }) => {
  const { dispatch } = useContext(MyContext);

  return (
    <div className="order-filter">
      <span>{productsFound} Product(s) found.</span>
      <span className="order-filter-select">
        Order by{" "}
        <select
          onChange={e =>
            dispatch({
              type: "UPDATE_ORDER_FILTER",
              payload: e.target.value
            })
          }
        >
          <option value="select">Select</option>
          <option value="low-to-high">Lowest to highest</option>
          <option value="high-to-low">Highest to lowest</option>
        </select>{" "}
      </span>
    </div>
  );
};

export default OrderFilter;
