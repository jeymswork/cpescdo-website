import React, { useState, useEffect, useRef } from 'react'
import Logo from '../assets/logo.png'
import { GiHamburgerMenu } from "react-icons/gi"
import { IoSearch } from "react-icons/io5"

const NavMain = () => {

    const [openNav, setOpenNav] = useState(false)
    const [currentDate, setCurrentDate] = useState(new Date())
    const [aboutOpen, setAboutOpen] = useState(false)

    const [selectedNav, setSelectedNav] = useState('HOME')

    useEffect(() => {
        const intervalId = setInterval(() => {
        setCurrentDate(new Date());
        }, 10000); // Update every 10 second

        return () => clearInterval(intervalId);
    }, []);

    const aboutRef = useRef()
    const navRef = useRef()

    const formattedDate = currentDate.toLocaleDateString('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });

    const formattedTime = currentDate.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    const handleClickOutside = (event) => {
        // Check if the click is outside the referenced element
        if (navRef.current && !navRef.current.contains(event.target)) {
            setOpenNav(false); // Close the dropdown or take any action
            return
        }
        if (aboutRef.current && !aboutRef.current.contains(event.target)) {
            setAboutOpen(false); // Close the dropdown or take any action
            return
        }
        
    };

    useEffect(() => {
        // Attach the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
        // Cleanup the event listener
        document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [])

  return (
    <div className='h-20 bg-white w-screen z-100 flex drop-shadow-lg justify-between items-center xl:px-10 2xl:px-32 3xl:px-40'>
        <div onClick={() => setSelectedNav ('HOME')} className='flex ml-6 sm:ml-10 md:ml-14 xl:ml-6 hover:cursor-pointer'>
            <img className='h-12 border-4 border-peesoGreen rounded-full' src={Logo} alt="CPESCDO" />
            <div className='flex flex-col justify-center ml-3 text-peesoGreen'>
                <p className='font-bold text-xs'>TAGUM CITY</p>
                <p className='font-bold -mt-2 text-3xl'>CPESCDO</p>
            </div>
        </div>
        <div className='xl:flex'>
            <button onClick={() => setOpenNav(true)} className={`${openNav? 'hidden' : 'flex xl:hidden'} bg-peesoGreen text-white h-20 w-20 flex items-center justify-center`}><GiHamburgerMenu size={40} /></button>
            <div ref={navRef} className={`${openNav ? 'flex w-3/4' : 'hidden xl:flex'} h-screen xl:h-20 xl:relative xl:w-full xl:flex-row z-50 bg-peesoGreen absolute top-0 right-0 drop-shadow-xl flex-col`}>
                <button onClick={() => setOpenNav(false)} className='self-end px-8 mt-7 xl:hidden text-white font-semibold text-2xl'>X</button>
                <div className='flex ml-6 mt-4 xl:hidden'>
                    <img className='h-12 border-4 border-peesoGreen rounded-full' src={Logo} alt="CPESCDO" />
                    <div className='flex flex-col justify-center ml-3 text-white'>
                        <p className='font-bold text-xs'>TAGUM CITY</p>
                        <p className='font-bold -mt-2 text-3xl'>CPESCDO</p>
                    </div>
                </div>
                <div className='flex flex-col xl:flex-row mt-6 xl:mt-0 w-full cursor-pointer'>
                    <button onClick={() => setSelectedNav('HOME')} className={`w-full ${selectedNav == 'HOME' ? 'bg-peesoGreenHover' : 'bg-peesoGreen'} text-white font-bold text-left pl-10 text-sm h-12 xl:h-20 xl:pl-0 xl:text-center xl:w-32 hover:bg-peesoGreenHover`}>HOME</button>
                    <div ref={aboutRef} className='relative'>
                        <button onClick={() => {setAboutOpen(!aboutOpen); setSelectedNav('ABOUT')}} className={`${selectedNav == 'ABOUT' ? 'bg-peesoGreenHover' : 'bg-peesoGreen'} w-full text-white font-bold text-left pl-10 text-sm h-12 xl:h-20 xl:pl-0 xl:text-center xl:w-32 xl:!px-5 hover:bg-peesoGreenHover`}>ABOUT CPESCDO</button>
                        <div className={`${aboutOpen ? 'flex' : 'hidden'} relative xl:absolute top-18 flex-col`}>
                            <button className='xl:hover:bg-peesoGreen xl:w-52 w-full bg-peesoGreen hover:bg-peesoGreenHover h-10 px-5 text-left pl-20 xl:pl-4 text-white font-bold text-sm xl:bg-peesoGreenHover'>WHAT IS CPESCDO?</button>
                            <button className='xl:hover:bg-peesoGreen xl:w-52 w-full bg-peesoGreen hover:bg-peesoGreenHover h-10 px-5 text-left pl-20 xl:pl-4 text-white font-bold text-sm xl:bg-peesoGreenHover'>LEGAL BASIS</button>
                            <button className='xl:hover:bg-peesoGreen xl:w-52 w-full bg-peesoGreen hover:bg-peesoGreenHover h-10 px-5 text-left pl-20 xl:pl-4 text-white font-bold text-sm xl:bg-peesoGreenHover'>VISION/MISION</button>
                            <button className='xl:hover:bg-peesoGreen xl:w-52 w-full bg-peesoGreen hover:bg-peesoGreenHover h-10 px-5 text-left pl-20 xl:pl-4 text-white font-bold text-sm xl:bg-peesoGreenHover'>OUR LOCATION</button>
                            <button className='xl:hover:bg-peesoGreen xl:w-52 w-full bg-peesoGreen hover:bg-peesoGreenHover h-10 px-5 text-left pl-20 xl:pl-4 text-white font-bold text-sm xl:bg-peesoGreenHover'>OUR PARTNERS</button>
                        </div>
                    </div>
                    
                    <button className={`w-full text-white font-bold text-left pl-10 text-sm h-12 xl:h-20 xl:pl-0 xl:text-center xl:w-32 hover:bg-peesoGreenHover`}>SERVICES</button>
                    <button className={`w-full text-white font-bold text-left pl-10 text-sm h-12 xl:h-20 xl:pl-0 xl:text-center xl:w-32 hover:bg-peesoGreenHover`}>UPDATES</button>
                    <button className={`w-full text-white font-bold text-left pl-10 text-sm h-12 xl:h-20 xl:pl-0 xl:text-center xl:w-32 hover:bg-peesoGreenHover`}>FAQS</button>
                    <button className={`w-full text-white font-bold text-left pl-10 text-sm h-12 xl:h-20 xl:pl-0 xl:text-center xl:w-32 hover:bg-peesoGreenHover`}>CONTACT US</button>
                </div>
            </div>
            <div className={`hidden px-4 2xl:px-10 3xl:px-16 xl:flex flex-col py-2`}>
                <div className='flex relative justify-center items-center px-2 w-52 h-8 border-2 border-peesoGreen rounded-xl'>
                    <IoSearch className='text-peesoGreen' size={20} />
                    <input className='w-full outline-none ml-2 text-sm text-peesoLightBlack' type="text" name="search" id="search" />
                </div>
                <p className='text-sm text-peesoLightBlack mt-2'>{formattedDate} | {formattedTime}</p>
            </div>
        </div>
    </div>
  )
}

export default NavMain