import React, { useState } from 'react';
import Banner from '../components/Banner';

import imgBanner from '../assets/images/carrousel/image-1.jpg'

import imgRebois from '../assets/images/022_reboisement.jpeg'
import imgDon from '../assets/images/donation.jpeg'

import imgsuperGirl from '../assets/images/024_promouvoir_les_famme_pour_travailler.jpeg'

// Last sect image
import img1 from '../assets/images/025_eau_potable.jpeg'
import img2 from '../assets/images/027_inauguration.jpeg'
import img3 from '../assets/images/027_Donation_Lauco.jpeg'

import culture from '../assets/images/plant-culture.jpeg'
import arbre from '../assets/images/plant-arbre.jpg'
import mangrove from '../assets/images/plant-mangrove.jpg'
import autochtone from '../assets/images/autochtone.jpeg'
import rebois from '../assets/images/rebois.jpeg'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTree, faMountainSun } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

// import Swiper core and required modules
import { Swiper, SwiperSlide } from 'swiper/react';
import {EffectFade,Autoplay ,Navigation, A11y } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/autoplay'



const Commitment = () => {

    const { t } = useTranslation('global')
    // variables
    const dataCollab = t('commitment.environment.collaboration.articles', { returnObjects: true })

    const imgReb = [culture, arbre, mangrove, rebois, autochtone]

    const dataReb = t('commitment.environment.work.card', { returnObjects: true })

    const dataEducation = t('commitment.education.card', { returnObjects: true })

    const dataWork = t('commitment.worker.card', { returnObjects: true })

    const dataRebCard = [
        {
            title: 'Plants de culture',
            content: "13.200 plants de culture de rente ont été distribués, composés principalement de Girofle, de Café et de Cacao",
        },
        {
            title: 'Plants d\'arbre',
            content: "3.610 plants d'arbres fruitiers ont été distribués dont des ramboutans, des citrons, des oranges et autres. ",
        },
        {
            title: 'plants de mangrove',
            content: "500 plants de mangrove ont été plantés pour appuyer les efforts de reboisement de la zone côtière d'Ambinany Marambo",
        },
        {
            title: 'Terrain réboisé',
            content: "1.5 ha de terrain ont été reboisé en plants à croissance rapide destiné à répondre les besoins en bois dans le futur.",
        },
        {
            title: 'plants d\'espèces autochtones',
            content: "3410 plants d'espèces autochtones ont été distribuées pour enrichir les parcelles de vanille et compenser nos émissions en CO2 durant toutes nos activités."
        },
    ]

    const sec1Data = [faMountainSun, faTree]
    // const sec1Data = [

    //     {
    //         content : "Respect de la biodiversité et des personnes auprès de la zone d’approvisionnement en vanille de la société PROMABIO. En d’autres termes, nous nous assurons que les activités dans les zones d’approvisionnements ne sont pas réalisées dans des zones protégées ou autres écosystèmes intacts.",
    //         icon : faMountainSun
    //     },
    //     {
    //         content : "Protection du Parc National Masoala présent dans la zone d’approvisionnement. En effet, nous contribuons dans la restauration des parties dégradées du parc national Masoala en vue de la compensation des CO2 émise durant toutes les activités de PROMABIO. Concrètement, 15 ha de forêt a été restaurée avec 30.000 plants d’espèces autochtones.",
    //         icon : faTree
    //     }
    // ]

    const lastSecData = [img1, img2, img3]

    // Components

    const [cardOpen, setCardOpen] = useState(null)

    const handleCard = (index) => {
        setCardOpen(cardOpen === index ? null : index)
    }

    const Card = ({ content, index, cardOpen, handleCard }) => {
        return <div onClick={() => handleCard(index)} className={`px-3 cursor-pointer py-1 rounded-md bg-primary flex flex-col text-white relative h-fit md:w-auto w-[100%] `}>
            <div className='flex items-center justify-between'>
                <p className='font-semibold'>{content.title}</p>
                <p className='text-3xl'>{cardOpen === index ? '-' : '+'}</p>
            </div>
            <p
                className={` overflow-hidden transition-all duration-500 ease-in-out ${cardOpen === index
                    ? 'max-h-[100px] h-auto'
                    : 'max-h-0 '
                    }`} dangerouslySetInnerHTML={{ __html: content.content }}>
            </p>
        </div>
    }

    const SimpleCard = ({ item, index }) => {
        return <div className='relative flex-1 md:my-0 my-3 bg-white rounded-md p-4'>
            <div className='absolute -left-5 -top-10 bg-white border-8 border-primary w-[80px] h-[80px] flex items-center justify-center rounded-full text-white'><FontAwesomeIcon icon={sec1Data[index]} className='text-secondary h-6' /></div>
            <div className=' mt-5'>
                {item.split('.').map((item) => (
                    <p className='text-black' dangerouslySetInnerHTML={{ __html: item }} />
                ))}
            </div>
        </div>
    }


    return (
        <div>
            <Banner img={imgBanner} title={t('navbar.4')} />

            {/* section 1 : respect de l'environnement et de la biodiversité*/}
            <div className="h-12"></div>
            <div>
                <div className='flex justify-center'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'>{t('commitment.environment.title')}</h2>
                </div>
                {/* Spacing between section */}
                <div className="h-12"></div>
                {/* part 1 :  Collaboration étroite entre PROMABIO et MNP*/}
                <div className='bg-primary text-white px-3 min-h-[80vh] flex items-center text-normal'>
                    <div className="text-content py-3 mx-auto">
                        <p className='text-center text-2xl mb-2 font-semibold'>{t('commitment.environment.collaboration.title')} </p>
                        <div className='text-slate-50 text-justify px-4'>
                            <p className='mb-1 text-center'>{t('commitment.environment.collaboration.text')}</p>
                        </div>
                        {/* spacing */}
                        <div className="h-10"></div>
                        <div className='md:flex gap-8 content-center w-[75%] justify-center mx-auto'>
                            {dataCollab.map((item, index) => (
                                <SimpleCard item={item} index={index} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* part 2 : reboisement */}
                <div className="h-12"></div>
                <div className='min-h-[60vh]'>
                    {/* title */}
                    <div className='bg-white/80 h-full'>
                        <div>
                            <h3 className='text-2xl text-center mb-2 font-semibold px-6'>{t('commitment.environment.work.title')}</h3>
                        </div>
                        <div className="h-10"></div>
                        <div className="content md:grid gap-4 grid-cols-3 px-10 w-[80%] mx-auto">
                            <div className="text col-span-2 ">
                                <p className='px-4 text-center mb-4'>{t('commitment.environment.work.text')}</p>
                                {/* Spacing */}
                                <div className="h-5"></div>
                                <div>
                                <Swiper
                                    // install Swiper modules
                                    modules={[EffectFade, Autoplay, Navigation, A11y]}
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
                                        pauseOnMouseEnter: true,
                                    }}
                                    speed={1200}
                                >
                                    {dataReb.map((item, index) => (
                                        <SwiperSlide key={index}>
                                            <div className='relative md:h-[90vh] h-[80vh] text-normal w-full flex items-center ' style={{ backgroundImage: `url(${imgReb[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                                <div className='h-[70%] flex flex-col px-7 items-center justify-center text-white bg-primary/80 transition-all'>
                                                    <div>
                                                        <p className=' mb-2 text-center font-medium'>{item.title}</p>
                                                        <p className='font-light text-justify' dangerouslySetInnerHTML={{ __html: item.content }}/>
                                                    </div>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                </div>
                                {/* <div className='grid items-center justify-center gap-2 px-4  md:my-0 my-2'>
                                    {dataReb.map((item, index) => (
                                        <Card key={index} index={index} content={item} handleCard={handleCard} cardOpen={cardOpen}/>
                                    ))}
                                </div> */}

                            </div>
                            <div className='min-h-[450px] md:block hidden rounded-lg min-w-[300px]' style={{ background: `url(${imgRebois})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}>

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Section 2 : Promouvoir l'éducation */}
            {/* Spacing */}
            <div className="h-12"></div>
            <div>
                <div className='flex justify-center'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'>{t('commitment.education.title')}</h2>
                </div>
                <div className="h-12"></div>
                {/* part 1 */}
                {dataEducation.map((item, index) => (
                    <div className=' flex items-center text-white min-h-[80vh]' style={{ background: `url(${imgDon})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="left-side my-2 transition-all lg:w-[40%] mx-9 rounded-md text-normal px-4 py-6 flex flex-col justify-center bg-primary/90">
                            <div>
                                <h3 className='text-2xl font-semibold mb-2'>{item.title}</h3>
                            </div>
                            <div className="text-content">
                                {item.content.split('.').map((item) => (
                                    <p>{item}.</p>
                                ))}

                            </div>
                        </div>
                    </div>
                ))}

                {/* part 2 */}
                {/* spacing */}
                <div className="h-12"></div>
                <div>
                    {/* title */}
                    <div className='title flex justify-center'>
                        <h3 className='text-2xl font-semibold mb-2'>{t('commitment.education.woman.title')}</h3>
                    </div>
                    <div className="h-6"></div>
                    <div className='md:flex w-[80%] mx-auto '>
                        <div className='text-normal flex-1 text-justify flex items-center '>
                            <p className=' p-4 py-2 w-[90%] mx-auto rounded-md'>{t('commitment.education.woman.content')}</p>
                        </div>
                        <div className='flex-1 flex mx-auto justify-center overflow-hidden max-h-[400px] max-w-[400px]'>
                            <img src={imgsuperGirl} className='mx-auto' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 : Assurer mode de vie descent */}
            {/* spacing */}
            <div className="h-12"></div>
            <div>
                <div className='flex justify-center'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'> {t('commitment.worker.title')}</h2>
                </div>
                {/* spacing */}
                <div className="h-12"></div>
                <div className='grid md:grid-cols-3 gap-8 w-[80%] mx-auto text-normal px-6'>
                    {/* Card 1 */}
                    {dataWork.map((item, index) => {
                        return <div style={{ background: `url(${lastSecData[index]})`, backgroundPosition: 'center', backgroundSize: 'cover' }} className='card min-h-[200px] overflow-hidden group rounded-lg shadow-md flex justify-center items-center'>
                            <div className="title flex items-center group-hover:opacity-100 opacity-0 transition-all justify-center bg-primary h-full w-full">
                                <p className='font-semibold text-center text-white'>{item}</p>
                            </div>
                        </div>
                    })}

                </div>
            </div>
            {/* spacing */}
            <div className="h-12"></div>
        </div>
    );
};

export default Commitment;