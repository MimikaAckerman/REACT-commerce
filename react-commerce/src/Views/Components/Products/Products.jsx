import { useCart } from "../../../context/cart-context";
import React from "react";
import '../../../design/products.css'

const Products = (items) => {
  const { dispatch } = useCart();

  return (
    <>
      <div className="container">
        <div id={items.id} className="carousel">
          <img src={items.img} alt={items.name} className="carousel-img" />

          <div className="information">
            <p>{items.name}</p>
            <p>{items.price}</p>
          </div>

         
            <button
              className="button-add"
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
      </div>
    </>
  );
};

export default Products;

