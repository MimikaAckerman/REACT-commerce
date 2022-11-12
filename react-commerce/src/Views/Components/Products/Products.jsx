import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import useShop from "../ShopContext/ShopContext";

const Products = ({ img, author, price, id }) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [state, setState] = useState(false);

  useEffect(() => {
    const productInCart = products.find((product) => product.id === id);

    if(productInCart){
      setState(true)
    }else{
      setState(false)
    }
  },[products,author]);

  const handleClick = () => {
    const product = { author,price,img };

    if (state) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };


  return (
    <>
      <img src={img} alt={author} className="" />
      <h2>{author}</h2>
      <h2>{price}</h2>
      <button onClick={handleClick} state={state}>
        <p>{state ? "Remove to cart" : "Add to cart"}</p>
      </button>
    </>
  );
};

export default Products;
