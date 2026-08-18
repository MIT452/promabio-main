import React from 'react';
import Banner from '../components/Banner';

import imgBanner from '../assets/images/carrousel/metier.jpg'

// work images

import imgCult from '../assets/images/018_Culture_Vanille.JPG'
import imgCollect from '../assets/images/019_Collecte.JPG'
import imgPrepa from '../assets/images/20_Preparation.jpg'

import bgSect2 from "../assets/images/vanilla-stick.jpg"
import imgFecond from "../assets/images/009_Fecondation_fait_par_la_main.jpg"
import imgRecolte from "../assets/images/010_Récolte_de_vanille.jpg"
import { useTranslation } from 'react-i18next';


const Work = () => {

    const {t} = useTranslation('global')

    const works = t('work.articles', {returnObjects : true})
    const process = t('work.process.data', {returnObjects : true})

    const dataWork = [imgCult,imgCollect,imgPrepa]

    const dataProc = [imgFecond,imgRecolte]

    return (
        <div>
            <Banner title={t('navbar.3')} img={imgBanner} />
            {/* spacing */}
            <div className="h-12"></div>
            {/* introduction */}
            <div className="intro h-[50vh] flex items-center">
                <h2 className='text-center w-[90%] mx-auto text-titleMd'>{t('work.intro')}</h2>
            </div>
            <div className="h-10"></div>

            {works.map((item, index) => (
                <div>
                    <div className={`md:flex min-h-[70vh] w-[80%] mx-auto gap-5 ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                        <div className="image relative overflow-hidden flex-1  px-5">
                            <img src={dataWork[index]} className='h-full w-full' alt="" />
                            <div className="title absolute top-5 right-0 bg-primary py-9 px-4 text-white">
                                <h3 className='text-3xl'>{item.title}</h3>
                            </div>
                        </div>
                        <div className='text flex items-center justify-center flex-1'>
                            <div className='text-content '>
                                <p className='text-justify text-normal'>{item.content}</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-16"></div>
                </div>
            ))}
            {/* Quelques processus */}
            <div className="h-10"></div>
            <div>
                <div className='flex px-4'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'>{t('work.process.title')}</h2>
                </div>
                <div className="h-6"></div>
                <div style={{ background: `url(${bgSect2})`, backgroundPosition: 'right', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                    <div className="h-16"></div>
                    {process.map((item, index) => (
                        <div>
                            <div className={`md:flex min-h-[60vh] ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                                <div className='flex-1 p-8 bg-white/30'>
                                    <h2 className='text-titleMd font-semibold text-secondary'>{item.title}</h2>
                                    <p className='text-normal '>{item.content}</p>
                                </div>
                                <div style={{ background: `url(${dataProc[index]})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex-1 md:w-auto md:h-auto w-[full] md:mx-0 mx-4 h-[300px]'>
                                </div>
                            </div>
                            <div className="h-16"></div>
                        </div>
                    ))}

                </div>
            </div>

        </div>
    );
};

export default Work;