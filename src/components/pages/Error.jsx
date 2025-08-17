import React from 'react'
import { Link } from 'react-router-dom'
import Image from '../Image'
import errorGif from '/src/assets/error.gif'
import Container from '../Container'

const Error = () => {
  return (
   <>
   <Container>

   <Link to={"/"}>
   <Image imgSrc={errorGif}/>
   </Link>
   
   </Container>
   </>
  )
}

export default Error