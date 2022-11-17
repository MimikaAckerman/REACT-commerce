import { useState } from "react";
import FetchUser from "../../../Api/FetchUser";

export const useForm = (initialForm,validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    const {name,value} = e.target
    setForm({
      ...form,
      [name]:value
    });
    /* setForm({
        ...form,
        [e.target.name]:e.target.value
    }) */
  };
  
  const handleBlur = (e) => {
    handleInput(e);
    setErrors(validateForm(form))
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    FetchUser(form)
    alert('register complete');
  };

  return {
    form,
    errors,
    handleInput,
    handleBlur,
    handleSubmit,
  };
};
