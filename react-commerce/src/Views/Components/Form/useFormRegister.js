import { useState } from "react";
import fetchCreateUsers from "../../../Api/fetchCreateUsers";

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

  const handleSubmit = (e) => {
    e.preventDefault();


    
    fetchCreateUsers(form);
  };

  return {
    form,
    errors,
    handleInput,
    handleBlur,
    handleSubmit,
  };
};
