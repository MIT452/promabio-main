import React, { useEffect } from 'react';

const Banner = ({title, img}) => {

    useEffect(()=>{
            document.body.scrollTop = 0;
            document.documentElement.scrollTop = 0;
        },[])

    return (
        <header>
            <div className='h-[70vh] flex items-end justify-center' style={{background:`url(${img})`,backgroundPosition:'center', backgroundSize:"cover", backgroundRepeat:'no-repeat'}}>
                <div className='relative banner-title my-3'>
                <span className=' font-stencil text-white text-title relative pb-1'>{title}</span>
                </div>
            </div>
        </header>
    );
};

export default Banner;