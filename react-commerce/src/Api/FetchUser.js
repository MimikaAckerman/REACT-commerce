import { v4 } from "uuid";


  const FetchUser = (form) => {
    form.id = v4();
    fetch("http://localhost:8000/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log(JSON.stringify(fetch))
  };

export default FetchUser




