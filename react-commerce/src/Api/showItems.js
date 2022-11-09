import { useState,useEffect } from "react"

//TODO
 function getItems(){

    const url = 'http://localhost:8000/storeItems'
    const[items,setItems] = useState([])
    
    console.log(url)

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
  export {getItems}; 