import React from "react";

/* import { useForm } from "./useFormRegister"; */
import { useFormRegister } from "./useFormRegister";


import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

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

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="btn-register">
        <Button variant="info" onClick={handleShow}>
          Register
        </Button>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <div className="container">
            <div className="contact-box">
              <div className="left"></div>
              <div className="right">
                <h2>Register User</h2>
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
                  <div className="form-errors">
                    {errors.username && <p>{errors.username}</p>}
                  </div>

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
                  <div className="form-errors">
                    {errors.lastname && <p>{errors.lastname}</p>}
                  </div>

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

                  <div className="form-errors">
                    {errors.email && <p>{errors.email}</p>}
                  </div>

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
                  <div className="form-errors">
                    {errors.password && <p>{errors.password}</p>}
                  </div>

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

                  <div className="form-errors">
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}
                  </div>

                  <input
                    type="submit"
                    value="Register user"
                    className="btn-submit"
                  />
                </form>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="info" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* </div>
      </div>
     </div>
 */}
    </>
  );
};

export default Register;
