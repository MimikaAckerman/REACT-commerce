import React from 'react'
import storeItems from '../assets/db/data.json'

const Store = () => {

  return (
<>

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