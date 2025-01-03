import React from 'react'
import Logo from './assets/logo.png'
import TagumLogo from './assets/tagumlogo.png'
import WeAreTagum from './assets/wearetagum.png'

const Footer = () => {
  return (
    <div className='w-screen mt-6 flex flex-col md:flex-row md:items-center md:justify-between md:px-10 lg:px-20 xl:px-44 2xl:px-[500px]'>
        <div className='flex-col items-center'>
            <div className='flex justify-center xl:justify-start'>
                <img className='h-10 md:h-14 xl:h-16 2xl:h-20 border-4 border-peesoGreen rounded-full' src={Logo} alt="CPESCDO" />
                <div className='flex flex-col justify-center ml-3 text-peesoGreen'>
                    <p className='font-bold text-xs xl:text-sm'>TAGUM CITY</p>
                    <p className='font-bold -mt-2 text-lg xl:text-xl'>CPESCDO</p>
                </div>
            </div>
            <div className='flex mt-4 justify-center'>
                <img className='h-12 md:h-16 xl:h-20 2xl:h-22' src={TagumLogo} alt="Tagum City" />
                <img className='h-12 md:h-16 xl:h-20 2xl:h-22' src={WeAreTagum} alt="We Are Tagum" />
            </div>
        </div>
        <div className='flex flex-col bg-peesoGreen rounded-xl mt-3 py-3 xl:ml-2 px-1 xl:px-4'>
            <p className='text-white font-bold text-sm sm:text-lg xl:text-xl 2xl:text-2xl mt-2 text-center'>Help us improve CPESCDO Website!</p>
            <button className='text-white 2xl:text-lg font-bold text-xs mx-auto px-8 py-1 bg-peesoLightBlack rounded-lg mt-2'>ANSWER SURVEY HERE</button>
            <div className='mt-3 text-white text-[11px] sm:text-xs 2xl:text-sm flex flex-col items-center text-center'>
                <p>City Government of Tagum</p>
                <p>Office of the City Public Employment Services and Capability Development Office</p>
                <p>2nd Floor, City Hall, J.V Ayala Ave., Apokon, Tagum City</p>
                <p>Davao del Norte, Philippines, 8100</p>
            </div>
            <p className='mt-3 text-white text-xs sm:text-sm 2xl:text-lg text-center font-bold'>© 2024 CPESCDO WEBSITE</p>
        </div>
    </div>
  )
}

export default Footer