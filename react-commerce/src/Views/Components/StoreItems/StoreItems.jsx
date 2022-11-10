import React, { useState,useEffect } from 'react'
import { showItems } from '../../../Api/showItems'


import StoreCart from '../Store/StoreCart'

const StoreItems = () => {

  const [state,setState] = useState([])
  const url = ' http://localhost:8000/storeItems'

  useEffect(() =>{
    const connection = async () => {
      const data = await showItems(url)
      setState(data)
      console.log(state,'prueba2')
    }
    connection()
  },[url])

  return (
  <>

  {state.map((xd) => (
    
    <StoreCart
    key={xd.id}
    id={xd.id}
    name={xd.name}
    price={xd.price}
    img={xd.img}
    />
    
    ))}
    
     
    
  </>
  )
}

export default StoreItems