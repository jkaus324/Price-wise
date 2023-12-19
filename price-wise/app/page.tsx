import HeroCarousel from '@/components/HeroCarousel'
import SearchBar from '@/components/SearchBar'
import Image from 'next/image'
import React from 'react'

const Home = () => {
  return (
    <>
      <section className='px-6 md:px-20 py-24 border-2 '>
        <div className='flex max-xl:flex-col gap-16'>
          <div className='flex flex-col justify-center'>
            <p className='small-text'>
              Smart shopping starts here:
              <Image src="/assets/icons/arrow-right.svg" alt='arrow-right' width={16} height={16}/>
            </p>
            <h1 className='head-text'>
              Unleash the Power of 
              <span className='text-primary'>Price-Wise</span>
            </h1>

            <p className="mt-6">
              Powerful, self-serve product and growth analytics to help you convert, engage, and retain more.
            </p>

            <SearchBar />
          </div>
          <HeroCarousel />
        </div>
      </section>

      <section className='trending-section'>
        <h2 className='section-text'>Trending</h2>
        Apple iphone and book
      </section>
    </>
  )
}

export default Home