import React from 'react'
import { FaArrowAltCircleRight } from "react-icons/fa";
const NextArrow = (props) => {
    const { onClick } = props;
  return (
      <div  className={"text-5xl text-[#979797] absolute right-5 top-1/2 -translate-y-1/2"}
      onClick={onClick}
      ><FaArrowAltCircleRight /></div>
  )
}

export default NextArrow