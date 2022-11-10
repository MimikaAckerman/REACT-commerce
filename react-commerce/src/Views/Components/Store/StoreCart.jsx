import React from 'react'
import { useState } from 'react'


const StoreCart = (props) => {

  return (
    <>
    <div>esto es StoreCart</div>


     <div id={props.id}>
      <p>{props.name}</p>
      <img src={props.img} alt={props.name} />
      <p>{props.price}</p>

    </div>
    
    </>
  )
}

export default StoreCart