import React from 'react'
import Container from '../Container'
import Flex from '../Flex'
import Image from '../Image'
import Ad from '/src/assets/Ad.png'
import Add from '/src/assets/Add.png'
import Addd from '/src/assets/Addd.png'
import { Link } from 'react-router-dom'

const Advertise = () => {
  return (
   <>
   <div className='pt-[100px] py-[80px]'>
    <Container>
        <Flex className={'justify-between items-center'}>

            <div className='w-[48%]'>
                <Link> <Image imgSrc={Ad}/> </Link>
            </div>

            <div className='w-[48%]'>

                <div className='pb-10'>
                   <Link> <Image imgSrc={Add}/> </Link>
                </div>
                 <div className=''>
                    <Link> <Image imgSrc={Addd}/> </Link>
                </div>

            </div>

        </Flex>
    </Container>
   </div>
   </>
  )
}

export default Advertise