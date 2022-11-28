import React from "react";
import { useState, useEffect } from "react";
import { fetchItems } from "../../../Api/fetchItems";
import data from "../../../assets/db/data.json";




const Search = () => {

  const [filteredList, setFilteredList] = new useState(data);

  const filterBySearch = (event) => {
    // Access input value
    const query = event.target.value;
    // Create copy of item list
    var updatedList = [...data];
    // Include all elements which includes the search query
    updatedList = updatedList.filter((item) => {
      return item.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });
    // Trigger render with updated values
    setFilteredList(updatedList);
  };


 
  /* const [users, setUsers] = useState([]);
  const url = " http://localhost:8000/Users";

  useEffect(() => {
    const connection = async () => {
      const data = await fetchItems(url);
      setUsers(data);
      /* console.log(data)  */
  /*    };
    connection();
  }, [url]); 

 */

  return (

<div className="App">
      <div className="search-header">
        <div className="search-text">Search:</div>
        <input id="search-box" onChange={filterBySearch} />
      </div>
      <div id="item-list">
     
          {filteredList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      
      </div>
    </div>


  );
};
export default Search;
