import React from 'react';
import Portafolio from '../components/Portafolio';
import camara from '../../public/camarografo.png';
import mascotas from '../../public/mascotas.png';
import snap from '../../public/snap.png';
import ojo from '../../public/ojo.png';

const PortafolioPage = () => {
  return (
    <div className='bg-[#F9F4F2] divportafolio'> 
      <Portafolio />

      <div className='mt-5 mb-15 gap-5 flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 mx-auto' data-aos="fade-up">
        
        <div className='divporta bg-gray-100 hover:bg-white rounded text-sm md:text-lg  w-3/4 lg:w-1/2 pt-6 pb-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)] transform transition-transform duration-300 hover:scale-105'>
          <img
            src={camara}
            alt='camarógrafos docentemás'
            className='w-full h-40 object-cover border-1 border-gray-100 '
          />
          <h2 className='text-lg font-semibold color mt-2'>Camarógrafos DocenteMás</h2>
              <img src={ojo} alt='ojo' className='mx-auto w-5 mt-2 '/>
        </div>

        <div className='divporta bg-gray-100 hover:bg-white  rounded text-sm md:text-lg  w-3/4 lg:w-1/2 pt-6 pb-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]  transform transition-transform duration-300 hover:scale-105'>
          <img
            src={mascotas}
            alt='portal mascotas'
            className='w-full h-40 object-cover border-1 border-gray-100'
          />
          <h2 className='text-lg font-semibold color mt-2'>Portal Mascotas</h2>
              <img src={ojo} alt='ojo' className='mx-auto w-5 mt-2 '/>
        </div>

        <div className='divporta bg-gray-100 hover:bg-white  rounded text-sm md:text-lg  w-3/4 lg:w-1/2 pt-6 pb-6 text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]  transform transition-transform duration-300 hover:scale-105'>
          <img
            src={snap}
            alt='snap'
            className='w-full h-40 object-cover border-1 border-gray-100'
          />
          <h2 className='text-lg font-semibold color mt-2'>Snap</h2>
              <img src={ojo} alt='ojo' className='mx-auto w-5 mt-2 '/>
        </div>
        
      </div>
    </div>
  );
};

export default PortafolioPage;
