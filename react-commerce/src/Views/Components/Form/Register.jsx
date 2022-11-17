import React from "react";
import { useForm } from "./useForm";
import '../../../UI/RegisterStyle.css';


const initialForm = {
  id: "",
  username: "",
  lastname: "",
  email: "",
  password: "",
  confirmPassword: "",
};

let errors = {};
const validationsForm = (form) => {
 
//regular expressions
let regexUsername = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexLastname = /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/;
let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
let regexPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{5,8}$/;

//for name
if(!form.username.trim()) {
  errors.username = "required field";
} else if (!regexUsername.test(form.username.trim())) {
  errors.username = "the field accepts only letters and blanks";
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
if (!form.confirmPassword.trim()) { //campos vacios
  errors.confirmPassword = 'your confirm password is empty'
}
  if(form.confirmPassword.trim() === form.password.trim()){
    errors.confirmPassword = 'passwords match'
  }else{
    errors.confirmPassword ='passwords are different'
  }



  return errors;
}





const Register = () => {
  const { form, changeInput, handleBlur, submit } = useForm(
    initialForm,
    validationsForm
  );




  return (
    <>
      <form onSubmit={submit}>
        <input
          type="text"
          className="form-inputs"
          name="username"
          placeholder="enter your username"
          onChange={changeInput}
          onBlur={handleBlur}
          value={form.username}
          required
        />
         {errors.username && <p>{errors.username}</p>}

        <input
          type="text"
          className="form-inputs"
          name="lastname"
          placeholder="enter your lastname"
          onChange={changeInput}
          onBlur={handleBlur}
          value={form.lastname}
          required
        />
         {errors.lastname && <p>{errors.lastname}</p>}

        <input
          type="email"
          className="form-inputs"
          name="email"
          placeholder="enter your email"
          onChange={changeInput}
          onBlur={handleBlur}
          value={form.email}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          className="form-inputs"
          name="password"
          placeholder="enter your password"
          onChange={changeInput}
          onBlur={handleBlur}
          value={form.password}
          required
        />
       {errors.password && <p>{errors.password}</p>}
        
        <input
          type="password"
          className="form-inputs"
          name="confirmPassword"
          placeholder="enter confirm password"
          onChange={changeInput}
          onBlur={handleBlur}
          value={form.confirmPassword}
          required
        />
         {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <input type="submit" value="send information" />
      </form>
    </>
  );
};

export default Register;
