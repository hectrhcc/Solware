import React from 'react'
import Portafolio from '../components/Portafolio';
import camara from '../../public/camarografo.png';
import mascotas from '../../public/mascotas.png';
import snap from '../../public/snap.png';
const PortafolioPage = () => {
  return (
    <>
    
         <Portafolio/>
        {/*el resto del portafolio */}
        <div className='mt-5 mb-5 gap-5 flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 mx-auto' data-aos="fade-up">
        
        <div className='border-1 w-3/4 lg:w-1/2  p-6 text-center rounded shadow'>
         <img src={camara} alt='camarógrafos docentemás' className='w-full h-40 object-cover rounded '/>
        <h2 className='text-lg font-semibold color mt-2'>Camarógrafos DocenteMás</h2>
        </div>
        <div className='border-1 w-3/4 lg:w-1/2  p-6 text-center rounded shadow'>
         <img src={mascotas} alt='portal mascotas' className='w-full h-40 object-cover rounded '/>
        <h2 className='text-lg font-semibold color mt-2'>Portal Mascotas</h2>
        </div>
        <div className='border-1 w-3/4 lg:w-1/2  p-6 text-center rounded shadow'>
         <img src={snap} alt='snap' className='w-full h-40 object-cover rounded '/>
        <h2 className='text-lg font-semibold color mt-2'>Snap</h2>
        </div>
        </div> 
    </>
  )
}

export default PortafolioPage;
