import React from 'react'
import { IoMdClose } from "react-icons/io";
import { IoPhonePortraitOutline } from "react-icons/io5";

const LoginPopup = () => {
  return (
    <div className='fixed w-full h-full top-0 left-0 flex justify-center items-center bg-black/70'>
        <div className='bg-white w-11/12 sm:w-96 h-fit flex flex-col items-center relative rounded-md px-16 text-center py-6'>
      <img className='w-28 mb-10' src="https://statics.olx.in/external/base/img/loginEntryPointChat.webp" alt="" />
      <h1 className='font-semibold text-gray-700 mb-12'>Help us become one of the safest places to buy and sell</h1>
      <div className='flex items-center border border-black/60 rounded-md  w-full p-2 mb-4'>
<IoPhonePortraitOutline className='w-6 h-6 mr-4'/>
        <p className='text-sm font-semibold text-gray-600'>Continue with phone</p>
      </div>
      <div className='flex items-center border border-black/60 rounded-md justify-between w-full p-2'>
        <img className='w-6 h-6' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/150px-Google_%22G%22_logo.svg.png" alt="" />
        <p className='text-sm font-semibold text-gray-600'>Continue with Google</p>
      </div>
      <p className='text-sm my-2 font-semibold text-gray-800'>OR</p>
      <a href="" className='text-sm  underline underline-offset-2 font-semibold text-gray-800 mb-20'>Login with Email</a>


      <small className='text-xs text-gray-500 mb-4'>All your personal details are safe with us.</small>
      <small className='text-xs   text-gray-500'>If you continue, you are accepting <span className='text-xs text-sky-500'> OLX Terms and Conditions and Privacy Policy</span></small>

<IoMdClose className='cursor-pointer absolute top-4 right-4 w-6 h-6' onClick={()=>setIsLogin(preState=>!preState)}/>

    </div>
    </div>
  )
}

export default LoginPopup

