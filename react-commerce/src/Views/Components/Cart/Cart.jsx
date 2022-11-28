import React from "react";
import { useCart } from "../../../context/cart-context";
import './../../../design/cart.css'
const Cart = () => {
  const { state, dispatch } = useCart();
  console.log(state.productName);

  return (
    <div className="products-cart">
      <h1>Cart</h1>
      
      <h2> Total in Products:{state.totalAmount}</h2>
      {state.productName.map((itemsOfCart) => (
        <div key={itemsOfCart.id}>
          <p>Products: {itemsOfCart.name}</p>
          <p>quantity:{itemsOfCart.quant}</p>
          <p>price: {itemsOfCart.price}</p>
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_FROM_CART",
                payload: itemsOfCart,
              })
            }
          >
            Remove From Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
