import React, { useContext } from "react";
import MyContext from "../context";

const SizeFilter = () => {
  const sizes = ["XS", "S", "M", "ML", "L", "XL", "XXL"];
  const { state, dispatch } = useContext(MyContext);
  const { sizeFilter } = state;

  return (
    <div className="size-filter">
      <div className="size-filter-title">Sizes:</div>
      <div className="size-filter-icon-container">
        {sizes.map(size => (
          <div
            key={size}
            className="size-filter-icon"
            style={{
              backgroundColor: sizeFilter.includes(size)
                ? "black"
                : "rgb(220, 220, 220)",
              color: sizeFilter.includes(size) ? "white" : "black"
            }}
            onClick={() =>
              dispatch({
                type: "TOGGLE_SIZE_FILTER",
                payload: size
              })
            }
          >
            {size}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SizeFilter;
