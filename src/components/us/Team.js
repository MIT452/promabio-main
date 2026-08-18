import React from 'react';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade,Autoplay ,Navigation, A11y } from 'swiper/modules';

import img1 from '../../assets/images/004_Tous_les_travallieurs.jpeg'
import img2 from '../../assets/images/005_Encien_tranvallieurs.jpg'
import img3 from '../../assets/images/006_Jeune_travailleurs.jpeg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'
import { useTranslation } from 'react-i18next';


const Team = () => {

    const { t } = useTranslation('global')
        
            // Récupération des sections dynamiquement
            const team = t('us.team', { returnObjects: true });

    const dataTeam = [img1, img2, img3]

    return (
        <div className='relative'>
          <Swiper
                // install Swiper modules
                modules={[EffectFade, Autoplay,Navigation, A11y]}
                slidesPerView={1}
                navigation
                effect={'fade'}
                loop={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter:true,
                  }}
                  speed={1200}
            >
                {team.map((item, index)=>(
                    <SwiperSlide key={index}>
                    <div className='relative md:h-[90vh] h-[80vh] text-normal w-full flex items-center ' style={{backgroundImage:`url(${dataTeam[index]})`, backgroundSize:'cover', backgroundPosition:'center'}}>
                        <div className='lg:w-[40%] md:w-[50%] h-full flex flex-col px-7 items-center justify-center text-white bg-primary/90 transition-all'>
                        <div>
                        <p className='lg:text-2xl md:text-2xl text-xl font-bold mb-2'>{item.title}</p>
                        <p className='font-light text-justify'>{item.content}</p>
                        </div>
                        </div>
                    </div>
                </SwiperSlide>
                )) }
            </Swiper>  
        </div>
    );
};

export default Team;