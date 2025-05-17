import React from 'react'
import Mein from '../components/Mein';
import Servicios from '../components/Servicios'
import Portafolio from '../components/Portafolio'
import HeroSection from '../components/HeroSection';
import { Route, Link } from 'wouter';

const Home = () => {
  return (
    <>
    <HeroSection/>
    <div className='fondo w-full lg:pb-4 lg:pt-8  bg-[#F0F8FF]'>
    <Servicios />
    <Link href="Servicios" >
        <button
        type="submit"
        className="mx-auto block mb-7 md:w-[15%]  w-[30%] lg:w-[8%] lg:mb-12 px-4 py-2 rounded-xl  border-1 mt-10 md:mb-0"
        data-aos="zoom-in"
      >
        ver más
      </button>
      </Link>
    </div>
    <div className='fondo w-full lg:pb-15   pt-4  bg-[#FBFBFB]  '>
    <Portafolio />
    <Link href="Portafolio" >
     <button
        type="submit"
        className="mx-auto  block mb-7 md:w-[15%]  w-[30%] lg:w-[8%] px-4 py-2 rounded-xl  border-1 mt-10 lg:mt-12 md:mb-0"
        data-aos="zoom-in"
      >
        ver más
      </button>
    </Link>
    </div>
      <Mein/>
    </>
  )
}

export default Home;
