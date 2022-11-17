import { useState } from "react";
import FetchUser from "../../../Api/FetchUser";

export const useForm = (initialForm, validateForm) => {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const changeInput = (e) => {
    /*  const formCopy = {...form};
    formCopy[e.target.name] = e.target.value;
    setForm(formCopy); */

    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };
  console.log(form);

  const handleBlur = (e) => {
    changeInput(e);
    setErrors(validateForm(form));
  };

  const submit = (e) => {
    e.preventDefault();
    FetchUser(form);
  };

  return {
    form,
    errors,
    changeInput,
    handleBlur,
    submit,
  };
};
