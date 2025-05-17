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
    <div className='w-full '>
    <Servicios />
    </div>
    <div className=' w-full'>
    <Portafolio />
    
    <Link href="Portafolio" >
     <button
        type="submit"
        className="mx-auto block mb-7 md:w-[15%]  w-[30%] lg:w-[8%] px-4 py-2 rounded-xl  border-1 mt-10 md:mb-0"
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
