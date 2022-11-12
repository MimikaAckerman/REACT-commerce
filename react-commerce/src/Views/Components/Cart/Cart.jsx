import React from 'react'
import ProductContainer from '../productContainer/ProductContainer';
import UseShop from '../ShopContext/shopContext';

const Cart = () => {
  const {products,total} = UseShop();
  return (
   <>
   <h1>cart</h1>
      <h2>Your cart total is {total}.00$</h2>
      <div>
        {products.map((xd) =>(
          <ProductContainer {...xd} key={xd}/>
        ))}
      </div>
   </>
  )
}

export default Cart


