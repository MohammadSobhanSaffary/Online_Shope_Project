import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Pannel() {
  const isValied = useSelector(state => state.isLoginValied.value);
  console.log(isValied)
  if (isValied) return (

    <div>
      سلام
      <table></table>
    </div>
  )



  else {

    return (
      <div className='w-screen h-screen flex justify-center items-center'>
        <Link href='/admin/Login' >
          <span className='cursor-pointer w-[20%] h-14 flex justify-center items-center text-center p-10 border-[2px] border-[#00B5CC] text-blue-500'>برای ورود به صفحه ادمین کلیک کنید</span>
        </Link>
      </div >
    )
  }

}

export default Pannel