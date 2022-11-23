import React, { useReducer, useContext, useEffect, useState } from "react";

import { LoginContext } from "../../../context/LoginContext";
import { LoginReducer } from "../../../context/LoginReducer";

import { fetchUsers } from "../../../Api/fetchUsers";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "./../../../design/Login.css";

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

    /* await useLogin({ username, password }); */

    //TODO add password in if
    const userExist = users.map((user) => {
      if (user.username === state.username) {
        return true;
      } else {
        return false;
      }
    });
    if (userExist.includes(true)) {
      dispatch({ type: "success" });
      console.log("successfully");
    } else {
      dispatch({ type: "error", payload: "wrong username or password" });
      console.log("unsuccessful");
    }
  };

  const [name, setName] = useContext(LoginContext);
  console.log(setName);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="btn-login">
        <Button variant="info" onClick={handleShow}>
          Login User
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="container">
            <div className="contact-box">
              <div className="left"></div>
              <div className="Login User">
                <h2>Login User</h2>
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
              </div>
            </div>
          </div>
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

export default Login;
