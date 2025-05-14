import React from 'react'
import Mein from '../components/Mein';
import Servicios from '../components/Servicios'
import Portafolio from '../components/Portafolio'
import HeroSection from '../components/HeroSection';


const Home = () => {
  return (
    <>
    <HeroSection/>
    <div className='w-full'>
    <Servicios />
    </div>
    <div className=' w-full'>
    <Portafolio />
    </div>
      <Mein/>
    </>
  )
}

export default Home;
