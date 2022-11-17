import { useState } from "react";
import FetchUser from "../../../Api/FetchUser";

export const useForm = (initialForm,validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const changeInput = (e) => {
    const formCopy = {...form};
    formCopy[e.target.name] = e.target.value;
    setForm(formCopy);
    /* const {name,value} = e.target
    setState({
      ...state,
      [name]:value
    }); */
    /* setForm({
        ...form,
        [e.target.name]:e.target.value
    }) */
    
  };
  console.log(form)
  
  const handleBlur = (e) => {
    changeInput(e);
    setErrors(validateForm(form))
  };


  const submit = (e) => {
    e.preventDefault();
    FetchUser(form)
    alert('register complete');
  };

  return {
    form,
    errors,
    changeInput,
    handleBlur,
    submit,
  };
};
