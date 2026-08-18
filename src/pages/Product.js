import React from 'react';
import Banner from '../components/Banner';
import img from "../assets/images/carrousel/image-3.jpg"

// import bgSect2 from "../assets/images/vanilla-stick.jpg"


// import imgFecond from "../assets/images/009_Fecondation_fait_par_la_main.jpg"
// import imgRecolte from "../assets/images/010_Récolte_de_vanille.jpg"

import imgVannRouge from "../assets/images/012_Vanille_rouge.jpeg"

import imgGourmet from "../assets/images/011_Gourmet.jpeg"

import imgRougeUs from "../assets/images/013_Rouge_US.jpeg"
import imgRougeEu from "../assets/images/rouge-europe.jpg"
import imgRougeCuts from "../assets/images/014_Cuts.jpeg"
import imgRougeTk from "../assets/images/tk-min.jpeg"

import imgVanillePoudre from '../assets/images/015_Poudre.jpeg'
import imgVanilleGraine from '../assets/images/016_Graine.jpeg'
// import imgVanilleSouple from '../assets/images/vanille_souple.jpeg'
// import imgOrch from "../assets/images/008_Orchidé_liane_scante.jpg"
// import DetailUs from '../components/us/DetailUs';
import { useNavigate } from 'react-router-dom';

// Certifications
// import agriBio from '../assets/images/Agriculture-biologique.png'
// import agriDurable from '../assets/images/Agriculture-durable.jpg'
// import comEquitable from '../assets/images/commerce_equitable.png'
// import iso22000 from '../assets/images/iso_22000.png'
// import kasher from '../assets/images/kasher.webp'
// import sedex from '../assets/images/Sedex-SMETA.jpg'
import { useTranslation } from 'react-i18next';


