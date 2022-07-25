import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
function Login() {


    const [adminsInfo, setadminsInfo] = useState([{

        userName: 'sobhanSaffary',
        password: '138112345',
    },
    {
        userName: 'sajadSaffary',
        password: '7631',

    }
    ]);
    const [inputs, setinputs] = useState({
        userName: '',
        password: '',
    });
    return (


        <>
            <div className='w-[100vw] h-[100vh] flex  items-center justify-center  bg-slate-100  '>
                <div className='w-[28rem] h-[34rem]    flex flex-col gap-20   p-4 bg-white gap-'>
                    <div className=' flex justify-end p5'>
                        <CgProfile className=' w-20 h-20 mt-[1rem] text-[#00B5CC]' />
                        <Link href='/'>
                            <AiOutlineClose className='ml-[35%] w-7 h-7 cursor-pointer' fill='#00B5CC' />
                        </Link>
                    </div>
                    <form className='  flex flex-col gap-[4rem] '>
                        <div className='flex flex-row-reverse  gap-[1.8rem] '>
                            <label className='text-[#00b5cc]'>:نام کاربری</label>
                            <input className='border-[2px] border-[#00b5cc] w-[250px] h-[40px]  rounded-lg  text-right p-3 text-base outline-none fovous:bg-white ' />
                        </div>
                        <div className='flex flex-row-reverse gap-[2.7rem] '>
                            <label className='text-[#00b5cc]'>:رمز ورود  </label>
                            <input className='border-[2px] border-[#00b5cc]  w-[250px] h-[40px] rounded-lg text-right p-3 text-base outline-none focous:bg-white' />
                        </div>
                        <button className='bg-[#00b5cc] text-white border-[2px] border-[#00b5cc] w-[250px] h-[40px] self-center rounded-lg  mr-8'>ورود به اکانت</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login













