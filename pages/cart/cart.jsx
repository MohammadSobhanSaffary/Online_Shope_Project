import React, { useState } from 'react'
import Main from '../layout/Main'
import axios from 'axios'

function Cart({data}) {
    const [state, setstate] = useState({
        
    });
    return (
        <Main select='/' >
            <div className='w-full p-3'>
                <div className='flex justify-center items-center  '>
                    <table className='w-3/5'>
                        <thead>
                            <tr className='text-xl '>
                                <th className='rounded-l-md border-l-0'>قیمت نهایی</th>
                                <th>تعداد</th>
                                <th>تخفیف</th>
                                <th>قیمت</th>
                                <th className='rounded-r-md border-r-0'>نام محصول</th>
                            </tr>
                        </thead>
                         <tbody>
                       <tr>
                           <td></td>
                           <td></td>
                           <td></td>
                           <td></td>
                       </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </Main>
    )
}

export default Cart

export async function getStaticProps() {

    const res = await axios.get(`http://localhost:4000/products`)
   const data = await res.data
   return {
     props: {
       data,
      
     }
   }
 }