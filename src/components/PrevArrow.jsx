import React from 'react'
import { FaArrowAltCircleLeft } from "react-icons/fa";
const PrevArrow = (props) => {
     const { onClick } = props;
   
  return (
  <div  className={"text-5xl text-[#979797] absolute left-5 top-1/2 -translate-y-1/2 z-10"}
        onClick={onClick}
        ><FaArrowAltCircleLeft /></div>

  )
}

export default PrevArrow