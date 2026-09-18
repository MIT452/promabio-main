import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const Navbar = () => {
    
    const [isScrolled, setIsScrolled] = useState(false)
    const [navOpen, setNavOpen] = useState(false)
    const [t, i18n] = useTranslation("global")
    const [actualLang, setActualLang] = useState('fr')

    // Functions
    useEffect(()=>{
        i18n.changeLanguage(actualLang)
    },[actualLang])
    const handleChangeLanguage = () =>{
        setActualLang(actualLang==="fr"?"en":'fr')
    }

        const handleScroll =()=>{
            setIsScrolled(window.scrollY>300);
            // const nav = document.getElementById('nav')
         }
     useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    const navContent = [
        {
            title : "navbar.0",
            link:"/"
        },
        {
            title : "navbar.1",
            link:"/us"
        },
        {
            title : "navbar.2",
            link:"/product"
        },
        {
            title : "navbar.3",
            link:"/works"
        },
        {
            title : "navbar.4",
            link:"/commitment"
        },
        {
            title : "navbar.5",
            link:"/certif"
        },
        {
            title : "navbar.6",
            link:"#contact"
        },
    ]

    // My functions

    const handleAnchor = (title)=>{
        console.log(title);
        
        if(title === "navbar.6"){
            window.scrollTo(0, document.body.scrollHeight);
            
        }
    }

  

    return (
        <nav id='top' className=''>
            <ul className={`${isScrolled ? 'bg-primary text-white ' : 'bg-white/90'} font-medium backdrop-blur-md transition-all duration-200 py-4 flex justify-between px-3 fixed z-50 w-full items-center`} id='nav'>
                <li className={`${isScrolled && "bg-white/90"} p-1 rounded-sm`}>
                <Link to="/">
                <img className={`lg:h-10 h-8 transition-all duration-200`} src='logo.png' alt='Languages logo' />
                </Link>
                </li>
                <ul className={`md:flex md:px-0 px-3 lg:text-normal nav md:bg-transparent ${isScrolled ? 'bg-primary text-white' : 'bg-white/90'} transition-all py-1 md:static ${navOpen ? 'right-0' : '-right-44'} top-20  absolute`}>
                {navContent.map((item, index)=>(
                            <Link onClick={()=>handleAnchor(item.title)} to={item.link}><li key={index} className={`py-2 md:px-2 transition-all lg:px-3 md:py-0 h-fit ${isScrolled ?'hover:font-semibold' :'hover:text-primary'}`}>{t(item.title)}</li></Link>
                        ))}
                </ul>
                <li>
                    <div className='flex items-center gap-2'>
                    <img className=' h-6 w-8' onClick={()=>handleChangeLanguage("en")} src={`images/${actualLang === "fr"?"en.png":"fr.png"}`} alt='Logo' />
                    <FontAwesomeIcon onClick={()=>setNavOpen(!navOpen)} className={` cursor-pointer md:hidden h-8 ${isScrolled ? 'text-white' : 'text-primary'}`} icon={faBars}/>
                    </div>
                </li>
                {/* <li className={`${isScrolled?'p-0': 'p-3 bg-white/70'}  parent-logo rounded-b-xl absolute top-0 left-[50%] -translate-x-[50%]`}><img className={`${isScrolled ?'h-[40px]':'h-[15vh]'} origin-top  logo-prom transition-all duration-200`} src='logo.png' alt='Languages logo' /></li> */}
                {/* <li >
                    <div className='myMenu group'>
                    <FontAwesomeIcon icon={faBars} className={`${isScrolled?'text-primary':'text-white'} cursor-pointer burger`} size="2x" />
                    <ul className="menu-content bg-white/90 absolute group-hover:visible group-hover:opacity-100 invisible opacity-0 right-3 rounded-sm ">
                       
                    </ul>
                    </div>
                </li> */}
            </ul>
        </nav>
    );
};

export default Navbar;