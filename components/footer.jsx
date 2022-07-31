import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='w-[100%] h-[max-content] bg-[#575563] md:flex justify-between sm:hidden hidden '>
      <div className='w-[50%] flex flex-col justify-center items-center p-3 gap-3'>
        <Image src='/etemad.jpg' width='500px' height='250px' />
        <p className='text-lg text-center'>.سایت مورد نظر در سال 1401  تاسیس شده و کلیه حقوق آن   برای زی نفعان محفوظ است</p>
        <span className='text-lg'>©2022</span>
      </div>
      <div className='w-[50%]  flex justify-center items-center p-3'>

        <div className='flex flex-col  gap-16 p-4 items-end '>

          <div className='flex gap-3'>
            <span className='text-xl text-left '>onlineShopSobhan</span>
            <Image src='/insta.svg' width='40' height='40' />
          </div>

          <div className='flex gap-3'>
            <span className='text-lg text-right'>
              
               تهران_میرداماد میدان مادر
               <br/> کوچه شاکری
           
            </span>
            <Image src='/location.svg' width='40' height='40' />
          </div>

        </div>

        <div className='flex flex-col  gap-16 p-4  items-end '>


          <div className='flex gap-3'>
            <span className='text-xl text-left'>@onlineShopSobhan</span>
            <Image src='/telegram.svg' width='40' height='40' />
          </div>

          <div className='flex gap-3'>
            <div>
              <span className='text-xl text-left'>021-33522758</span>
              <br />
              <span className='text-xl text-left'>021-33512646</span>
            </div>
            <Image src='/tellPhone.svg' width='40' height='40' />
          </div>
        </div>


      </div>

    </div>

    //mobile design





    
  )
}

export default Footer