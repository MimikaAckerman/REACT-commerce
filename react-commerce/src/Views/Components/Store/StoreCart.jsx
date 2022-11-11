import React from 'react'
import CounterApp from '../Counter/CounterApp';
import './../../Layout/StoreCart/StoreCart.css';




const StoreCart = (props) => {
  return (
    <>
<div id={props.id} className='container'>
      <img src={props.img} alt={props.name} className='img'/>
      <p>{props.name}</p>
      <p>{props.price}</p>

      <CounterApp/>
</div>



     
    
    </>
  )
}

export default StoreCart