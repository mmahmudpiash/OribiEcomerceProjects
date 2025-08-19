import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Product from '../pages/Product'
import ImgOne from '/src/assets/ImgOne.png'
import ImgTwo from '/src/assets/ImgTwo.png'
import ImgThree from '/src/assets/ImgThree.png'
import ImgFour from '/src/assets/ImgFour.png'

//==========================================

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import NextArrow from '../NextArrow'
import PrevArrow from '../PrevArrow'


//==========================================


const NewArrivals = () => {

var settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow/>,

  };

  return (
   <>
   <Container>
     <h3 className='text-3xl font-bold py-5'>New Arrivals</h3>
     <Slider {...settings}>
      <div>
         <Product ProductImg={ImgOne} bText={"New"} />
      </div>
      <div>
        <Product ProductImg={ImgTwo} bText={'25%'} />
      </div>
      <div>
        <Product ProductImg={ImgThree} bText={"New"} />
      </div>
      <div>
        <Product ProductImg={ImgFour} bText={"10%"} />
      </div>
      <div>
      <Product ProductImg={ImgTwo} bText={'25%'} />
      </div>
      <div>
        <Product ProductImg={ImgFour} bText={"10%"} />
      </div>
    </Slider>
   </Container>
   </>
  )
}

export default NewArrivals