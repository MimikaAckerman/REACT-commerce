import React, { useReducer } from 'react'
import { useContext } from 'react';

import { LoginContext } from '../../../context/LoginContext'
import { useLogin } from './useLogin';


function LoginReducer(state,action){
  switch(action.type){
    case"field":{
      return{
        ...state,
        [action.field]:action.value
      };
    }
    case "login":{
      return{
        ...state,
        isLoading:true,
        error:false
      }
    }
    case "success":{
      return{
        ...state,
       isLoggedIn:true,
       isLoading:false
      };
    }
    case "error":{
      return{
        ...state,
        error:action.payload,
        isLoading:false
      };
    }
    case "logout":{
      return{
        ...state,
        isLoggedIn:false,
        username:'',
        password:''
      };
    }
    default:{
      return state;
    }
  }
}

const initialState ={
  username:'',
  password:'',
  isLoading:false,
  error:'',
  isLoggedIn:false

};



const Login = () => {
  const[state,dispatch] = useReducer(LoginReducer,initialState);
  const {username,password,isLoading,error,isLoggedIn}= state;


  const onSubmit = async (e)=>{
    e.preventDefault();
    dispatch({type: "login"});
  
  try{
    await useLogin({username,password});
    dispatch({type:"success"});




    
  }catch(err){
    dispatch({type: "error",payload:"wrong username or password"})
  }
  }
const [name,setName] = useContext(LoginContext)

  return (

<>
      {isLoggedIn ? (
        <>
          <h1>Hi {username}!</h1>
          <button
            onClick={() => {
              dispatch({ type: "logout" });
            }}
          >
            logout
          </button>
        </>
      ) : (
        <>
          <form onSubmit={onSubmit}>
            <h2>Login</h2>
            <p>{error}</p>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={e =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.target.value
                })
              }
            />
            <input
              type="text"
              placeholder="password"
              autoComplete="new-password"
              value={password}
              onChange={e =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.target.value
                })
              }
            />
            <button type="submit" disabled={isLoading}>
              {!isLoading ? "Log in" : "Logging in.."}
            </button>
          </form>
   
        </>
      )}
 </>
  );

            }

export default Login