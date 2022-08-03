import  SwiperCore,{ Navigation, Pagination, Scrollbar, A11y,Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const Slider1=() => {
    SwiperCore.use([Autoplay])
    return (

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            Sw
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay:2000,
                disableOnInteraction: false,
            }}

        >
            <SwiperSlide>
                <Link href='/categories/digital'>
                    <div className='h-[28rem]  slide1'>
                    </div>
                </Link>

            </SwiperSlide>

            <SwiperSlide>
                <div className='slide2 w-screen h-[28rem]  flex flex-col justify-center items-end pr-10'>
                    <div className='flex flex-col justify-center gap-4 items-center'>
                        <p className='text-2xl pr-20'>برای مشاهده لوازم خانگی فروشگاه کلیک کنید
                        </p>

                        <Link href='/'>
                            <button className='rounded-[50%] w-16 h-16 text-xl bg-gray-500 text-white cursor-pointer'>
                                اینجا
                            </button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>


            <SwiperSlide>
            <div className='h-[28rem]  slide3'>
                    </div>
            </SwiperSlide>
            <SwiperSlide>
                
            </SwiperSlide>

        </Swiper>

    );
};
export default Slider1