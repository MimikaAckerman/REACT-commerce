import React from "react";
import "../../../design/RegisterStyle.css";
/* import { useForm } from "./useFormRegister"; */
import { useFormRegister } from "./useFormRegister";
import './../../../design/RegisterStyle.css'

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
  if (!form.username.trim()) {
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
  if (!form.confirmPassword.trim()) {
    //campos vacios
    errors.confirmPassword = "your confirm password is empty";
  }
  if (form.confirmPassword.trim() === form.password.trim()) {
    errors.confirmPassword = "passwords match";
  } else {
    errors.confirmPassword = "passwords are different";
  }

  return errors;
};

const Register = () => {
  const { form, handleInput, handleBlur, handleSubmit } = useFormRegister(
    initialForm,
    validationsForm
  );

 



  return (
    <>



    {/*   <br />
     <div className="container">
      <div className="contact-box">
<div className="left"></div>
<div className="right">
<h2>Register</h2>  */} 

<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
  REGISTER
</button>

<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="staticBackdropLabel">Register user</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="form-inputs"
          name="username"
          placeholder="enter your username"
          onChange={handleInput}
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
          onChange={handleInput}
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
          onChange={handleInput}
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
          onChange={handleInput}
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
          onChange={handleInput}
          onBlur={handleBlur}
          value={form.confirmPassword}
          required
        />
        {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

        <input type="submit" value="send information" className="btn-submit" />
      </form>

      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        
      </div>
    </div>
  </div>
</div>














{/* </div>
      </div>
     </div>
 */}
      
    </>
  );
};

export default Register;
