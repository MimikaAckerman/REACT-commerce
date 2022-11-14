import { useCart } from "../helper/cart-context";
import React from "react";

const Products = (items) => {
  const { dispatch } = useCart();

  return (
    <>
      <div id={items.id} className="container">
        <img src={items.img} alt={items.name} className="img" />
        <p>{items.name}</p>
        <p>{items.price}</p>
        
        <button
          onClick={() =>
            dispatch({
              type: "ADD_TO_CART",
              payload: items,
            })
          }
        >
          Add to cart
        </button>
      </div>
    </>
  );
};

export default Products;
