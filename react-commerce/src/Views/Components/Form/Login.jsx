import React, { useReducer,useContext,useEffect,useState} from "react";


import { LoginContext } from "../../../context/LoginContext";
import { LoginReducer } from "../../../context/LoginReducer";
import { useLogin } from "./useLogin";
import { fetchUsers } from "../../../Api/fetchUsers";

const initialLogin = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const Login = () => {
  const [state, dispatch] = useReducer(LoginReducer, initialLogin);
  const { username, password, isLoading, error, isLoggedIn } = state;



  const [users, setUsers] = useState([]);
  const url = " http://localhost:8000/Users";

  useEffect(() => {
    const connection = async () => {
      const data = await fetchUsers(url);
      setUsers(data);
    };
    connection();
  }, [url]);





 const onSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "login" });

    try {
      /* await useLogin({ username, password }); */

      const userExist = users.map((user) => {
        if(user.username === state.username){
          return true;
        }else{
          return false;
        }
      })
      if(userExist.includes(true)){
        dispatch({ type: "success" });
        console.log('successfully')
      }
    } catch (error) {
      dispatch({ type: "error", payload: "wrong username or password" });
    }
  };
 



  const [name, setName] = useContext(LoginContext);

  return (
    <>
      {isLoggedIn ? (
        <>
          <h1>hi {username}!</h1>
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
            <h2>login</h2>
            <p>{error}</p>

            <input
              type="text"
              placeholder="enter your username"
              value={username}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "username",
                  value: e.target.value,
                })
              }
            />

            <input
              type="text"
              placeholder="enter your password"
              value={password}
              onChange={(e) =>
                dispatch({
                  type: "field",
                  field: "password",
                  value: e.target.value,
                })
              }
            />
            <button type="submit" disabled={isLoading}>
              {!isLoading ? "Log in" : "Logging in..."}
            </button>
          </form>
        </>
      )}
    </>
  );
};

export default Login;
