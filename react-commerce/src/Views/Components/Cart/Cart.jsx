import React from 'react'
import ProductContainer from '../ProductContainer/ProductContainer'
import useShop from '../ShopContext/ShopContext'

const Cart = () => {
  const {products,total} = useShop();
  return (
   <>
  <h1>Cart</h1>
  <h2>Your cart total is {total}.00$</h2>
  <div>
    {products.map((product) => (
      <ProductContainer
        {...product} key={product}
      />
    ))}
  </div>
   </>
  )
}

export default Cart