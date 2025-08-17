import React from 'react'

const Image = ({imgSrc,className}) => {
  return (
    <img clasName={`${className}`} src={imgSrc} alt="imgAlt" />
  )
}

export default Image