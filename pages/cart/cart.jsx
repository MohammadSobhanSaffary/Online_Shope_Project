import React, { useState } from 'react'
import Main from '../layout/Main'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import { addNumber, reduceNumber, removeItem, setpurchases } from '../../redux/slices/shopSlice';
import { useRouter } from 'next/router';
import { ImBin } from 'react-icons/im'
function Cart({ data }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [state, setstate] = useState({

    });
    const persianNumber = (x) => x.toLocaleString("fa-IR");
    const cartItems = useSelector(state => state.cart.value);
    return (

        <Main select='/'  >
            <div className='w-full  p-3'>
                <div className='flex justify-center flex-col items-center gap-5  '>
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
                        <tbody >
                            {

                                cartItems.map(el =>
                                (<tr key={el.id}>
                                    <td className='rounded-l-md flex items-center  justify-center gap-2'><span>تومان</span>{persianNumber(+el.number * (+data.filter(element => element.id == el.id)[0].price))} </td>
                                    <td className=''> <div className='flex items-center justify-center gap-2'><span className='rounded-[50%] border-[1px] h-7 w-7 flex justify-center items-center text-3xl cursor-pointer bg-gray-500' id={el.id} onClick={(e) => {


                                        dispatch(reduceNumber(e.target.id))

                                    }}>-</span>{persianNumber(el.number)}<span className='rounded-[50%] border-[1px] h-7 w-7 flex justify-center items-center pt-1 text-xl cursor-pointer bg-gray-500' id={el.id} onClick={(e) => {

                                        dispatch(addNumber(e.target.id))
                                    }}>+</span></div></td>
                                    <td>{persianNumber(+data.filter(element => element.id == el.id)[0].off)}%</td>
                                    <td className='  rtl'>{persianNumber(+data.filter(element => element.id == el.id)[0].price)}<span> تومان</span> </td>
                                    <td className='flex items-center justify-end gap-2 rounded-r-md! '>{data.filter(element => element.id == el.id)[0].fullName}<Image src={data.filter(element => element.id == el.id)[0].photo} width={40} height={40} /><ImBin className='text-gray-500 cursor-pointer' onClick={()=>dispatch(removeItem(el.id))}/></td>

                                </tr>
                                ))
                            }
                        </tbody>
                    </table>

                    <button className={cartItems.length !== 0 ? 'w-[15%] p-3 rounded-md text-xl bg-[#00B5CC] text-white' : 'hidden'} onClick={() => router.push('/cart/pay')}>ادامه فرایند خرید</button>




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