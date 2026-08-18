import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
// ..
AOS.init()
const About = ({ title, content, bg, link, img, index }) => {
    const {t} = useTranslation('global')
    const condition = index % 2 !== 0
    return (
        <div>
            <div className="h-5"></div>
        <div className={`my-3 md:flex ${condition && 'flex-row-reverse'} w-[90%] mx-auto`}>
            <div className='image-part flex-1 flex justify-center' data-aos='zoom-in' data-aos-duration='1000'>
                <img src={img} className='max-h-[300px]' alt='my images' />
            </div>
            <div className='text-part overflow-hidden flex flex-1 items-center justify-center relative' >
                <div className="waterdrop">
                    <p className='text-[10em] text-primary opacity-10 absolute top-0 left-0 -z-10'>{bg}</p>
                </div>
                <div className="content max-w-[85%]" data-aos-duration="1000" data-aos={condition ? `fade-left` : 'fade-right'}>
                    <h1 className='text-4xl about-title relative font-normal'>{title}</h1>
                    <p className='home-about text-normal'>{content}</p>
                    <p className='text-right'>
                      <button className='btn-primary hover:bg-transparent hover:text-primary border-2 border-primary transition-all'> <Link to={link}>{t('more')}</Link></button>
                    </p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default About;