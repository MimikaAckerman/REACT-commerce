import React from 'react'


import { getItems } from '../Components/Api/utilities/showItems';

import './Style/Store.css';


const Store = () => {
  const result =getItems()

  return (
<>
<h1>STORE</h1>
<div className="container">

{result.map(elements => (
    <div key={elements.id}>
      <img className='img' src={elements.img} alt={elements.name} />
      <h2>{elements.price}</h2>
    </div>
))}
</div>
</>
  )
}

export default Store