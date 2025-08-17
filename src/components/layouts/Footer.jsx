import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { Link } from 'react-router-dom'
import Image from '../Image'
import Oribi from '/src/assets/Oribi.png'
import { FaFacebookF,FaLinkedinIn,FaInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <div className='bg-[#f5f5f3] py-[55px]'>
      <Container>
        <Flex className={'justify-between items-start'}>

          <div className=''>
            <h3 className='text-[18px] font-bold'>Menu</h3>
            <ul className='pt-5 flex flex-col gap-3 font-medium'>
              <Link to={'/'}><li>Home</li></Link>
              <Link to={'/shop'}><li>Shop</li></Link>
              <Link to={'/about'}><li>About</li></Link>
              <Link to={'/contacts'}><li>Contacts</li></Link>
              <Link to={'/journal'}><li>Journal</li></Link>
            </ul>
          </div>

           <div className=''>
            <h3 className='text-[18px] font-bold'>Shop</h3>
            <ul className='pt-5 flex flex-col gap-3 font-medium'>
              <Link ><li>Category-1</li></Link>
              <Link ><li>Category-2</li></Link>
              <Link ><li>Category-3</li></Link>
              <Link ><li>Category-4</li></Link>
              <Link ><li>Category-5</li></Link>
            </ul>
          </div>

           <div className=''>
            <h3 className='text-[18px] font-bold'>Help</h3>
            <ul className='pt-5 flex flex-col gap-3 font-medium'>
              <Link ><li>Privacy Policy</li></Link>
              <Link ><li>Terms & Conditions</li></Link>
              <Link ><li>Special E-shop</li></Link>
              <Link ><li>Shipping</li></Link>
              <Link ><li>Secure Payments</li></Link>
            </ul>
          </div>

          <div className='flex flex-col gap-4'>
            <h3 className='text-2xl text-black font-bold'>(052) 611-5711</h3>
            <h4 className='text-2xl text-black font-bold'>company@domain.com</h4>
            <p className='text-1xl text-black font-bold'>575 Crescent Ave. Quakertown, PA 18951</p>
          </div>

          <div className=''>
          <Link to="/"><Image imgSrc={Oribi} / ></Link>
          </div>

        </Flex>

        <Flex className={'justify-between pt-10'}>

          <div className='flex items-center gap-5'>
            <Link><FaFacebookF /></Link>
            <Link><FaLinkedinIn /></Link>
            <Link> <FaInstagram /></Link>
          </div>

          <div className='text-[#6D6D6D]'><p>2020 Orebi Minimal eCommerce Figma Template by Adveits</p></div>

        </Flex>
        
      </Container>
    </div>
    </>
  )
}

export default Footer