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


function Slider2 ({ data }){
    console.log(data);
    // SwiperCore.use([Autoplay])
    return (
    
        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            Sw
            spaceBetween={50}
            slidesPerView={6}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}

        >

                <SwiperSlide>
                  

                </SwiperSlide>
                  {data.map(el => (el.best === "+") ? (
                    <SwiperSlide>
                        <div className='h=60 w-40 p-3 flex justify-between flex-col '>
                            <Image src={el.photo} width={30} height={30} />
                            <span>{el.name}</span>
                             <span>{el.price} </span>
                        </div>

                    </SwiperSlide>

                ) :'')}

             </Swiper>












    )
}
export default Slider2


