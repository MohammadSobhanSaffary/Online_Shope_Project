import React, { useState } from 'react'
import axios from 'axios'
import Image from 'next/image';
import { BsCreditCard, BsSignpostFill } from 'react-icons/bs'
import { TiTick } from 'react-icons/ti'
import { RiFileForbidFill } from 'react-icons/ri'
import { toast, ToastContainer } from 'react-toastify';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

function Pay({ data }) {
    const router = useRouter();
    const dispatch=useDispatch();
    return (
        <div className='w-full h-full flex flex-col  items-center border-1px  pb-8'>
            <div className='w-full flex flex-row-reverse justify-between p-6 '><Image src='/Shaparak.png' width={150} height={75} />  <span className=' text-3xl'>درگاه پرداختی سامان</span>   <Image src='/kish.jpg' width={200} height={200} /></div>
            <div className='flex items-center justify-around w-full'>
                <div className='border-blue-500 border-[1px] flex flex-col items-center rounded-sm w-[80%] md:w-[60%] xl:w-[40%]'>
                    <div className='bg-blue-500 text-white w-full  flex  rtl  items-center gap-2 p-2 '> <BsCreditCard /> اطلاعات کارت</div>
                    <form className='flex flex-col items-center w-full  gap-5  py-3'>
                        <input className='rtl border-gray-500 border-[1px] rounded-md w-[70%] p-1 outline-0' placeholder='شماره کارت' type='' required />
                        <div className='w-[70%] flex  items-center justify-around'>
                            <input className='p-1 rtl border-gray-500 border-[1px] rounded-md outline-0' placeholder='رمز اینترنتی' type='' required />
                            <input className='p-1 rtl border-gray-500 border-[1px] rounded-md outline-0' placeholder='cvv2' type='' required />
                        </div>

                        <div className='w-[70%] flex  items-center justify-around'>
                            <input className='rtl p-1 border-gray-500 border-[1px] rounded-md outline-0' placeholder='ماه' type='' required max='2' min='2' />
                            <input className='rtl p-1 border-gray-500 border-[1px] rounded-md outline-0' placeholder='سال' type='' required max='2' min='2' />
                        </div>
                        <input className='rtl border-gray-500 border-[1px] rounded-md p-1 w-[60%] outline-0' placeholder='ایمیل' type='email' required />

                        <div className='w-full'>
                            <div className='w-[100%] bg-blue-500 text-white flex items-center flex-row-reverse p-1 gap-2'><BsSignpostFill /> آدرس و کد پستی</div>
                        </div>
                        <input className='rtl p-1 border-gray-500 border-[1px] rounded-md w-[70%] outline-0' placeholder='آدرس دقیق ' type='text' required min='20' />
                        <input className='rtl p-1 border-gray-500 border-[1px] rounded-md w-[30%] outline-0' placeholder='کد پستی' required max='11' min='8' />
                        <div className='w-full flex items-center justify-center gap-3'>
                            <button className='bg-blue-400 text-white text-xl rounded-md p-1  w-[35%] md:w-[25%] flex items-center justify-center flex-row-reverse gap-2 cursor-pointer'> <TiTick />پرداخت</button>
                            <button className='bg-red-500 text-white text-xl rounded-md p-1 w-[35%] md:w-[25%] flex items-center justify-center flex-row-reverse gap-2 cursor-pointer ' onClick={() => {
                                toast.error(' !شما از خرید انصراف دادید  ', {
                                    position: "top-center",
                                    autoClose: 5000,
                                    hideProgressBar: false,
                                    closeOnClick: true,
                                    pauseOnHover: true,
                                    draggable: true,
                                    progress: undefined,
                                })
                                router.back();

                            }}><RiFileForbidFill />انصراف</button>
                        </div>



                    </form>
                </div>

            </div >
        </div >

    )











}
export default Pay

export async function getStaticProps() {

    const res = await axios.get(`http://localhost:4000/products`)
    const data = await res.data
    return {
        props: {
            data,

        }
    }
}