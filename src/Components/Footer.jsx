import React from 'react'

const Footer = () => {
  return (
    <div className='p-4 sm:px-28  text-gray-300'>
      <h2 className='text-sm'>Question ? <a href="" className='underline' >call 000-000-000-000</a></h2>

<div className="flex sm:flex-row flex-col justify-around sm:p-8">
    <div className="flex flex-col text-sm underline underline-offset-2 leading-8">
        <a href="#">FAQ</a>
        <a href="#">Investor Realtion</a>
        <a href="#">Privacy</a>
        <a href="#">Speed Test</a>
    </div>
    <div className="flex flex-col text-sm underline underline-offset-2 leading-8">
        <a href="#">Help center</a>
        <a href="#">Jobs</a>
        <a href="#">Cookie Preferences</a>
        <a href="#">Legal Notices</a>
    </div>
    <div className="flex flex-col text-sm underline underline-offset-2 leading-8">
        <a href="#">Account</a>
        <a href="#">Ways to Watch</a>
        <a href="#">Corporate Information</a>
        <a href="#">Only on Netflix</a>
    </div>
    <div className="flex flex-col text-sm underline underline-offset-2 leading-8">
        <a href="#">Media Centre</a>
        <a href="#">Terms of Use</a>
        <a href="#">Contact Us</a>
    </div>
</div>
<div >
    <select className="bg-transparent border px-6 text-base py-2 my-8 rounded-sm">
        <option value="English ">English</option>
        <option value="Hindi ">हिन्दी</option>
      </select>
  </div>
<p className="text-sm text-gray-500">Netflix India</p>
    </div>
  )
}

export default Footer
