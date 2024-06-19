import Image from 'next/image'
import React from 'react'

function HomePageHeroSection() {
  return (
    <section
    className='w-full h-screen relative'
    >
      <Image
      src={`/ski.jpg`}
      alt='Home'
      fill
      className='object-cover'
      />
    </section>
  )
}

export default HomePageHeroSection
