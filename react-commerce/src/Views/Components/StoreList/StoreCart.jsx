import React from 'react'
import './../../Layout/StoreCart/StoreCart.css';

import ButtonAdd from '../ButtonAdd/ButtonAdd';


const StoreCart = (props) => {


  return (
    <>
<div id={props.id} className='container'>
      <img src={props.img} alt={props.name} className='img'/>
      <p>{props.name}</p>
      <p>{props.price}</p>
      <button className="add">Add to Cart</button>

      <ButtonAdd key={props.id} id={props}/>
      

      
</div>



     
    
    </>
  )
}

export default StoreCart