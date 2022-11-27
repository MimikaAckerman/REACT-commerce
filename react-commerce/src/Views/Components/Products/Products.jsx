import { useCart } from "../../../context/cart-context";
import React from "react";
import "../../../design/products.css";
import "../../../design/products.css";
const Products = (items) => {
  const { dispatch } = useCart();

  return (
    <>
  
    <div id={items.id} className="container">
        <img src={items.img} alt={items.name} className="img-container" />
        
    
        <div className="information">
          <h1>{items.name}</h1>
          <h3>{items.price}</h3>
          <button
        className="buttonAdd-products"
        onClick={() =>
          dispatch({
            type: "ADD_TO_CART",
            payload: items,
          })
        }
      >
        Add
      </button>


        </div>
        
      </div>
    
     

      
    </>
  );
};

export default Products;
