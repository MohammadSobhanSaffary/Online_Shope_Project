import React from 'react'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

function SignIn() {
  return (


    <div className=' w-full  h-full  '>

      <div className=' flex  items-center justify-center h-screen  bg-slate-100 '>
        <div className='  2xl:w-[24%] xl:w-[30%] lg:w-[40%] md:w-[50%]  md:h-[65%]  h-[70%] w-[90%]    flex flex-col gap-20   p-4 bg-white gap-'>
          <div className=' flex '>
            <div className='flex flex-col justify-center items-center gap-2 ml-4 w-full'>
              <CgProfile className=' w-20 h-20  mt-2 text-[#00B5CC]' />
              {/* <i className={(state.validation) ? 'hidden' : 'text-red-500 text-center text-lg'}>اطلاعات ورودی شما صحیح نمی باشد</i>
                                */}
            </div>
            <Link href='/'>
              <AiOutlineClose className='w-7 h-7 cursor-pointer' fill='#00B5CC' />
            </Link>
          </div>



          <form className='  flex flex-col  items-center gap-10' >
            <div className='w-[90%] md:w-[60%] flex justify-between'>
              <input className='border-[2px]  border-[#00b5cc] w-[45%]   rounded-lg  text-right p-3 text-base outline-none focous:bg-[#fff] ' placeholder='نام خانوادگی ' />
              <input className='border-[2px]  border-[#00b5cc] w-[45%]    rounded-lg  text-right p-3 text-base outline-none focous:bg-[#fff] ' placeholder='نام ' />
            </div>
            <input className='border-[2px] border-[#00b5cc] w-[90%] md:w-[60%] rounded-lg text-right p-3 text-base outline-none focous:bg-white' placeholder=' ایمیل' />
            <input className='border-[2px] border-[#00b5cc] w-[90%] md:w-[60%] rounded-lg text-right p-3 text-base outline-none focous:bg-white' placeholder='رمز ورود' type='password' />
            <button className='bg-[#00b5cc] text-white border-[2px] border-[#00b5cc] w-[90%] md:w-[60%] py-3 self-center rounded-lg  ' >ساخت اکانت  </button>
            <Link href='/authentication/Login'><i className='w-[90%] md:w-[60%]  text-blue-600 text-sm  cursor-pointer text-right p-3'>آیا قبلا اکانت ساخته اید ؟ </i></Link>
          </form>
        </div>
      </div>


    </div >



  )
}













export default SignIn