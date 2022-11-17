import React from "react";
import { useForm } from "./useForm";

const initialForm = {
  id: "",
  name: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const validationsForm = (form) => {
  let errors = {};

  //regular expressions
  let regexName = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexLastname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
  let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,8}$/;

  //for name
  if (!form.name.trim()) {
    errors.name = "required field";
  } else if (!regexName.test(form.name.trim())) {
    errors.name = "the field accepts only letters and blanks";
  }

  //for lastname
  if (!form.lastname.trim()) {
    errors.lastname = "required field";
  } else if (!regexLastname.test(form.lastname.trim())) {
    errors.name = "the field accepts only letters and blanks";
  }

  //for email
  if (!form.email.trim()) {
    errors.email = "required field";
  } else if (!regexEmail.test(form.email.trim())) {
    errors.name = "the field accepts only letters and blanks";
  }

  //for password
  if (!form.password.trim()) {
    errors.password = "please enter a password";
  } else if (!regexPassword.test(form.password.trim())) {
  }

  //for confirmPassword
  if (!form.confirmPassword.trim()) {
    errors.confirmPassword = "please enter a confirm password";
  }

  return errors;
};

const Register = () => {
  const { form, errors, changeInput, handleBlur, submit } = useForm(
    initialForm,
    validationsForm
  );

  return (
    <>
      <form onChange={submit}>
        <input
          type="text"
          name="username"
          placeholder="enter your username"
          onChange={changeInput}
          value={form.name}
          required
        />

        <input
          type="text"
          name="lastname"
          placeholder="enter your lastname"
          onChange={changeInput}
          value={form.lastname}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="enter your email"
          onChange={changeInput}
          value={form.email}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="enter your password"
          onChange={changeInput}
          value={form.password}
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="enter confirm password"
          onChange={changeInput}
          value={form.confirmPassword}
          required
        />

        <input type="submit" value="send information" />
      </form>
    </>
  );
};

export default Register;
