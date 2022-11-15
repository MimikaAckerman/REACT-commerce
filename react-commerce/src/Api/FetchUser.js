import { v4 } from "uuid";


  const FetchUser = (state) => {
    state.id = v4();
    fetch("http://localhost:8000/Users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(state),
    });
  };

export default FetchUser




