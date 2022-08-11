import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slices/userLogin';
import axios from 'axios';

function SignIn({ data }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [state, setState] = useState({
    user: {
      fName: '',
      lName: '',
      userName: '',
      email: '',
      password: '',
      id: Date.now()
    },
    validation: '  ',
  });

  const handleSignIn = (e) => {
    e.preventDefault();
    if (!data.filter(el => el.userName === state.user.userName || el.fName === state.user.fName).length) {
      dispatch(setUser(state.user));
      setState({
        user: state.user,
        validation: true
      });
      axios.post('http://localhost:4000/users', state.user);
      router.push('/');
    }

    else {
      setState({
        user: state.user,
        validation: false
      });
    }
  }





  return (
    <div className=' w-full  h-full  '>

      <div className=' flex  items-center justify-center h-screen  bg-slate-100 '>
        <div className='  2xl:w-[30%] xl:w-[35%] lg:w-[40%] md:w-[50%]    h-[80%] w-[90%]    flex flex-col gap-12   p-4 bg-white gap-' >
          <div className=' flex '>
            <div className='flex flex-col justify-center items-center gap-2 ml-4 w-full'>
              <CgProfile className=' w-20 h-20  mt-2 text-[#726c6c]' />
              <i className={(state.validation) ? 'hidden' : 'text-red-500 text-center text-lg'}>  نام یا نام کاربری شما تکراریست!     </i>

            </div>
            <Link href='/'>
              <AiOutlineClose className='w-7 h-7 cursor-pointer text' fill='#726c6c' />
            </Link>
          </div>


          <div className='flex flex-col gap-12'>
            <form className='  flex flex-col  items-center gap-10' onSubmit={(e) => handleSignIn(e)}>
              <div className='w-[90%] md:w-[60%] flex justify-between'>
                <input className='border-[2px]  border-[#726c6c] w-[45%]   rounded-lg  text-right p-3 text-base outline-none focous:bg-[#fff] ' placeholder='نام خانوادگی ' required onChange={(e) => {
                  setState({
                    user: {
                      fName: state.user.fName,
                      lName: e.target.value,
                      userName: state.user.userName,
                      email: state.user.email,
                      password: state.user.password,
                    },
                    validation: state.validation

                  })
                }} />
                <input className='border-[2px]  border-[#726c6c] w-[45%]    rounded-lg  text-right p-3 text-base outline-none focous:bg-[#fff] ' placeholder='نام ' required onChange={(e) => {
                  setState({
                    user: {
                      fName: e.target.value,
                      lName: state.user.lName,
                      userName: state.user.userName,
                      email: state.user.email,
                      password: state.user.password,
                    },
                    validation: state.validation

                  })
                }} />
              </div>
              <input className='border-[2px]  border-[#726c6c] w-[90%] md:w-[60%]   rounded-lg  text-right p-3 text-base outline-none focous:bg-[#fff] ' placeholder=' نام  کاربری' required onChange={(e) => {
                setState({
                  user: {
                    fName: state.user.fName,
                    lName: state.user.lName,
                    userName: e.target.value,
                    email: state.user.email,
                    password: state.user.password,

                  },
                  validation: state.validation

                })
              }} />
              <input className='border-[2px] border-[#726c6c] w-[90%] md:w-[60%] rounded-lg text-right p-3 text-base outline-none focous:bg-white' placeholder=' ایمیل' type='email' required onChange={(e) => {
                setState({
                  user: {
                    fName: state.user.fName,
                    lName: state.user.lName,
                    userName: state.user.userName,
                    email: e.target.value,
                    password: state.user.password,


                  },
                  validation: state.validation

                })
              }} />
              <input className='border-[2px] border-[#726c6c] w-[90%] md:w-[60%] rounded-lg text-right p-3 text-base outline-none focous:bg-white' placeholder='رمز ورود' type='password' required minlength="5" onChange={(e) => {
                setState({
                  user: {
                    fName: state.user.fName,
                    lName: state.user.lName,
                    userName: state.user.userName,
                    email: state.user.email,
                    password: e.target.value

                  },
                  validation: state.validation

                })
              }} />
              <button className='bg-[#726c6c] text-white  w-[90%] md:w-[60%] py-3 self-center rounded-lg  ' >ساخت اکانت  </button>
            </form>
            <div className='flex md:flex-row flex-col items-center justify-center  gap-6'>
              <Link href='/authentication/Login'><i className='w-[80%] md:w-[40%]  border-[1px] border-gray-600 text-gray-600 text-sm  cursor-pointer text-center p-3  rounded-sm'> ورود به اکانت </i></Link>
              <Link href='/admin/Login'><a className='text-center text-sm self-center w-[80%] md:w-[40%] p-3 rounded-sm cursor-pointer text-gray-400 border-[1px] border-gray-300 '>  ورود به پنل ادمین      </a></Link>
            </div>
          </div>
        </div>
      </div>



    </div >



  )
}
export default SignIn

export async function getStaticProps() {

  const res = await axios.get(`http://localhost:4000/users`)
  const data = await res.data
  return {
    props: {
      data
    }
  }
}












