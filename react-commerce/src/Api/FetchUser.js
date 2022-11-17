import { v4 } from "uuid";
import React from "react";

  const FetchUser = (form) => {

    const url = 'http://localhost:8000/Users';
    form.id = v4();
      fetch(url,{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    console.log(JSON.stringify(fetch))


  };

 

export default FetchUser




