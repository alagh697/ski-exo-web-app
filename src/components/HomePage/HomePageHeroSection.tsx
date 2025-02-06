import Image from 'next/image'
import React from 'react'

function HomePageHeroSection() {
  return (
    <section
    className='w-full h-screen relative overflow-hidden'
    >
      <Image
      src={`/ski.jpg`}
      alt='Home'
      fill
      className='object-cover'
      />
      <div
      className='absolute top-0 left-0 w-full h-full bg-black/10 '
      >
        <h1
        className='text-5xl font-bold -rotate-2 upercase text-blue-200'
        >
        {`SKi eemi 2025 ci-cd.haaa kjbnjlnljnbb`}
        </h1>
        
      </div>
    </section>
  )
}

export default HomePageHeroSection
