import React from 'react';
import Navbar from './Navbar'
import Footer from './Footer';
import { Outlet } from 'react-router-dom';
const FrontLayout = () => {
    return (
        <>
            <Navbar/>
                <Outlet/>
            <Footer/>
        </>
    );
};

export default FrontLayout;