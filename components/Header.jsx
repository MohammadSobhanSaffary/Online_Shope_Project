import React, { useState } from 'react';
import Image from 'next/image';
import { CgProfile, CgMenu } from 'react-icons/cg';
import { BsCart3, BsSearch } from 'react-icons/bs';
import { AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';


function Header() {



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
            name: 'محصولات بهداشتی',
            svg: '/hygiene.svg',
            href: "/categories/health"
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
                    <div className='flex gap-[40px]'>
                        <CgProfile className=' w-[50px] h-[50px] text-[#575563]  cursor-pointer' />
                        <BsCart3 className=' w-[40px] h-[40px] cursor-pointer ' fill='#575563' />
                    </div>
                    <div className='flex items-center border-[2px] border-cyan-800  cursor-pointer   w-[25%] h-[45px] p-[20px] rounded-md justify-between'>
                        <BsSearch className=' w-[25px] h-[25px] ' fill='#575563' />
                        <input type='text' className='border-0 outline-0  w-[300px] text-right' placeholder='جست وجوی محصول' />
                    </div>
                    <span className='rounded-[50%] w-[70px] h-[70px] bg-[#00B5CC] text-white text-sm  flex justify-center items-center text-center p-5 '>لوگوی فروشگاه</span>
                </div>

                <div className=' flex w-full h-[60px] bg-[#575563]  flex-row-reverse text-white justify-center '>
                    {items.map(e => (
                        <Link href={e.href}>
                            <div className='headerItems p-3  items-center flex flex-row-reverse  gap-5 cursor-pointer'>
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
                        <BsCart3 className=' w-[30px] h-[30px] cursor-pointer text-[#575563] ' fill='#575563' />
                    </div>

                    <span className='rounded-[50%] w-[70px] h-[70px] bg-[#00B5CC] text-white text-sm cursor-pointer  flex justify-center items-center text-center p-5 '>لوگوی فروشگاه</span>
                    <Image src='/menu.svg' width='40px' height='40px' className=' text-[#575563] cursor-pointer ' onClick={() => setToggle(!toggleState)} />
                </div>
                {(toggleState) ?
                    <div className='flex flex-row-reverse justify-between w-full h-full duration-200    bg-[rgba(0,0,0,0.2)]' id='menuContainer' onClick={(e) => {
                        (e.target.id === 'menuContainer') ? setToggle(false) : '';
                    }}>
                        <div className='w-[80vw] h-[100vh]  bg-[#575563]  flex flex-col  ' >
                            <div className='menuItems border-t-0 p-3  items-center flex flex-row-reverse  gap-[20px] cursor-pointer' >
                                <CgProfile className=' w-[40px] h-[40px] text-[#ffffff]  cursor-pointer' />
                                <span className='text-[20px] text-white'>پروفایل</span>

                            </div>

                            {items.map(e => (

                                <div className='menuItems  p-3  items-center flex flex-row-reverse  gap-[20px] cursor-pointer text-white' >
                                    <Image src={e.svg} width='40' height='40' alt={e.name} />
                                    <span className='text-[18px]'>{e.name}</span>

                                </div>
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























































