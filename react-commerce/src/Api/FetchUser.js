import { v4 } from "uuid";
import { useState } from "react";
import { useEffect } from "react";
  const FetchUser = (state) => {
    state.id = v4();
    fetch("http://localhost:8000/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });

    const [usersdata,setUsersdata] = useState([]);
  const fetchUsers = async() =>{
    const response = await fetch('http://localhost:8000/Users');
    const data = await response.json();
    setUsersdata(data)

  }
useEffect(() =>{
  fetchUsers()
  console.log(usersdata.email)
},[])
useEffect(() =>{
  console.log(usersdata.find(user =>  user.username == "patata"))
})

  };

export default FetchUser




