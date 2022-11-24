import React, { useState, useEffect } from "react";
import { showItems } from "../../../Api/showItems";

import Products from "../Products/Products";

import "../../../design/productContainer.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
const ProductContainer = () => {
  //carousel buttons
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft />
      </div>
    );
  };


  const settings = {
    className:'center',
    centerMode:true,
    focusOnSelect:true,
    infinite: true,
    centerPadding:'100px',
    slidesToShow: 2,
    speed:500,
    autoplay: true,

    dots: true,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplaySpeed: 3000,



    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    
  };

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
          {state.map((xd) => (
            <Products
              key={xd.id }
              id={xd.id }
              name={xd.name}
              price={xd.price}
              img={xd.img}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

export default ProductContainer;
