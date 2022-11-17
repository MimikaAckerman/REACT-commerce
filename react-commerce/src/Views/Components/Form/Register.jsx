import React from "react";
import "./../../../UI/RegisterStyle.css";
import { useForm } from "./useFormRegister";

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
  if(!form.name.trim()) {
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
    errors.confirmPassword ='please enter a confirm password';
  }

  return errors;
};

const Register = () => {
  const { form, errors, handleInput, handleBlur, handleSubmit } = useForm(
    initialForm,
    validationsForm
  );

  return (
    <>
      <br />
      <h2>Register users</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-inputs"
          placeholder="enter your name"
          name="name"
          onChange={handleInput}
          onBlur={handleBlur}
          value={form.name}
          required
        />
        {errors.name && <p>{errors.name}</p>}

        <input
          type="text"
          className="form-inputs"
          placeholder="enter your lastname"
          name="lastname"
          onChange={handleInput}
          onBlur={handleBlur}
          value={form.lastname}
          required
        />
        {errors.lastname && <p>{errors.lastname}</p>}

        <input
          type="email"
          className="form-inputs"
          placeholder="enter your email"
          name="email"
          onChange={handleInput}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}

        <input
          type="password"
          className="form-inputs"
          placeholder="enter your password"
          name="password"
          onChange={handleInput}
          onBlur={handleBlur}
          value={form.password}
          required
        />
        {errors.password && <p>{errors.password}</p>}

        <input
          type="password"
          className="form-inputs"
          placeholder="confirm your password"
          name="confirmPassword"
          onChange={handleInput}
          onBlur={handleBlur}
          value={form.confirmPassword}
          required
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <input type="submit" className="form-inputs" />
      </form>
    </>
  );
};

export default Register;
