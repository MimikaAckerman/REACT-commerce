import React from 'react'
import { useState,useEffect } from 'react';
import { fetchItems } from '../../../Api/fetchItems';

const Search = () =>{

  const [ApiData, setApiData] = useState([]);
  const url = " http://localhost:8000/Users";

  useEffect(() => {
    const connection = async () => {
      const data = await fetchItems(url);
      setApiData(data);
      console.log(data)
    };
    connection();
  }, [url]);

  const [searchInput, setSearchInput] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);
  
  const searchItems = (searchValue) =>{
    setSearchInput(searchValue)
    if(searchInput !== ''){
      const filteredData = ApiData.filter((item) =>{
        return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setFilteredResults(filteredData)
    }else{
      setFilteredResults(ApiData)
    }
  }




  


  return (
   <>
   
   </>
  )
  }

export default Search