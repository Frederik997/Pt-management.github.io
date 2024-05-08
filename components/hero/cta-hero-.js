import Link from 'next/link'
import React from 'react'
import CtaBtn from './cta-hero-btn'
function CtaHeroBtn() {
  return (
    <div className=' text-center'>
    <Link href="/"className='inline-block m-auto mt-7' >
        <CtaBtn/>
    </Link>
    </div>
  )
}

export default CtaHeroBtn