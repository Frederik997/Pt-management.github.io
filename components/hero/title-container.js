'use client'
import React from 'react'
import {motion, useTransform, useScroll} from "framer-motion"
function HeroTitleContainer({children}) {
  const {scrollY} = useScroll()
  const scale = useTransform(scrollY, [0, 300], [1,1.5])
  const opacity = useTransform(scrollY, [0,500], [1,0])
  return (
    <motion.div className='relative max-w-[70%] m-auto' style={{scale, opacity}}>{children}</motion.div>
  )
}

export default HeroTitleContainer