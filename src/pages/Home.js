import React, { useEffect } from 'react';
import Header from '../components/Header'
import Quote from '../components/home/Quote';
import About from '../components/home/About';
import Gallery from '../components/home/Gallery';
import Articles from '../components/home/Articles';

import metier from '../assets/images/carrousel/metier.jpg'
import us from '../assets/images/carrousel/image-5.jpg'
import produit from '../assets/images/carrousel/image-3.jpg'
import engagement from '../assets/images/carrousel/image-1.jpg'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const dataHome = [
    {
        to: '/us',
        img: us,
    },
    {
        to: '/product',
        img: produit,
    },
    {
        to: '/work',
        img: metier,
    },
    {
        to: '/comitment',
        img: engagement,
    },
]

const Home = () => {
    const { t } = useTranslation('global')

    // Récupération des sections dynamiquement
    const sections = t('home.section', { returnObjects: true });

    useEffect(() => {
        console.log(sections);
    }, [sections])

    return (
        <div>
            <Header />
            <Quote />
            {Object.keys(sections).map((key, index) => (
                <About index={index} title={sections[key].title} content={sections[key].content} bg={sections[key].bg} link={dataHome[index].to} img={dataHome[index].img} />
            ))}

            <Gallery />
            {/* Articles sections */}
            <h1 className='text-5xl text-center'>{t('home.articles.title')}</h1>
            <div className='articles my-4 grid md:grid-cols-2 grid-cols-1 md:w-[60%] w-[90%] mx-auto'>
                <Articles />
                <Articles />
            </div>
            <div className='flex items-center justify-center'>
                <button className='text-normal text-primary px-2 py-1 border-2 border-primary hover:bg-primary hover:text-white transition-all'><Link to='/articles'> + {t('more')}</Link></button>
            </div>
            <div className="h-10"></div>
        </div>
    );
};

export default Home;