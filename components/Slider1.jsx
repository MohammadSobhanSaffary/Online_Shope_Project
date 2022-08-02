import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

export default () => {
    return (

        <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, A11y]}
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
                delay: 300,
                disableOnInteraction: false,
            }}

        >
            <SwiperSlide>
                <Link href='/categories/digital'>
                    <div className='h-[28rem] w-screen slide1'>
                    </div>
                </Link>

            </SwiperSlide>

            <SwiperSlide>
                <div className='slide2 w-screen h-[28rem] '>
                    <p>برای مشاهده لوازم خانگی فروشگاه کلیک کنید

                    </p>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                sss
            </SwiperSlide>
            <SwiperSlide>
                ssss
            </SwiperSlide>

        </Swiper>

    );
};