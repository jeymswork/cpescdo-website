import React, { useState } from 'react'
import Cover from '../assets/hero-cover.png'
import { TiArrowDownThick } from "react-icons/ti"
import Employment from '../assets/employment.png'
import { MdKeyboardArrowRight } from "react-icons/md"
import NewsCover from '../assets/news-cover.png'
import Phone from '../assets/phone.png'
import Footer from '../Footer'
import TulongSuporta from '../assets/tulongsuporta.png'
import ProjectUpdate from '../assets/projectupdate.png'

const Home = () => {

  const [feature, setFeature] = useState({
    title: '160 jobseekers hired in Pre-Fiesta Job Fair 2024',
    storyDate: 'December 10, 2024',
    content: 'In celebration of the Christ the King Parochial Fiesta in Tagum City, job seekers gathered at GMall Tagum for a special job fair, where 160 individuals successfully secured employment opportunities.',
    photoFileName: '160jobseekers.jpg'
  })

  const [cardMargin, setCardMargin] = useState('ml-0')
  const [cardActive, setCardActive] = useState(2)

  return (
    <div className='flex h-[cacl(100vh-80px)] w-screen flex-col scrollbar-thin'>

        <div className='flex w-screen justify-between h-1/2 xl:h-5/6 2xl:px-32'>
            <div className='w-1/2 md:w-3/4 lg:w-1/2 mr-5 ml-6 sm:ml-8 md:ml-14 mt-4 flex flex-col'>
                <p className='font-bold text-peesoGreen text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-7xl 2xl:text-8xl mt-1 2xl:mt-14 3xl:mt-24 leading-none'>YOUR FUTURE WITHIN REACH!</p>
                <p className='text-peesoLightBlack font-bold text-sm sm:text-base md:text-lg lg:text-3xl 2xl:text-4xl mt-2 lg:mt-10 xl:mt-10 2xl:mt-14'>Welcome to CPESCDO Website!</p>
                <p className='text-peesoLightBlack text-xs sm:text-sm 2xl:text-base xl:pr-36 mt-2 2xl:mt-4'>This is City Public Employment Services and Capability Development Office (CPESCDO), the leading arm of Tagum’s local government dedicated to connecting you with decent jobs, advancing your career, and providing skill-enhancement training. Together, let’s bring your future within reach!</p>
                <button className='flex text-xs mb-2 sm:text-base lg:text-lg xl:text-xl 2xl:text-2xl text-peesoLightBlack items-center mt-2 sm:mt-2 md:mt-2 lg:mt-4 xl:mt-6 2xl:mt-20'><p>KNOW US MORE</p><TiArrowDownThick className='text-white bg-peesoGreen rounded-full p-0.5 ml-2 xl:ml-4 h-4 w-4 sm:h-6 sm:w-6 lg:h-8 lg:w-8 2xl:w-10 2xl:h-10'size={20}/></button>
            </div>
            <div className='h-full w-1/2 flex justify-end'>
                <img className='h-80 lg:h-96 xl:h-[450px] 2xl:h-[700px] w-auto mr-4' src={Cover} alt="Cover" />
            </div>
        </div>

        <div className='w-screen bg-peesoGreen flex items-center py-4 flex-col text-white relative'>
          <p className='text-xl sm:text-2xl md:text-3xl font-bold mt-2 xl:mt-4 xl:mb-4 2xl:mt-8 2xl:mb-8'>WHAT WE OFFER</p>
          <div className={`${cardMargin} transition-all duration-500 ease-in-out flex w-[300vw] xl:w-screen 2xl:px-40 max-h-screen overflow-hidden space-x-7 md:space-x-10 lg:space-x-20 lg:pb-20 px-20 mt-3 lg:mt-20 xl:mt-1 items-center`}>

            <div className='flex flex-col mt-3 w-full items-center'>
              <p className='text-sm sm:text-lg font-bold'>EMPLOYMENT</p>
              <div className='flex flex-col pb-4 w-full mt-8 bg-white rounded-lg'>
                <img className={`rounded-lg sca ${cardActive == 1 ? 'scale-105' : 'scale-100'}`} src={Employment} alt="employment" />
                <p className='text-peesoGreen font-bold text-lg text-center mt-4 leading-none xl:h-10'>CONNECTING YOU TO DECENT JOBS</p>
              </div>
            </div>
            <div className='flex flex-col mt-3 w-full items-center'>
              <p className='text-sm sm:text-lg font-bold'>CAREER</p>
              <div className='flex flex-col pb-4 w-full mt-8 bg-white rounded-lg'>
                <img className={`rounded-lg ${cardActive == 2 ? 'scale-110 xl:scale-100' : 'scale-100'}`} src={Employment} alt="employment" />
                <p className='text-peesoGreen font-bold text-lg text-center mt-4 leading-none xl:h-10'>GUIDING YOUR CAREER JOURNEY</p>
              </div>
            </div>
            <div className='flex flex-col mt-3 w-full items-center'>
              <p className='text-sm sm:text-lg font-bold'>TRAINING</p>
              <div className='flex flex-col pb-4 w-full mt-8 bg-white rounded-lg'>
                <img className={`rounded-lg ${cardActive == 3 ? 'scale-105' : 'scale-100'}`} src={Employment} alt="employment" />
                <p className='text-peesoGreen font-bold text-lg text-center mt-4 leading-none xl:h-10'>ENHANCING YOUR SKILLS FOR GROWTH</p>
              </div>
            </div>
          </div>
          <div className={`absolute bottom-20 flex space-x-2 xl:hidden`}>
              <button className={`hover:text-xl ${cardActive == 1 ? 'text-xl' : ''}`} onClick={() => {setCardMargin('ml-[180vw]'); setCardActive(1)}}>O</button>
              <button className={`hover:text-xl ${cardActive == 2 ? 'text-xl' : ''}`} onClick={() => {setCardMargin('ml-0'); setCardActive(2)}}>O</button>
              <button className={`hover:text-xl ${cardActive == 3 ? 'text-xl' : ''}`} onClick={() => {setCardMargin('ml-[-180vw]'); setCardActive(3)}}>O</button>
            </div>
        </div>

        <div className='flex py-4'>
          <div className='flex flex-col w-screen px-8 lg:px-20 xl:px-60 mt-5 items-center xl:flex-row xl:items-start'>
            <div className='flex flex-col items-center xl:items-start'>
              <p className='text-white flex items-center bg-peesoGreen px-10 font-bold mx-auto xl:mx-0 rounded-xl text-center xl:text-left xl:px-2 xl:pr-6 2xl:h-8'>FEATURE STORY:</p>
              <p className='text-peesoLightBlack font-bold text-2xl md:text-3xl text-center mt-3 leading-tight xl:text-left xl:pr-24 xl:text-4xl 2xl:text-5xl 2xl:mt-6'>{feature.title}</p>
              <p className='text-peesoLightBlack text-xs md:text-sm text-center mt-1 xl:text-left 2xl:text-base 2xl:mt-5'>{feature.storyDate}</p>
              <p className='text-peesoLightBlack text-sm 2xl:text-base text-center mt-3 xl:text-left xl:pr-44 xl:mt-10 2xl:mt-8'>{feature.content}</p>
              <button className='xl:flex text-peesoGreen text-lg mt-4 items-center hidden 2xl:text-2xl 2xl:mt-14'><p className='font-bold underline mr-2'>READ FULL</p><MdKeyboardArrowRight className='bg-peesoGreen text-white rounded-full' size={20}/></button>
            </div>
            <img className='rounded-xl mt-2 xl:h-80 2xl:h-96' src={NewsCover} alt="news" />
            <button className='flex xl:hidden text-peesoGreen text-lg mt-4 items-center'><p className='font-bold underline mr-2'>READ FULL</p><MdKeyboardArrowRight className='bg-peesoGreen text-white rounded-full' size={20}/></button>
          </div>
        </div>

        <div className='bg-peesoLightBackground mx-8 lg:mx-20 xl:mx-48 xl:flex-row xl:items-center xl:justify-between rounded-lg mt-4 flex flex-col'>
          <div className='m-5 bg-white flex flex-col rounded-lg space-y-4 px-10 pb-5 xl:ml-32 xl:w-1/2'>
            <p className='text-xl 2xl:text-2xl font-bold text-center mb-4 text-[#666666] my-3'>MOST REQUESTED</p>
            <p className='flex items-center space-x-5 2xl:text-lg'><MdKeyboardArrowRight className='bg-peesoGreen text-white rounded-full flex-shrink-0' size={25}/><button className='underline text-peesoLightBlack text-left'>Slaughtering Opertaion Registration Form</button></p>
            <p className='flex items-center space-x-5 2xl:text-lg'><MdKeyboardArrowRight className='bg-peesoGreen text-white rounded-full flex-shrink-0' size={25}/><button className='underline text-peesoLightBlack text-left'>SPES Program Manual</button></p>
            <p className='flex items-center space-x-5 2xl:text-lg'><MdKeyboardArrowRight className='bg-peesoGreen text-white rounded-full flex-shrink-0' size={25}/><button className='underline text-peesoLightBlack text-left'>Skills Training Registration Form</button></p>
          </div>
          <div className=' mx-8 rounded-lg flex flex-col pb-4 xl:w-1/2 xl:mr-32'>
            <p className='text-xl 2xl:text-2xl font-bold text-center mb-4 text-[#666666] my-3'>WHAT'S NEW IN CPESCDO</p>
            <div className='flex justify-between space-x-2 sm:space-x-4 md:space-x-6 mx-auto'>
              <img className='h-24 2xl:h-36 cursor-pointer' src={TulongSuporta} alt="Tulong Suporta" />
              <img className='h-24 2xl:h-36 cursor-pointer' src={ProjectUpdate} alt="Project Update" />
            </div>
            <button className='text-white bg-peesoGreen rounded-lg h-6 2xl:h-10 2xl:mt-6 font-bold mx-auto px-8 mt-4'>VIEW PROGRAMS</button>
          </div>
        </div>

        <div className='flex items-center mt-6 xl:mt-10 justify-between mx-auto space-x-10 md:space-x-14 lg:space-x-20 xl:space-x-28 2xl:space-x-52'>
          <img className='hidden md:flex h-48 xl:h-56' src={Phone} alt="phone" />
          <div className='flex flex-col'>
            <p className='font-bold text-peesoGreen text-center text-xl xl:text-2xl 2xl:text-3xl'>EXPLORE MORE!</p>
            <div className='flex space-x-1 mt-4 justify-center items-center'>
              <button onClick={() => window.open('https://www.facebook.com/PEESOTagumOfficial')} className='rounded-lg text-white 2xl:text-lg font-bold bg-peesoLightBlack mx-3 px-3'>OUR SOCIAL PAGE</button>
              <button className='rounded-lg text-white 2xl:text-lg font-bold bg-peesoLightBlack mx-3 px-3'>OUR COMMUNITY</button>
            </div>
            <p className='text-3xl xl:text-4xl 2xl:text-5xl font-bold text-peesoGreen text-center mt-4'>CONNECT WITH US!</p>
            <div className='mt-3 space-y-1 self-center'>
              <p className='text-peesoLightBlack font-semibold'>+64 967 325 9484</p>
              <p className='text-peesoLightBlack font-semibold'>tagumpeso@gmail.com</p>
              <p className='text-peesoLightBlack font-semibold'>facebook.com/PEESOTagumOfficial</p>
            </div>
          </div>
        </div>

        <Footer />
    </div>
  )
}

export default Home