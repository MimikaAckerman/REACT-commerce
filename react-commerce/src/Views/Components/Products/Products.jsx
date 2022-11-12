import React, { useEffect } from 'react'

import { useState } from 'react';
import useShop from '../ShopContext/shopContext';

const Products = ({author,img,price,id}) => {
  const { products, addToCart, removeFromCart } = useShop();
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productInCart = products.find((product) => product.id === id);

    if(productInCart){
      setIsInCart(true)
    }else{
      setIsInCart(false)
    }
  },[products,author]);

  const handleClick = () => {
    const product = { author,price,img };

    if (isInCart) {
      removeFromCart(product);
    } else {
      addToCart(product);
    }
  };

  return (
    <>



      <img src={img} alt={author} className='img'/>
      <p>{author}</p>
      <p>{price}.00€</p>
      <button onClick={handleClick} isInCart={isInCart}>
        <p>{isInCart ? "reset to cart" : "add to cart"}</p>
      </button>

    
      

      




     
    
    </>
  )
}

export default Products