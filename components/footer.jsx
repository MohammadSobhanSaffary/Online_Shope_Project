import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='w-[100vw] h-[10%] bg-[#575563]'>
      <div className='w-[50%] flex flex-col '>
        <Image src='/etemad.jpg' width='500px' height='250px' />
        <p className='text-lg'>سایت مورد نظر در سال 1401  تاسیس شده و کلیه حقوق آن   برای زی نفعان محفوظ است.</p>
        <span className='text-lg'>2022©</span>
      </div>
      <div className='w-[50%]'>

      </div>
    </div>
  )
}

export default Footer