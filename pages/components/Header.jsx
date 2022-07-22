import React,{useState} from 'react';
import Image from 'next/image';
import { CgProfile, CgMenu } from 'react-icons/cg';
import { BsCart3, BsSearch } from 'react-icons/bs';


function Header() {



    const [toggleState, setToggle] = useState(initialState);
    const items = [
        {
            name: 'همه محصولات',
            svg: '/all.svg'
        },
        {
            name: 'لوازم دیجیتال',
            svg: '/phone.svg'
        },
        {
            name: 'لوازم خانگی',
            svg: '/refrigator.svg'
        },
        {
            name: 'لوازم تحریر',
            svg: '/pen.svg'
        },
        {
            name: 'محصولات بهداشتی',
            svg: '/hygiene.svg'
        },
        {
            name: 'محصولات غذایی',
            svg: '/apple.svg'
        }];

    return (

        <>
            <div className='hidden md:flex flex-col'>
                <div className=' flex  items-center justify-center   w-screen    gap-[10%] p-[5px]'>
                    <div className='flex gap-[40px]'>
                        <CgProfile className=' w-[50px] h-[50px] text-[#575563]  cursor-pointer' />
                        <BsCart3 className=' w-[40px] h-[40px] cursor-pointer ' fill='#575563' />
                    </div>
                    <div className='flex items-center border-[2px] border-cyan-800  cursor-pointer   w-[400px] h-[45px] p-[20px] rounded-md justify-between'>
                        <BsSearch className=' w-[25px] h-[25px] ' fill='#575563' />
                        <input type='text' className='border-0 outline-0  w-[300px] text-right' placeholder='جست وجوی محصول' />
                    </div>
                    <span className='rounded-[50%] w-[70px] h-[70px] bg-[#00B5CC] text-white text-sm  flex justify-center items-center text-center p-5 '>لوگوی فروشگاه</span>
                </div>

                <div className=' flex w-screen h-[60px] bg-[#575563] flex flex-row-reverse text-white justify-center '>
                    {items.map(e => (

                        <div className='headerItems p-3  items-center flex flex-row-reverse  gap-5 cursor-pointer'>
                            <span className=''>{e.name}</span>
                            <Image src={e.svg} width='30' height='30' alt={e.name} />
                        </div>
                    ))}

                </div>
            </div>




            <div className='w-screen md:hidden flex  items-center py-2 px-6   gap-[4rem] bg-[#e4e3e3]  cursor-pointer'>
                <div className='flex  gap-[20px] justify-center items-center'>
                    <BsSearch className=' w-[30px] h-[30px] cursor-pointer' fill='#575563 ' />
                    <BsCart3 className=' w-[30px] h-[30px] cursor-pointer text-[#575563] ' fill='#575563' />
                </div>
                <span className='rounded-[50%] w-[70px] h-[70px] bg-[#00B5CC] text-white text-sm cursor-pointer  flex justify-center items-center text-center p-5 '>لوگوی فروشگاه</span>
               <Image src='/menu.svg' width='40px' height='40px' className=' text-[#575563] cursor-pointer '/>
            </div>


























        </>











    )
}

export default Header



