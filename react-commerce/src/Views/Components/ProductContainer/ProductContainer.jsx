import React, { useState, useEffect } from "react";

import { showItems } from "../../../Api/showItems";
import Products from "../Products/Products";

import Search from "../Search/Search";



const ProductContainer = () => {



  const [state, setState] = useState([]);
  const url = " http://localhost:8000/storeItems";

  useEffect(() => {
    const connection = async () => {
      const data = await showItems(url);
      setState(data);
      /*    console.log(state, "prueba2"); */
    };
    connection();
  }, [url]);

  return (
    <>
   


      <div className="container">
     

        {state.map((xd) => (
          <Products
            key={xd.id}
            id={xd.id}
            name={xd.name}
            price={xd.price}
            img={xd.img}
          />
        ))}
      </div>
    </>
  );
};

export default ProductContainer;
