import React from 'react';
import { useTranslation } from 'react-i18next';

const Quote = () => {
        const [t, i18n] = useTranslation("global")
    return (
        <div className='my-10'>
            <div className='md:w-[60vw] w-[70vw] mx-auto relative'>
                <div className='citation-box bg-[#f7f0e6] text-[2.5vw] font-stencil text-4xl py-[1.5em] px-[1.2em] leading-10 text-center'>
                <div className='absolute -rotate-12 lg:-top-10 lg:-left-10 -top-8 -left-8'>
                    <img src='images/flower.png' className='lg:h-32 h-20 transition-all' alt=''/>
                </div>
                <span className='text-primary'>
                “{t('home.citation')}”
                </span>
                </div>
            </div>
        </div>
    );
};

export default Quote;