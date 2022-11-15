import { useState } from "react";
import React from "react";


import FetchUser from "../../../Api/FetchUser";


const Register = () => {
  const [state, setState] = useState({
    id: "",
    name: "",
    lastname: "",
    email: "",
    password: "",
  });

  const changeInput = (e) => {
    const stateCopy = { ...state };
    stateCopy[e.target.name] = e.target.value;
    setState(stateCopy);
  };

  
  console.log(state);

  const submit = (e) => {
    e.preventDefault();
    FetchUser(state)
  };
    




  return (
    <>
    <br />
      <form onSubmit={submit}>
        <input
          type="text"
          name="name"
          value={state.name}
          onChange={changeInput}
        />
        <input
          type="text"
          name="lastname"
          value={state.lastname}
          onChange={changeInput}
        />
        <input
          type="text"
          name="email"
          value={state.email}
          onChange={changeInput}
        />
        <input
          type="text"
          name="password"
          value={state.password}
          onChange={changeInput}
        />

        <input type="submit" value="submit" />
      </form>
    </>
  );
};

export default Register;
