import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

import { getItems } from '../../Api/showItems'


const Store = () => {
const storeItems = getItems()


  return (
<>
<h1>STORE</h1>

{storeItems.map((items) => (
    <div key={items.id}>
    <img src={items.img} alt={items.name} />
    <h4>{items.name}</h4>
    <h4>{items.price}</h4>
  </div>
))}

</>
  )
}

export default Store