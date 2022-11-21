import { v4 } from "uuid";

export const fetchCreateUsers = async (form) => {
 
  try {
    form.id = v4();
    const response = await fetch("http://localhost:8000/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log(JSON.stringify(response));
  } catch (error) {
    console.log("something wrong in register");
  }
}

export default fetchCreateUsers;
