import React, { useEffect, useState } from 'react'
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
    const cartItems = useSelector(state => state.cart.value);
    console.log(cartItems)
    const [state, setState] = useState({
        totalPrice: '',
        offCod: '',
        offCodValidation: false
    });
    const setOffCode = (input) => {
        setState({
            totalPrice: state.totalPrice,
            offCode: input,
            offCodValidation: state.offCodValidation
        })
    }
    const persianNumber = (x) => x.toLocaleString("fa-IR");

    useEffect(() => {

        cartItems.map(el => setState({
            totalPrice: persianNumber(+el.number * (+el.productInfo.price)),
            offCod: state.offCod,
            offCodValidation: state.offCodValidation
        }))

    }, [cartItems])




    if (cartItems.length !== 0)
        return (
            <div className='h-screen'>
                <Main select='/'  >
                    <div className='w-full  p-3'>
                        <div className='flex justify-center flex-col items-center gap-10  '>
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
                                            <td className='rounded-l-md flex items-center  justify-center gap-2'><span>تومان</span>{persianNumber(+el.number * (+el.productInfo.price))} </td>
                                            <td className=''> <div className='flex items-center justify-center gap-2'><span className='rounded-[50%] border-[1px] h-7 w-7 flex justify-center items-center text-3xl cursor-pointer bg-gray-500 text-white' id={el.id} onClick={(e) => {


                                                dispatch(reduceNumber(e.target.id))

                                            }}>-</span>{persianNumber(el.number)}<span className='rounded-[50%] border-[1px] h-7 w-7 flex justify-center items-center pt-1 text-xl cursor-pointer bg-gray-500 text-white' id={el.id} onClick={(e) => {

                                                dispatch(addNumber(e.target.id))
                                            }}>+</span></div></td>
                                            <td>{persianNumber(+el.productInfo.off)}%</td>
                                            <td className='  rtl'>{persianNumber(+el.productInfo.price)}<span> تومان</span> </td>
                                            <td className='flex items-center justify-end gap-2 rounded-r-md! '>{el.productInfo.fullName}<Image src={el.productInfo.photo} width={40} height={40} /><ImBin className='text-gray-500 cursor-pointer' onClick={() => dispatch(removeItem(el.id))} /></td>

                                        </tr>
                                        )


                                        )
                                    }
                                </tbody>
                            </table>

                            <div className='w-3/4 flex items-center justify-around rtl'>

                                <div className='flex items-center gap-2'>
                                    <input placeholder='کد تخفیف خود را وارد کنید' className='outline-0 w-60 text-lg text-center p-2  rounded-sm shadow-sm shadow-gray-400' onChange={(e) => setOffCode(e.target.value)} />
                                    <button className='bg-orange-400 p-3 rounded-md cursor-pointer text-[#f3f3f3]'>اعمال کدتخفیف</button>
                                </div>

                                <span className={(state.offCodValidation) ? 'text-xl line-through ' : 'hidden'}>{state.totalPrice} <span>تومان</span></span>

                            </div>

                            <button className={cartItems.length !== 0 ? 'w-[15%] p-3 rounded-md text-xl bg-[#00B5CC] text-white' : 'hidden'} onClick={() => router.push('/cart/pay')}>ادامه فرایند خرید</button>



                        </div>
                    </div>
                </Main>
            </div >


        )
    else {
        return (
            <div className='h-screen'>
                <Main select='/'>

                    <p className='text-xl text-center text-red-500 font-semibold '>!سبد خرید شما خالی است</p>
                </Main>
            </div>
        )
    }
}

export default Cart

export async function getServerSideProps() {

    const res = await axios.get(`http://localhost:4000/products`)
    const data = await res.data;
    return {
        props: {
            data,

        }
    }
}
