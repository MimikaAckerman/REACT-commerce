export const showItems = async (url) => {
  try {
    const response = await fetch(url)
    const data = await response.json()
/*     console.log(data,'prueba1') */
    return data
    
  } catch (error) {
      console.log('error')
  }
}





 /* function getItems(){

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
  export {getItems};  */