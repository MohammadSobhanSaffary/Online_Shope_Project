import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';
import Image from 'next/image';

const Slider1 = () => {
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
                delay: 2000,
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
                <div className='slide2 w-full h-[28rem]  flex flex-col justify-center items-end pr-10'>
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
                <div className='slide3 h-[28rem] flex justify-end items-center z-10 px-10 ml-6'>
                    <div className='hidden 2xl:flex flex-col  items-center  gap-7'>
                        <p className='text-3xl font-extrabold  text-red-600'>انواع خوراکی های خارجی و ایرانی </p>
                        <div >
                            <Image src='/chetos.jpg' width={200} height={200} />
                            <Image src='/chetose2.jpeg' width={200} height={200} />
                            <Image src='/croky.jpg' width={200} height={200} />
                        </div>
                    </div>
                </div>
            </SwiperSlide>  

            <SwiperSlide>
                <div className='slide4 h-[28rem]'>
                </div>
            </SwiperSlide>

        </Swiper>

    );
};
export default Slider1