import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import { PiNumberTwoBold } from "react-icons/pi";
import { FaTruckPickup } from "react-icons/fa";
import { FaUndo } from "react-icons/fa";


const Policy = () => {
  return (
   <>
   <div className='border-1 border-[#F0F0F0] py-5'>
    <Container>
        <Flex className={'justify-between'}>

            <div className='flex gap-x-2 items-center'>
                <PiNumberTwoBold />
                <h3 className='font-semibold'>Two years warranty</h3>
            </div>

             <div className='flex gap-x-2 items-center'>
                <FaTruckPickup />
                <h3 className='font-semibold'>Free Shipping</h3>
            </div>

             <div className='flex gap-x-2 items-center'>
                <FaUndo />
                <h3 className='font-semibold'>Return policy in 30 days</h3>
            </div>
            
        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Policy