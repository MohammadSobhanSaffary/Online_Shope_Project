import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import data from '../../db.json'
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setValidation } from '../../redux/slices/slcie';
function Login() {
    const router = useRouter();
    const dispatch=useDispatch();
   console.log(router)


    const [state, setState] = useState({
        userName: "",
        password: "",
        validation: ""
    });


    const handleClick = (e) => {
        e.preventDefault()
        let validation = data.admins.map(el => (el.userName === state.userName && el.passWord === state.password))
        if (validation) {
            setState({
                userName: state.userName,
                password: state.password,
                validation: true
            });
             dispatch(setValidation(true));
        }
        else {
            setState({
                userName: state.userName,
                password: state.password,
                validation: false
            });  
            dispatch(setValidation(false));
            router.pathname='/admin/Pannel';
        }


    }

    return (


        <>
            <div className='w-[100vw] h-[100vh] flex  items-center justify-center  bg-slate-100  '>
                <div className='w-[28rem] h-[34rem]    flex flex-col gap-20   p-4 bg-white gap-'>
                    <div className=' flex justify-end p5'>
                        <div className='flex flex-col justify-center items-center gap-2 w-[90%]'>
                            <CgProfile className=' w-20 h-20 mt-[1rem] text-[#00B5CC]' />
                            {(state.validation) ? <i className='text-red-500 text-center text-lg'>اطلاعات ورودی شما صحیح نمی باشد</i> : ''}
                        </div>

                        <Link href='/'>
                            <AiOutlineClose className='w-7 h-7 cursor-pointer' fill='#00B5CC' />
                        </Link>
                    </div>
                    <form className='  flex flex-col gap-[4rem] ' onSubmit={(e)=>handleClick(e)}>
                        <div className='flex flex-row-reverse  gap-[1.8rem] '>
                            <label className='text-[#00b5cc]' >:نام کاربری</label>
                            <input className='border-[2px] border-[#00b5cc] w-[250px] h-[40px]  rounded-lg  text-right p-3 text-base outline-none fovous:bg-white ' onChange={(e) => setState(
                                {
                                    userName: e.target.value,
                                    passWord: state.password,
                                    validation: state.validation
                                }
                            )} />
                        </div>
                        <div className='flex flex-row-reverse gap-[2.7rem] '>
                            <label className='text-[#00b5cc]'>:رمز ورود  </label>
                            <input className='border-[2px] border-[#00b5cc]  w-[250px] h-[40px] rounded-lg text-right p-3 text-base outline-none focous:bg-white' onChange={(e) => setState(
                                {
                                    userName: state.userName,
                                    passWord: e.target.value,
                                    validation: state.validation
                                }
                            )} />
                        </div>
                        <button className='bg-[#00b5cc] text-white border-[2px] border-[#00b5cc] w-[250px] h-[40px] self-center rounded-lg  mr-8' >ورود به اکانت</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default Login













