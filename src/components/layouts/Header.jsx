import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Oribi from '/src/assets/Oribi.png'
import { FaBarsProgress } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaUserLarge } from "react-icons/fa6";
import { FaCaretDown } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";

const Header = () => {
  return (
  <>

   <div className='py-[30px]'>
    <Container>
      <Flex>

        <div className="w-[40%] cursor-pointer">
          <Link to={"/"}><Image imgSrc={Oribi} /></Link>
        </div>
        <div classname=''>
          <ul className='flex gap-x-5 text-menuColor text-menuBar'>
            <Link to={'/'}><li className='hover:text-black hover:font-bold duration-500'>Home</li></Link>
            <Link to={'/shop'}><li className='hover:text-black hover:font-bold duration-500'>Shop</li></Link>
            <Link to={'/about'}><li className='hover:text-black hover:font-bold duration-500'>About</li></Link>
            <Link to={'/contacts'}><li className='hover:text-black hover:font-bold duration-500'>Contacts</li></Link>
            <Link to={'/journal'}><li className='hover:text-black hover:font-bold duration-500'>Journal</li></Link>
          </ul>
        </div>

      </Flex>
    </Container>
   </div>

   <div className='bg-[#f5f5f3] py-[25px]'>
    <Container>
      <Flex className={'justify-between'}>

        <div className='flex items-center gap-x-5'>
          <FaBarsProgress />
          <h3 className='font-semibold'>Shop by Category</h3>
        </div>
  
      <div className='relative'>
      <input type="text"placeholder='Search Your Products' className='py-4 px-5 w-[500px]
       bg-white outline-0 rounded-2xl font-bold placeholder:text-[#c4c4c4]' />
      <FaSearch className='absolute right-3 top-1/2 -translate-y-1/2' />
      </div>

      <div className='flex gap-x-5 items-center'>
        <div className='flex gap-x-2'>
        <FaUserLarge />
        <FaCaretDown />
        </div>
        <MdOutlineShoppingBag className='text-2xl'/>
      </div>

      </Flex>
    </Container>
   </div>

  </>
  )
}

export default Header