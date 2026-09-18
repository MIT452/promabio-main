import React from 'react';

// Certifications
import agriBio from '../assets/images/Agriculture-biologique.png'
import agriDurable from '../assets/images/Agriculture-durable.jpg'
import comEquitable from '../assets/images/commerce_equitable.png'
import iso22000 from '../assets/images/iso_22000.jpg'
import kasher from '../assets/images/kasher.webp'
import uebt from '../assets/images/uebt.png'
import sedex from '../assets/images/Sedex-SMETA.jpg'
import { Link, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Certificate = () => {

    const {t} = useTranslation('global')
    const params = useParams()
    const id = params.id

    const dataImgCertif = [agriBio,agriDurable,comEquitable,iso22000,uebt,kasher,sedex]

    const dataCertif = t('certification.data', {returnObjects : true})   

    const currentCert = dataCertif[id]

    const navig = (link)=>{
        if (link === "Agriculture Durable" || link === "Sustainable Agriculture") {
            window.open('https://www.ra.org', '_blank');
        }
    }
    

    const otherCertif = dataCertif.filter((item)=>item.title !== currentCert.title)
    return (
        <div>
            <div className="h-24"></div>
            <div className="w-[70%] mx-auto shadow-lg rounded-lg px-5 py-2">
                <div className='flex lg:flex-row flex-col gap-5 items-center relative'>
                {<img onClick={()=>navig(currentCert.title)} src={dataImgCertif[id]} className={`${(currentCert.title === "Agriculture Durable" || currentCert.title === "Sustainable Agriculture") && "cursor-pointer"} ${(currentCert.title === "FSSC 22000") ? 'h-14' : 'h-56'}`} alt="" />}
                <div className="text text-normal">
                    <p >{currentCert.type}</p>
                    <p className='font-normal text-3xl text-primary'>{currentCert.title}</p>
                   <p> {currentCert.description}</p>
                </div>
                </div>
            </div>
            <div className="h-12"></div>
            <div>
                <div className="title flex justify-center">
                    <p className='text-3xl'>{t('certification.title')}</p>
                </div>
                <div className="h-5"></div>
            </div>
            <div className="grid md:grid-cols-6 items-center grid-cols-3 gap-5 w-[90%] mx-auto transition-all">
                        {otherCertif.map((item, index)=>(
                            <Link to={item.link}>
                                <img src={dataImgCertif[item.img]} className={`${item.link === '/certif/3'?'h-16':'h-32'} mx-auto`} alt="" />
                            </Link>
                        ))}
                    </div>
                    <div className="h-12"></div>
        </div>
    );
};

export default Certificate;