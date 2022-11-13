import React, { useState, useEffect } from "react";
import { showItems } from "../../../Api/showItems";

import Products from "../Products/Products";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './../../Layout/productContainer/productContainer.css'

const ProductContainer = () => {
  const [sliderRef, setSliderRef] = useState(null)

  //carousel
  var settings = {
      dots: true,
      // infinite: false,
      infinite: true,
      speed: 500,
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 580,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
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
     <Slider {...settings}>
 
          {state.map((product,id) => (
            <Products
              key={id}
              {...product}
            />
          ))}
     
      </Slider>
    </>
  );
};

export default ProductContainer;

