import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';



function getItems(){

  const url = 'http://localhost:8000/storeItems'
  const[items,setItems] = useState([])
  useEffect(() => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
          setItems(data)
          console.log(data)
    })
  },[])
  return items
}


const Store = () => {
  const result =getItems()




  


/*   const url = 'http://localhost:8000/storeItems'; */
  /* const [data,setData] = useState([])
  
    useEffect(() => {
      const fetchData = async () => {
        const response = await fetch(url);


        
        const {data} = await response.json()
      
        setData(data)

       /*  de esta manera nos da como resultado undefined 
        const {data} = await response.json()
        console.log(data) */
      

 /*  fetchData()
    }, [url])  */
  

  return (
<>
<h1>STORE</h1>
{result.map(elements => (
    <div key={elements.id}>
      <img src={elements.img} alt={elements.name} />
      <h2>{elements.price}</h2>
    </div>
))}
</>
  )
}

export default Store