import React from 'react';
import img from '../../assets/images/carrousel/image-5.jpg'

const Articles = () => {
    return (
        <div className='rounded-lg overflow-hidden w-[90%] mx-auto border shadow-md'> 
            <img src={img} alt="" />
            <p className='description text-center py-2'>
                My description
            </p>
        </div>
    );
};

export default Articles;