import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init()

const DetailUs = ({img, title ,content, index}) => {
    const isPair = index%2 === 0
    return (
        <div className={`md:flex flex-wrap items-center justify-between gap-7 w-[80vw] my-10 mx-auto ${index%2 !== 0 && 'flex-row-reverse'}`}>
            <div className="image flex-1 overflow-hidden h-[300px]" style={{background:` url(${img}) center`, backgroundSize:'cover'}} data-aos={`${index>0 && "zoom-in"}`} data-aos-duration="1000">
            </div>
            <div className="text-content flex-1 lg:text-normal flex flex-col justify-center items-center" data-aos-duration="1000"   data-aos={`${index>0 ? isPair ? "fade-left":"fade-right":""}`}>
                <div>
                <h3 className='font-semibold text-3xl text-center text-primary font-stencil mb-3'>{title}</h3>
                <p className='text-justify'>{content}</p>
                </div>
            </div>
        </div>
    );
};

export default DetailUs;