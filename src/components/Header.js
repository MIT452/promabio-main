import React, { useEffect } from 'react';
import Carousel from './Carousel';


const Header = () => {
     useEffect(()=>{
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            },[])
    return (
        <>
         <Carousel/>   
        </>
    );
};

export default Header;