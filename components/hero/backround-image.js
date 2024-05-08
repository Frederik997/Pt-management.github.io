import React from 'react'
import heroImage from "@/public/assets/dumbells-hero-section.jpg"
import Image from 'next/image'

function BgImage() {
  return (
    <div className="absolute top-0 left-0  overflow-hidden z-0 w-full h-screen ">
      <Image src={heroImage} priority fill alt="dumbells training" className="filter brightness-[.3] h-full w-full object-cover "/>
    </div>
  )
}

export default BgImage