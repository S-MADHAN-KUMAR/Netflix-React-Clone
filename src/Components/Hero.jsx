import React, { useState } from 'react'
import {Link} from 'react-router-dom'
const Hero = () => {
  return (
    <div className='Hero px-3 py-8 sm:px-28  text-center'>
         <nav className='flex  justify-between items-center'>
         <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/220px-Netflix_2015_logo.svg.png" alt="Neltflix" className='w-24 sm:w-2/12'/>
                  <div  className='gap-x-2 flex'>
                    <select className='border rounded-sm text-sm px-2 py-0 bg-transparent' >
                        <option value="English ">English</option>
                        <option value="Hindi ">हिन्दी</option>
                      </select>

                      <Link to={'/login'} ><button  className='bg-red-600 text-sm  px-5 py-2 rounded-sm'>Sign In</button>
                      </Link>
                    
                  </div>
         </nav>

         <header className='mt-28'>
         <h1 className='mb-6 font-bold text-4xl leading-tight sm:text-6xl sm:w-2/4 m-auto  '>Unlimited movies, TV shows, and more</h1>
            <p className='mb-8 sm:text-xl '>Watch anywhere. Cancel anytime.</p>
            <p className='sm:text-xl '  >Ready to watch? Enter your email to create or restart your membership.</p>
         </header>

         <form action="" className='flex items-center justify-center sm:flex-row flex-col mt-12 mb-14  gap-x-6 gap-y-4'>
          <input type="text" placeholder='Email address' className='w-11/12 sm:w-2/5 my-3 text-white backdrop-blur-sm border p-3 px-6 rounded-sm bg-transparent focus:outline-none '/>
          <button type="submit" className='bg-red-600 text-lg w-fit sm:py-3 sm:px-20 sm:font-semibold px-8 py-2 rounded-sm'>Get Started </button>

         </form>

    </div>
  )
}

export default Hero
