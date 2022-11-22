import { useState } from "react";
import fetchCreateUsers from "../../../Api/fetchCreateUsers";
import { useEffect } from "react";
import { fetchUsers } from "../../../Api/fetchUsers";
/* import { Navigate } from "react-router-dom"; */

export const useFormRegister = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

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
      if(user.email === form.email){
        return true;
      }else{
        return false;
      }

    });
    if(userExist.includes(true)){
console.log('user exist');
    }else{
      fetchCreateUsers(form);
      console.log('user not exist');
    /*  Navigate('/Home') */
    window.location.replace('/Home')
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
