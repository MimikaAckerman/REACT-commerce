import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useReducer } from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUsers } from "../../../Api/fetchUsers";
import { LoginContext, LoginReducer } from "../../../context";


import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



const initialLogin = {
  username: "",
  password: "",
  isLoading: false,
  error: "",
  isLoggedIn: false,
};

const LoginPage = () => {
  const { login } = useContext(LoginContext);
  /*   console.log(login) */

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

  const onLogin = (e) => {
    e.preventDefault();
    const userExist = users.map((user) => {
      if (user.username === state.username) {
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      login(state.username);
      /*    useNavigate("/", {
      replace: true,
    }) */
      window.location.replace("./Store");
      console.log("successfully");
    } else {
      window.location.replace('./')
      console.log("unsuccessful");
    }

    /* login("mimika ackerman");

    useNavigate("/", {
      replace: true,
    }); */
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  return (
    <>

<Button variant="primary" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
        <form>
        <input
          type="text"
          placeholder="enter your username"
          name="username"
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
          placeholder="enter your passsword"
          name="password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: "field",
              field: "password",
              value: e.target.value,
            })
          }
        />
        <button onClick={onLogin}>login</button>
      </form>
          
          
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal>









      
    </>
  );
};
export default LoginPage;
