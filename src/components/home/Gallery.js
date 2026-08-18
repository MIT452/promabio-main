import React from 'react';
import img1 from '../../assets/images/carrousel/1640070842-587fd3fd-be35-4abb-8a5c-b7ed47d855b9.jpg'
import img2 from '../../assets/images/carrousel/travailleurs.jpg'
import img3 from '../../assets/images/carrousel/1640070843-3afbe722-25da-4517-b832-3f05000f18f8.jpg'
import img4 from '../../assets/images/carrousel/1640949445-e6b9ad71-39db-4929-8ed3-3fc4ec0baae3.jpg'
import img5 from '../../assets/images/carrousel/metier.jpg'
import img6 from '../../assets/images/carrousel/1641100093-4209060b-c8a7-493c-97f3-c54a695625b6.JPG'
import img7 from '../../assets/images/carrousel/image-1.jpg'
import img8 from '../../assets/images/carrousel/image-3.jpg'
const Gallery = () => {
    return (
        <div className='grid w-[70%] mx-auto grid-cols-4 gap-3 my-9'>
            <div className='overflow-hidden'>
                <img src={img1} className='hover:scale-110 h-full transition-all duration-150 ease-in' alt="" />
            </div>
            <div className='overflow-hidden'>
                <img src={img2} className='hover:scale-110  h-full transition-all duration-150 ease-in' alt="" />
            </div>
            <div className='overflow-hidden'>
                <img src={img3} className='hover:scale-110  h-full transition-all duration-150 ease-in' alt="" />
            </div>
            <div className='overflow-hidden'>
                <img src={img4} className='hover:scale-110  h-full transition-all duration-150 ease-in' alt="" />
            </div>
            <div className='overflow-hidden'>
                <img src={img5} className='hover:scale-110  h-full transition-all duration-150 ease-in' alt="" />
            </div>
            <div className='overflow-hidden'>
                <img src={img6} className='hover:scale-110  h-full transition-all duration-150 ease-in' alt="" />
            </div>
            <div className='overflow-hidden'>
                <img src={img7} className='hover:scale-110  h-full transition-all duration-150 ease-in' alt="" />
            </div>
            <div className='overflow-hidden'>
                <img src={img8} className='hover:scale-110  h-full transition-all duration-150 ease-in' alt="" />
            </div>
            
        </div>
    );
};

export default Gallery;