import React from 'react';
// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay ,Navigation, Pagination, A11y } from 'swiper/modules';

import img1 from '../assets/images/carrousel/image-1.jpg'
import img2 from '../assets/images/carrousel/image-3.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'
import { useTranslation } from 'react-i18next';

const Carousel = () => {
    const [t, i18n] = useTranslation("global")
    return (
        <div className='relative flex items-center justify-center h-[100vh]'>
            <div className='absolute top-0 right-0 left-0 bottom-0'>
            <Swiper
                // install Swiper modules
                modules={[Autoplay,Navigation, Pagination, A11y]}
                slidesPerView={1}
                navigation
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                  }}
                  speed={1200}
            >
                <SwiperSlide>
                    <div className='relative h-[100vh] w-full flex items-center justify-center' style={{backgroundImage:`url(${img1})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                        <p className='text-white md:mt-40 text-[2vw] max-w-[70%] text-center'>{t('home.carousel.0')}</p>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative h-[100vh] w-full flex items-center justify-center' style={{backgroundImage:`url(${img2})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                        <p className='text-white md:mt-40 text-[2vw] max-w-[70%] text-center'>{t('home.carousel.1')}</p>
                    </div>
                    </SwiperSlide>
            </Swiper>
            </div>
            <div className='top-16 absolute z-20'>
                <p className='Principal-tiltle font-stencil text-white text-[15vw]'>
                    Promabio
                </p>
            </div>
        </div>
    );
};

export default Carousel;