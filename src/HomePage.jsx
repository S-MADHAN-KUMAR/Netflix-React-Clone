import React from 'react'
import Hero from './Components/Hero'
import Trending from './Components/Trending'
import MoreReasons from './Components/MoreReasons'
import FAQ from './Components/FAQ'
import Footer from './Components/Footer'

const HomePage = () => {
  return (
    <div className='bg-black text-white w-full h-full flex flex-col '>
    < Hero />
    <Trending/>
    <MoreReasons/>
    <FAQ/>
    <Footer/>
    </div>
  )
}

export default HomePage
