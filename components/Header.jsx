import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { CgProfile, CgMenu } from 'react-icons/cg';
import { BsCart3, BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { stringify } from 'postcss';
import { getCookie } from 'cookies-next';
import { setUser } from '../redux/slices/userLogin';
import { setSearchValue } from '../redux/slices/searchValue';


function Header({ select }) {
    const router = useRouter();
    const dispatch = useDispatch();
    const info = useSelector(state => state.userInfo.value);
    const shopItems = useSelector(staet => staet.cart.value);
    const searchInput = useSelector(state => state.search.value)
    const [counter, setCounter] = useState('');
    const parse = (string) => JSON.parse(string);
    const searchValue = useSelector(state => state.search.value);

    useEffect(() => {

        const tempt = [];
        shopItems.forEach(element => {
            tempt.push(element.number)
        });

        setCounter(tempt.reduce((a, b) => a + b, 0));

    }, [shopItems]);




    useEffect(() => {
        const data = getCookie('user');
        (data) ? dispatch(setUser(parse(data))) : null;

    }, []);

    const [toggleState, setToggle] = useState(false);
    const items = [
        {
            name: 'همه محصولات',
            svg: '/all.svg',
            href: "/"
        },
        {
            name: 'لوازم دیجیتال',
            svg: '/phone.svg',
            href: "/categories/digital-tools"
        },
        {
            name: 'لوازم خانگی',
            svg: '/refrigator.svg',
            href: "/categories/furniture"
        },
        {
            name: 'لوازم تحریر',
            svg: '/pen.svg',
            href: "/categories/stationery"
        },
        {
            name: 'لوازم آرایشی',
            svg: '/makeup.svg',
            href: "/categories/makeup"
        },
        {
            name: 'محصولات غذایی',
            svg: '/apple.svg',
            href: "/categories/foods"
        }];
        
            return (
        
                <>
                    <div className='hidden md:flex flex-col'>
                        <div className=' flex  items-center justify-center   w-full    gap-[10%] p-[5px]'>
                            <div className='flex gap-[40px] '>
                                <div className='flex rtl items-center gap-2'>
                                    <CgProfile className=' w-[50px] h-[50px] text-[#575563]  cursor-pointer' onClick={() => router.push('/authentication/Login')} />
                                    <div className={(info === null) ? 'hidden' : 'flex flex-col  '}> <i className='font-semibold text-lg '> {info?.fName}  {info?.lName}</i> <i>{info?.userName}</i></div>
                                </div>
        
                                <span className="relative inline-block cursor-pointer" onClick={() => (info !== '' && shopItems.length !== 0) ? router.push('/cart/cart') : (info === '') ? router.push('/authentication/Login') : ''}>
                                    <BsCart3 className='w-[45px] h-[45px] text-[#575563]' />
                                    <span className="absolute top-2 right-5 inline-flex items-center justify-center px-1 py-1 text-md font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-[#00B5CC] rounded-full">
                                        {counter}
                                    </span>
                                </span>
        
        
        
                            </div>
                            <div className='flex items-center border-[2px] border-cyan-800  cursor-pointer   w-[25%] h-[45px] p-[20px] rounded-md justify-between' onClick={() => {
                                    (searchInput.length!==0) ? router.push('/searchProduct/search') : '';
                                }} >
                                <span > <BsSearch className=' w-[25px] h-[25px] ' fill='#575563' /></span>
        
                                <input type='text' value={searchInput} className='border-0 outline-0  w-[300px] text-right text-sm text-gray-500 rtl' placeholder='جست وجوی محصول' onChange={(e) => {
                                    dispatch(setSearchValue(e.target.value));
                                }}
        
                                />
        
        
        
                            </div>
                            <span className='rounded-[50%] w-[70px] h-[70px] bg-[#00B5CC] text-white text-sm  flex justify-center items-center text-center p-5 '>لوگوی فروشگاه</span>
                        </div>
        
                        <div className=' flex w-full h-[60px] bg-[#575563]  flex-row-reverse text-white justify-center '>
                            {items.map(e => (
                                <Link href={e.href} key={e.href}>
        
                                    <div className={(select == e.href) ? 'bg-[#00B5CC] rounded-[3px] p-3  items-center flex flex-row-reverse  gap-5 cursor-pointer h-[62px]' : 'hover:bg-[#00B5CC] hover:rounded-[3px] p-3  items-center flex flex-row-reverse  gap-5 cursor-pointer border-x-[1px] border-[#747380]'}  >
                                        <span >{e.name}</span>
                                        <Image src={e.svg} width='30' height='30' alt={e.name} />
                                    </div>
        
                                </Link>
                            ))}
        
                        </div>
                    </div>
        
        
                    {/*  mobile header */}
        
                    <div className='flex flex-col  md:hidden overflow-y-hidden' >
                        <div className='w-full  flex  items-center justify-center py-2 px-6   gap-[4rem] bg-[#e4e3e3]  cursor-pointer'>
                            <div className='flex  gap-[20px] justify-center items-center'>
                                <BsSearch className=' w-[30px] h-[30px] cursor-pointer' fill='#575563 ' />
                                <span className="relative inline-block">
                                    <BsCart3 className='w-[30px] h-[30px] text-[#575563]' />
                                    <span className="absolute top-0 right-2 inline-flex items-center justify-center px-2 py-1 text-[10px] font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                                        {counter}
                                    </span>
                                </span>
                            </div>
        
                            <span className='rounded-[50%] w-[70px] h-[70px] bg-[#00B5CC] text-white text-sm cursor-pointer  flex justify-center items-center text-center p-5 '>لوگوی فروشگاه</span>
                            <Image src='/menu.svg' width='40px' height='40px' className=' text-[#575563] cursor-pointer ' onClick={() => setToggle(!toggleState)} />
                        </div>
                        {(toggleState) ?
                            <div className='flex flex-row-reverse justify-between w-full h-full duration-200    bg-[rgba(0,0,0,0.2)]' id='menuContainer' onClick={(e) => {
                                (e.target.id === 'menuContainer') ? setToggle(false) : '';
                            }}>
                                <div className='w-[80vw] h-[100vh]  bg-[#575563]  flex flex-col  ' >
                                    <div className='menuItems border-t-0 p-3  items-center flex flex-row-reverse  gap-[20px] cursor-pointer' onClick={() => router.push('/authentication/Login')}>
        
                                        <CgProfile className=' w-[40px] h-[40px] text-[#ffffff]  cursor-pointer' />
                                        <span className='text-[20px] text-white'>پروفایل</span>
        
        
                                    </div>
        
                                    {items.map(e => (
                                        <Link href={e.href}>
                                            <div className='menuItems  p-3  items-center flex flex-row-reverse  gap-[20px] cursor-pointer text-white' >
                                                <Image src={e.svg} width='40' height='40' alt={e.name} />
                                                <span className='text-[18px]'>{e.name}</span>
        
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                                {/* <AiOutlineClose className='w-8 h-8  duration-200 ' fill='#575563' onClick={()=>setToggle(false)} /> */}
                            </div>
                            : null
                        }
                    </div>
                </>
            )
        
        }
        export default Header







        






































































