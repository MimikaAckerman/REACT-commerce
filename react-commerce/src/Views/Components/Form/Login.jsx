import React from "react";



 const Login = () => {
  
  
 
    
  return (
    <form name="loginForm" >

      <div className="row">

        <div className="col-sm-3 col-md-6">
          <label htmlFor="email">Username</label>
        </div>
        
        <div className="col-sm-9 col-md-6">
          <input 
            type="text" 
            name="email" 
           
            placeholder="admin" 
          />
        </div>

        <div className="col-sm-3 col-md-6">
          <label htmlFor="password">Password</label>
        </div>
        <div className="col-sm-9 col-md-6">
            <input 
              type="password" 
              name="password" 
         
              placeholder="admin" 
            />
        </div>

        <div className="col-sm-3 col-md-6">
        </div>
        <div className="col-sm-9 col-md-6">
          <input className="primary" type="submit" value="Login" />
        </div>
        
      </div>

   
    </form>
  )
}


export default Login;
