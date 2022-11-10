import React from 'react'


const Store = (props) => {
  return (
<>
<h1>Store</h1>

<>
    <div id={props.id}>
      <p>{props.name}</p>
      <img src={props.img} alt={props.name} />
      <p>{props.price}</p>

    </div>
</>

</>
  )
}

export default Store