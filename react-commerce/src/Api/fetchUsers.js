
export const fetchUsers = async(url) =>{

  try {
    const response = await fetch(url);
    const data = await response.json()
    console.log(data,'fetchUser')
  } catch (error) {
    console.log('something wrong');
  }

}







/* 
    const response = await fetch('http://localhost:8000/Users');
    const data = await response.json();
    setUsersdata(data)

  }
  useEffect(() =>{
    fetchUsers()
    console.log(state.email)
  },[])
  useEffect(() =>{
    console.log(usersdata.find(user =>  user.username == "patata"))
  })
  
return{
    fetchCreateUsers
}
   */













