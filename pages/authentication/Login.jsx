import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';

function Login({ data }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const [state, setState] = useState({
        user:
        {
            userName: '',
            password: ''
        },
        isInfoValied: '  ',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(data);
        console.log(state)
        data.map(el => {
            if (el.userName === state.user.userName && el.password === state.user.password) {
                setState({
                    user: state.user,
                    isInfoValied: true,
                })
                router.back();
            }

            else {
                setState({
                    user: state.user,
                    isInfoValied: false,
                })

            }
        })

    }





    return (


        <div className=' w-full  h-full  '>

            <div className=' flex  items-center justify-center h-screen py-3  bg-slate-100 '>
                <div className='  2xl:w-[24%] xl:w-[30%] lg:w-[40%] md:w-[60%]    h-[80%] md:h-[70%] w-[90%]    flex flex-col gap-16  p-4 bg-white gap-'>
                    <div className=' flex '>
                        <div className='flex flex-col justify-center items-center gap-2 ml-4 w-full'>
                            <CgProfile className=' w-20 h-20  mt-2 text-[#00B5CC]' />
                            <i className={(state.isInfoValied) ? 'hidden' : 'text-red-500 text-center text-lg'}>اطلاعات ورودی شما صحیح نمی باشد</i>

                        </div>
                        <Link href='/'>
                            <AiOutlineClose className='w-7 h-7 cursor-pointer' fill='#00B5CC' />
                        </Link>
                    </div>
                    <div className='flex flex-col gap-10'>
                        <form className='  flex flex-col  items-center gap-[3rem] ' onSubmit={(e) => handleSubmit(e)} >
                            <input className='border-[2px]  border-[#00b5cc] w-[90%] md:w-[60%]   rounded-lg  text-right p-3 text-base outline-none focous:bg-[#fff] ' placeholder='نام کاربری' onChange={(e) => {
                                setState({
                                    user: {
                                        userName: e.target.value,
                                        password: state.user.password
                                    },
                                    isInfoValied: state.isInfoValied
                                })
                            }} />
                            <input className='border-[2px] border-[#00b5cc] w-[90%] md:w-[60%] rounded-lg text-right p-3 text-base outline-none focous:bg-white' placeholder='رمز ورود' type='password' onChange={(e) => {
                                setState({
                                    user: {
                                        userName: state.user.userName,
                                        password: e.target.value
                                    },
                                    isInfoValied: state.isInfoValied
                                })
                            }} />
                            <button className='bg-[#00b5cc] text-white border-[2px] border-[#00b5cc] w-[90%] md:w-[60%] py-3 self-center rounded-lg  ' >ورود به اکانت</button>
                        </form>
                        <div className='flex flex-col items-center justify-between gap-6'>
                            <Link href='/authentication/SignIn'><i className=' w-[80%] md:w-[50%]  border-[1px] border-blue-600 text-blue-600 text-sm  cursor-pointer text-center p-3'> ثبت نام </i></Link>

                            <Link href='/admin/Login'><a className='text-center text-sm self-center w-[80%] md:w-[50%] p-3 rounded-sm cursor-pointer text-blue-400 border-[1px] border-blue-300 '>  ورود به پنل ادمین      </a></Link>
                        </div>
                    </div>
                </div>
            </div>



        </div >





    )
}

export default Login





export async function getStaticProps() {

    const res = await axios.get(`http://localhost:4000/users`)
    const data = await res.data
    return {
        props: {
            data
        }
    }
}





