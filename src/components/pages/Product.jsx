import React from 'react'
import Image from '../Image'
import Badge from '../Badge'
import Flex from '../Flex'
import { FaHeart } from "react-icons/fa";
import { HiRefresh } from "react-icons/hi";
import { BsFillBagHeartFill } from "react-icons/bs";

const Product = ({ProductImg,bText}) => {
  return (
    <>
    <div className='relative group px-3'>

        <Image imgSrc={ProductImg} className={"w-full"}/>
        <Badge className={'absolute top-5 left-5'} badgeText={bText}/>

        <div className='bg-white p-5 opacity-0 group-hover:opacity-100 absolute left-0 bottom-8 duration-700 w-full'>

            <div className='flex items-center justify-end gap-x-3.5'>
                <h3 className='font-medium'>Add to Wish List</h3>
                <FaHeart />
            </div>
            <div className='flex items-center justify-end gap-x-3.5'>
                <h3 className='font-medium'>Compare</h3>
                <HiRefresh />
            </div>
            <div className='flex items-center justify-end gap-x-3.5'>
                <h3 className='font-medium'>Add to Cart</h3>
                <BsFillBagHeartFill />
            </div>

        </div>

        <Flex className={"justify-between pt-2.5 font-bold"}>
            <h3>Basic Crew Neck Tee</h3>
            <h3>$44.00</h3>
        </Flex>

    </div>
    </>
  )
}

export default Product