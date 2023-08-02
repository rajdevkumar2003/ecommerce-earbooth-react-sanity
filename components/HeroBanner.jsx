import Link from 'next/Link'
import { urlFor } from '@/lib/client'
import React from 'react'

const HeroBanner = ({heroBanner}) => {
  console.log(heroBanner)
  return (
    <div className='hero-banner-container'>
      <div>
        <p className='beats-solo'>{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img src={urlFor(heroBanner.image)} alt='img' className='hero-banner-image'/>
        <div>
            <Link href='./product/ID'>
                <button type='button'>{heroBanner.buttonText}</button>
            </Link>
            <div className='desc'>
                <h5>Description</h5>
                <p>{heroBanner.desc}</p>
                
            </div>
            <h3>{heroBanner.discount}</h3>
            <p>{heroBanner.saleTime}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
