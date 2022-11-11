import React, { useState,useEffect } from 'react'
import { showItems } from '../../../Api/showItems'

import StoreCart from '../Store/StoreCart'

import '../../Layout/StoreItems/StoreItems.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StoreItems = ({images}) => {

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




  const [state,setState] = useState([])
  const url = ' http://localhost:8000/storeItems'

  useEffect(() =>{
    const connection = async () => {
      const data = await showItems(url)
      setState(data)
      console.log(state,'prueba2')
    }
    connection()
  },[url])

  return (
  <>

    <div className="imgSlider">
      <Slider {... settings}>
      {state.map((xd) => (
    
    <StoreCart
    key={xd.id}
    id={xd.id}
    name={xd.name}
    price={xd.price}
    img={xd.img}
    />
    ))}
      </Slider>
    </div>

  </>
  )
}

export default StoreItems