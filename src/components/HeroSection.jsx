import React from 'react'
import heroPic from '../images/heroPic.png'

function HeroSection() {
  return (
    <div className='w-3/4 mt-10 gap-3 sm:block m-auto lg:flex max-w-4xl items-center'>
      <h3 className='text-white text-center'>Get access to a world of delicious recipes at your fingertips with our Recipe app!</h3>
      <img className='md:max-w-lg lg:max-w-xl' src={heroPic} alt="" />
    </div>
  )
}

export default HeroSection