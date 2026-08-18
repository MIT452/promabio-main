import React, { useEffect } from 'react';
import Banner from '../components/Banner';
import { useTranslation } from 'react-i18next';
// import imgBanner from '../assets/images/certifBann.jpg'
import imgBanner from '../assets/images/carrousel/1640949445-e6b9ad71-39db-4929-8ed3-3fc4ec0baae3.jpg'

// Certifications
import agriBio from '../assets/images/Agriculture-biologique.png'
import agriDurable from '../assets/images/Agriculture-durable.jpg'
import comEquitable from '../assets/images/commerce_equitable.png'
import iso22000 from '../assets/images/iso_22000.jpg'
import kasher from '../assets/images/kasher.webp'
import sedex from '../assets/images/Sedex-SMETA.jpg'
import uebt from '../assets/images/uebt.png'
import { Link } from 'react-router-dom';


const Certification = () => {
    const { t } = useTranslation('global')
    const dataCertif = [
        {
            img: agriBio,
            link: "/certif/0"
        },
        {
            img: agriDurable,
            link: "/certif/1"
        },
        {
            img: comEquitable,
            link: "/certif/2"
        },
        {
            img: iso22000,
            link: "/certif/3"
        },
        {
            img: uebt,
            link: "/certif/4"
        },
        {
            img: kasher,
            link: "/certif/5"
        },
        {
            img: sedex,
            link: "/certif/6"
        },
    ]
    useEffect(()=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },[])
    return (
        <div>
            <Banner img={imgBanner} title="Certification" />

            <div className="h-10"></div>
            <div className='flex flex-col gap-5 min-h-[50vh] items-center'>
                <div className='flex justify-center'>
                    <h2 className='md:text-4xl text-2xl w-fit font-normal text-primary'>{t('product.certification')}</h2>
                </div>
                <div className="h-5"></div>
                <div className="grid md:grid-cols-7 items-center grid-cols-4 gap-5 w-[90%] mx-auto transition-all">
                    {dataCertif.map((item, index) => (
                        <Link to={item.link}>
                            <img src={item.img} className={`${item.link === '/certif/3'?'h-16':'h-32'} mx-auto`} alt="" />
                        </Link>
                    ))}
                </div>
                <div className="h-12"></div>
            </div>

        </div>
    );
};

export default Certification;