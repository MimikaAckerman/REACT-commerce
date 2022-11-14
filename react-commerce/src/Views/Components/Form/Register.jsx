import React from "react";

import { useForm } from "react-hook-form";

const Register = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);

  

  //show content in json users
  /*  async function obtenUser() {
    let respuesta = await fetch("http://localhost:8000/Users");
    let datos = await respuesta.json();
    console.table(datos);
  }
   obtenUser(); */

  return (
    <>
    <br></br>
    <br></br>
      <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text"{...register("name")} placeholder="enter your name"/>
      <input type="email" {...register("email")} placeholder="enter your email"/>
      <input type="tel" {...register("phone")} placeholder="enter your phone"/>
      <input type="password" {...register("password")} placeholder="enter your password"/>
      <input type="submit" />
    </form>
    </>
  );
};

export default Register;
