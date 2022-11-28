export const fetchItems = async(url) =>{

    try {
      const response = await fetch(url);
      return  await response.json()
      
    } catch (error) {
      console.log('something wrong');
    }
  
  
  }
  
  