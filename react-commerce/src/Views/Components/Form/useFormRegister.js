import { useState } from "react";
import fetchCreateUsers from "../../../Api/fetchCreateUsers";
import { useEffect } from "react";
import { fetchUsers } from "../../../Api/fetchUsers";

import { useNavigate } from "react-router-dom";

export const useFormRegister = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});


  const navigate = useNavigate();

  const handleInput = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
    /* setForm({
        ...form,
        [e.target.name]:e.target.value
    }) */
  };

  const handleBlur = (e) => {
    handleInput(e);
    setErrors(validateForm(form));
  };

  const [users, setUsers] = useState([]);
  const url = " http://localhost:8000/Users";

  useEffect(() => {
    const connection = async () => {
      const data = await fetchUsers(url);
      setUsers(data);
    };
    connection();
  }, [url]);

  /* console.log(users) */

  const handleSubmit = (e) => {
    e.preventDefault();

    const userExist = users.map((user) => {
      if (user.username === form.username) {
        return true;
      } else {
        return false;
      }
      
     



    });

    if (userExist.includes(true)) {
      console.log("user exist");
     /*  window.location.replace("/"); */
     navigate("/")
      
    } else {
      fetchCreateUsers(form);
      console.log("user not exist");
     /*  window.location.replace("/"); */
     navigate("/")
     
    }
    


  };

  return {
    form,
    errors,
    handleInput,
    handleBlur,
    handleSubmit,
  };
};
