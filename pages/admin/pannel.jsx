import Link from 'next/link';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

function Pannel() {
  const isValied = useSelector(state => state.loginValidiation.value);
  
   if(isValied) return (

      <div>پنل</div>
    )
    
    
    
      else {

    return (
      <div>
        <Link href='/admin/Login'>
          <span>برای ورود به صفحه ادمین کلیک کنید</span>
        </Link>
      </div >
    )
}
  
}

export default Pannel