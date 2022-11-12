import React, { useState, useEffect } from "react";
import { showItems } from "../../../Api/showItems";

import Products from "../Products/Products";

import "../../Layout/ProductCart/ProductCart.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProductCart = () => {


  //carousel
  const settings = {
    infinite: true,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  //connection
  const [state, setState] = useState([]);
  const url = " http://localhost:8000/storeItems";

  useEffect(() => {
    const connection = async () => {
      const data = await showItems(url);
      setState(data);
      console.log(state, "prueba2");
    };
    connection();
  }, [url]);

  return (
    <>
    
      <div className="imgSlider">
        <Slider {...settings}>
          {state.map((xd,id) => (
            <Products
              key={id}
              {...xd}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductCart;