const Product = () => {

    const {t} = useTranslation('global')

    const card = t('product.cardProd',{returnObjects:true})
    const cardOther = t('product.cardOther.product',{returnObjects:true})
    const vanilleGourmet = t('product.vanilleGourmet',{returnObjects:true})


    // My datas
    const dataCard = [imgRougeTk,imgRougeEu,imgRougeUs]

    const dataOtherProd = [imgRougeCuts,imgVanillePoudre,imgVanilleGraine]


    // const dataCertif = [
    //     {
    //         img : agriBio,
    //         link : "/certif/0"
    //     },
    //     {
    //         img : agriDurable,
    //         link : "/certif/1"
    //     },
    //     {
    //         img : comEquitable,
    //         link : "/certif/2"
    //     },
    //     {
    //         img : iso22000,
    //         link : "/certif/3"
    //     },
    //     {
    //         img : kasher,
    //         link : "/certif/4"
    //     },
    //     {
    //         img : sedex,
    //         link : "/certif/5"
    //     },
    // ]
    // My function
    const navigate = useNavigate()

    const handleNavigate = (to) => {
        navigate(to);
    }

    return (
        <div>
            <Banner title={t('navbar.2')} img={img} />
            {/* Section 1 : Vanille rouge*/}
            {/* spacing start */}
            <div className="h-16"></div>

            <div className='sect-vanille-rouge'>
            <div className='flex px-4'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'>{t('product.title')}</h2>
                </div>
                <div className="h-6"></div>
                <div className='description'>
                    <div className='md:flex gap-4 mx-2'>
                        <div className='text md:flex justify-end items-center'>
                            <div className='text-box md:border-l-2 md:border-secondary h-fit md:w-[80%] px-4'>
                                <div className="title">
                                    <p className='text-titleMd text-primary font-semibold'>{t('product.vanilleGourmet.title')}</p>
                                </div>
                                <div className="text-content">
                                    <p className=' text-normal'>{t('product.vanilleGourmet.description')}</p>
                                    <p>
                                        <button onClick={() => handleNavigate("gourmet-0")} className='hover:text-white hover:bg-primary transition-all border-2 border-primary my-3 px-4 md:text-normal '>Voir les détails</button>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="relative img group p-2">
                            <img src={imgVannRouge} className='' alt="" />
                            <div className="info bg-primary/80 text-normal opacity-0 group-hover:opacity-100 text-white py-2 px-1 absolute bottom-0 left-0 right-0 transition-all">
                                <p>{t('product.length')} : {vanilleGourmet.length}</p>
                                <p>{t('product.humidity')} : {vanilleGourmet.humidity}</p>
                                <p>{t('product.vanillin')} : {vanilleGourmet.vanillin}</p>
                                <p>Aspect : {vanilleGourmet.aspect.map((it, id) => (
                                    <span>{it} {id < vanilleGourmet.aspect.length - 1 && ' | '}</span>
                                ))}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Spacing */}
                <div className="h-10"></div>
                <div className="product grid grid-cols-3 gap-5 w-[90%] mx-auto">
                    {card.map((item, index) => (
                        <div className='relative cursor-pointer group overflow-hidden' onClick={() => handleNavigate(item.to)} key={index}>
                            <div className="title absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                                <h3 className='text-titleMd font-medium z-10 text-white text-nowrap'>{item.title}</h3>
                            </div>
                            <img src={dataCard[index]} className='transition-all duration-200 group-hover:scale-105 ' alt="" />
                            <div className="info bg-primary/80 text-normal opacity-0 group-hover:opacity-100 text-white py-2 px-1 absolute bottom-0 left-0 right-0 transition-all">
                                <p>{t('product.length')} : {item.length}</p>
                                <p>{t('product.humidity')} : {item.humidity}</p>
                                <p>{t('product.vanillin')} : {item.vanillin}</p>
                                <p>Aspect : {item.aspect.map((it, id) => (
                                    <span>{it} {id < item.aspect.length - 1 && ' | '}</span>
                                ))}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Section 2 : vanille gourmet */}

            {/* Spacing */}
            <div className="h-12"></div>

            <div id='vanille-gourmet' className='bg-primary py-5 min-h-[80vh] flex items-center'>
                <div className='description w-[80%] mx-auto '>
                    <div className='md:flex gap-4 mx-2 items-center'>
                        <div className='text flex justify-center items-center min:h-[80vh]'>
                            <div className='text-box text-white h-fit w-[80%] px-4  border-l-2 border-l-white'>
                                <div className="title">
                                    <p className='text-titleMd'>{t('product.vanilleRouge.title')}</p>
                                </div>
                                <div className="text-content">
                                    <p className=' md:text-normal text-justify'>{t('product.vanilleRouge.description')}</p>

                                </div>
                            </div>
                        </div>
                        <div className="img flex justify-start">
                            <img src={imgGourmet} className='max-h-[900px]' alt="" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 3 : Autres produits*/}
            {/* Spacing */}
            <div className="h-10"></div>
            <div>
                <div className='flex px-4'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'>{t('product.cardOther.title')}</h2>
                </div>
                <div className="h-6"></div>

                <div className="product grid grid-cols-3 gap-5 w-[90%] mx-auto">
                    {cardOther.map((item, index) => (
                        <div onClick={() => handleNavigate(item.to)} className='relative cursor-pointer group overflow-hidden max-h-[300px]' key={index}>
                            <div className="title absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                                <h3 className='text-titleMd font-medium z-10 px-2 rounded-md text-nowrap bg-white/70'>{item.title}</h3>
                            </div>
                            <img src={dataOtherProd[index]} className='transition-all h-full w-full duration-200 group-hover:scale-105 ' alt="" />
                        </div>
                    ))}
                </div>

            </div>
            {/* Section 4 : processus */}
            {/* spacing */}
            {/* <div className="h-10"></div>
            <div>
                <div className='flex px-4'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'>Quelques processus</h2>
                </div>
                <div className="h-6"></div>
                <div style={{ background: `url(${bgSect2})`, backgroundPosition: 'right', backgroundAttachment: 'fixed', backgroundSize: 'cover' }}>
                    <div className="h-16"></div>
                    {dataProc.map((item, index) => (
                        <div>
                            <div className={`md:flex min-h-[60vh] ${index % 2 !== 0 && 'flex-row-reverse'}`}>
                                <div className='flex-1 p-8 bg-white/30'>
                                    <h2 className='text-titleMd font-semibold text-secondary'>{item.title}</h2>
                                    <p className='text-normal '>{item.content}</p>
                                </div>
                                <div style={{ background: `url(${item.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }} className='flex-1 md:w-auto md:h-auto w-[full] md:mx-0 mx-4 h-[300px]'>
                                </div>
                            </div>
                            <div className="h-16"></div>
                        </div>
                    ))}

                </div>
            </div> */}
     <div className="h-10"></div>
            {/* Certifications */}

            {/* <div className="h-10"></div>
            <div className='flex flex-col gap-5 min-h-[50vh] items-center'>
                <div className='flex justify-center'>
                    <h2 className='md:text-4xl text-2xl w-fit font-normal text-primary'>{t('product.certification')}</h2>
                </div>
                <div className="h-5"></div>
                    <div className="grid md:grid-cols-6 grid-cols-3 gap-5 w-[90%] mx-auto transition-all">
                        {dataCertif.map((item, index)=>(
                            <Link to={item.link}>
                                <img src={item.img} className='h-32 mx-auto' alt="" />
                            </Link>
                        ))}
                    </div>
                    <div className="h-12"></div>
            </div> */}

        </div>
    );
};

export default Product;