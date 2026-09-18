import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import imgRougeUs from "../assets/images/013_Rouge_US.jpeg"
import imgRougeCuts from "../assets/images/014_Cuts.jpeg"
import imgRougeEu from "../assets/images/rouge-europe.jpg"
import imgRougeTk from "../assets/images/tk-min.jpeg"
import imgGourmet from "../assets/images/011_Gourmet.jpeg"

import imgVanillePoudre from '../assets/images/015_Poudre.jpeg'
import imgVanilleGraine from '../assets/images/016_Graine.jpeg'
import { useTranslation } from 'react-i18next';
// import imgOrch from "../assets/images/008_Orchidé_liane_scante.jpg"

const SingleProd = () => {

    const navigate = useNavigate()
    const {t} = useTranslation('global')

    const rouge = t('product.cardProd', {returnObjects : true})
    const gourmet = t('product.vanilleGourmet', {returnObjects : true})
    const other = t('product.cardOther.product', {returnObjects : true})

    const handleNavigate = (to)=>{
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        navigate(to);
    }


    // Back to top
    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        console.log(other);
        
    }, [])

    const params = useParams()
    const id = params.id

    // const imgRouge =
    
    const dataProd = {
        'rouge': {
            data : rouge,
            img : [imgRougeTk, imgRougeEu, imgRougeUs]
        },
        'gourmet': {
            data : gourmet,
            img : imgGourmet
        },
        'other': {
            data : other,
            img : [imgRougeCuts,imgVanillePoudre, imgVanilleGraine]
        }
    }
    // Séparer le liens en tableau - ex : abc-1 = [abc, 1]
    const key = id.split('-')
    // Store variable
    const categorie = key[0]
    const idProd = key[1]

    const product = categorie === 'gourmet' ? dataProd[categorie]['data']: dataProd[categorie]["data"][idProd]
    const imgProd = categorie === 'gourmet' ? dataProd[categorie]['img'] : dataProd[categorie]['img'][idProd]
    // Si la catégorie est gourmet affiché en récommandation vanille rouge
    const products = categorie === 'gourmet' ? dataProd['rouge']["data"] : dataProd[categorie]['data']
    useEffect(() => (console.log(product)
    ), [])
    return (
        <div>
            <div className="h-24"></div>

            {/* Single product */}
            <div>
                <div className={`flex h-[60vh] gap-8 w-[90%] mx-auto`}>
                    <div className='flex-1'>
                        <img src={imgProd   } className='h-full w-full' alt="" />
                    </div>
                    <div className='flex-1 p-8 bg-white/30'>
                        <h2 className='text-titleMd font-semibold text-secondary'>{product.title}</h2>
                        <p className='text-normal font-medium'>Description : <span className='text-base text-gray-600'>{product.description}</span></p>
                        {product.length && <div className='specific-info'>
                            <p className='text-normal font-medium'>Longueur : <span className='text-base text-gray-600'>{product.length}</span></p>
                            <p className='text-normal font-medium'>Humidité : <span className='text-base text-gray-600'>{product.humidity}</span></p>
                            <p className='text-normal font-medium'>Vanilline : <span className='text-base text-gray-600'>{product.vanillin}</span></p>
                            <p className='text-normal font-medium'>Aspect : {product.aspect.map((item, index) => (<span key={index} className='text-base text-gray-600'>{item} {index < product.aspect.length - 1 && ' | '}</span>))}</p>
                        </div>}
                    </div>
                </div>
            </div>
            <div className="h-16"></div>
            <div>
                <div className='flex px-4'>
                    <h2 className='text-3xl border-l-2 px-3 border-secondary w-fit mx-2'>Produits simulaire</h2>
                </div>
                <div className="h-10"></div>
                <div className="product grid grid-cols-3 gap-5 w-[90%] mx-auto">
                    {products.map((item, index) => {

                        return item.title !== product.title && (
                            <div onClick={()=>handleNavigate(item.to)} className='relative group overflow-hidden' key={index}>
                                <div className="title absolute left-[50%] top-[50%] -translate-x-[50%] -translate-y-[50%]">
                                    <h3 className='text-titleMd font-medium z-10 text-white text-nowrap'>{item.title}</h3>
                                </div>
                                <img src={dataProd[categorie]["img"][index]} className='transition-all duration-200 group-hover:scale-105 ' alt="" />
                            </div>
                        )
                    })}
                </div>
                <div className="h-16"></div>
            </div>
        </div>
    );
};

export default SingleProd;