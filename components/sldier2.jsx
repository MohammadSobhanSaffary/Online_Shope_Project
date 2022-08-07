import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';


function Slider2({ data, name }) {


    const persianNumber = (x) => {
        return x.toLocaleString("fa-IR");

    }

    return (


        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            Sw
            spaceBetween={50}
            slidesPerView={4}
            navigation
            pagination={{ clickable: true }}
            loop={true}


        >

            {data.map(el => ((name === 'best') ? el.best === "+" :(name==='new')? el.new === "1" :'') ? (

                <SwiperSlide key={el.id} >
                    <div className='      h-[26rem] my-20'>
                        <Link href={`/products/${el.id}`}>
                            <div className='w-full h-full flex flex-col items-center gap-5 justify-between shadow-lg px-5 py-4 shadow-[#575563]  rounded-lg'>
                                <Image src={el.photo} width={250} height={250} />
                                <span className='text-right'>{el.fullName}</span>
                                <div className='flex flex-col gap-4 self-start'>
                                    <div className='flex  flex-row self-start gap-5'>
                                        <span>تومان</span>
                                        <span className={(Number(el.off) !== 0) ? 'text-right text-lg self-end font-bold line-through' : 'text-right text-lg self-end font-bold '}>{persianNumber((Number(el.price)))} </span>
                                    </div>
                                    {(Number(el.off) !== 0) ? <div className='flex  flex-row-reverse self-start gap-5'> <span className='text-right text-lg self-end font-bold text-[#00B5CC]'>    {persianNumber(Math.floor((Number(el.price) - Number(el.price) * Number(el.off) / 100)))} </span>  <span>تومان</span ></div> : ''}

                                </div>
                            </div>
                        </Link>
                    </div>

                </SwiperSlide>

            ) :
                (
                    <SwiperSlide key={el.id} >
                        <div className='      h-[26rem] my-20'>
                            <Link href={`/products/${el.id}`}>
                                <div className='w-full h-full flex flex-col items-center gap-5 justify-between shadow-lg px-5 py-4 shadow-[#575563]  rounded-lg'>
                                    <Image src={el.photo} width={250} height={250} />
                                    <span className='text-right'>{el.fullName}</span>
                                    <div className='flex flex-col gap-4 self-start'>
                                        <div className='flex  flex-row self-start gap-5'>
                                            <span>تومان</span>
                                            <span className={(Number(el.off) !== 0) ? 'text-right text-lg self-end font-bold line-through' : 'text-right text-lg self-end font-bold '}>{persianNumber((Number(el.price)))} </span>
                                        </div>
                                        {(Number(el.off) !== 0) ? <div className='flex  flex-row-reverse self-start gap-5'> <span className='text-right text-lg self-end font-bold text-[#00B5CC]'>    {persianNumber(Math.floor((Number(el.price) - Number(el.price) * Number(el.off) / 100)))} </span>  <span>تومان</span ></div> : ''}

                                    </div>
                                </div>
                            </Link>
                        </div>

                    </SwiperSlide>
                ))}

        </Swiper >
    )
}












export default Slider2


