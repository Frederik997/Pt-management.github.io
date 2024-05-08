'use client'
import { FaArrowRight } from 'react-icons/fa'
import {  motion } from 'framer-motion'

function CtaBtn() {
  return (
    <motion.button className='text-slate-50 font-bold uppercase flex items-center bg-orange-500 rounded-full  py-3 px-4 text'
    whileHover={{
        scale:1.1,
        background:"orangered"
    }}
    transition={{
        type:"spring",
        stiffness:100,
        duration:2
    }}
    >Join Us <span ><FaArrowRight className='ml-2'/></span></motion.button>
  )
}

export default CtaBtn