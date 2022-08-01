import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <>
      <div className='w-[100%] h-[max-content] bg-[#575563] md:flex justify-between sm:hidden hidden text-[#d6d6d6]'>
        <div className='w-[50%] flex flex-col justify-center items-center p-3 gap-3'>
          <Image src='/etemad.jpg' width='500px' height='250px' />
          <p className='text-sm text-center'>.سایت مورد نظر در سال 1401  تاسیس شده و کلیه حقوق آن   برای زی نفعان محفوظ است</p>
          <span className='text-lg'>©2022</span>
        </div>
        <div className='w-[50%]  flex justify-center items-center p-3'>

          <div className='flex flex-col  gap-16 p-4 items-end '>

            <div className='flex gap-3'>
              <span className='text-xl text-left '>onlineShopSobhan</span>
              <Image src='/insta.svg' width='40' height='40' />
            </div>

            <div className='flex gap-3'>
              <span className='text-sm text-right'>

                تهران_میرداماد میدان مادر
                <br /> کوچه شاکری

              </span>
              <Image src='/location.svg' width='40' height='40' />
            </div>

          </div>

          <div className='flex flex-col  gap-16 p-4  items-end '>


            <div className='flex gap-3'>
              <span className='text-xl text-left'>@onlineShopSobhan</span>
              <Image src='/telegram.svg' width='30' height='30' />
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





      {/* mobile design */}
      <div className='flex flex-col md:hidden bg-[#575563] justify-between items-center'>


        <div className='flex flex-col justify-center items-center p-3 gap-8 text-[#f1efef]'>
          <Image src='/etemad.jpg' width='250px' height='150px' />



          <div className='flex flex-col items-center justify-center gap-5 w-full text-sm'>
            <div className=' flex items-center gap-5 '>
              <div className='flex gap-3 pl-4'>
                <span className=' text-left '>onlineShopSobhan</span>
                <Image src='/insta.svg' width='20' height='20' />
              </div>
              <div className='flex gap-3 pl-2 '>
                <span className=' text-left'>@onlineShopSobhan</span>
                <Image src='/telegram.svg' width='20' height='20' />
              </div>
            </div>


            <div className='flex items-center gap-8 '>
              <div className='flex justify-center items-center gap-3 pr-6'>
                <span className=' text-right text-xs'>

                  تهران_میرداماد
                  <br />میدان مادر
                  کوچه شاکری

                </span>
                <Image src='/location.svg' width='20' height='20' />
              </div>
              <div className='flex justify-center items-center gap-3'>
                <div>
                  <span className=' text-left'>021-33522758</span>
                  <br />
                  <span className=' text-left'>021-33512646</span>
                </div>
                <Image src='/tellPhone.svg' width='20' height='20' />
              </div>
            </div>
          </div>

          <p className='text-xs text-center w-[80%] '>.سایت مورد نظر در سال 1401  تاسیس شده و کلیه حقوق آن   برای زی نفعان محفوظ است</p>
          <span className='text-sm text center '>©2022</span>
        </div>




      </div>





    </>
  )
}

export default Footer