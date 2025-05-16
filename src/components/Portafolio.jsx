import React, { useState , useEffect} from 'react';
import agricola from '../../public/agricola2.png';
import tracker from '../../public/trackerip.png';
import zona from '../../public/zonafotica.png';

export default function Portafolio() {

return (  
<>
 <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold color text-center mt-7 color md:mt-10 mb-5' >PORTAFOLIO</h1>
    <p className='text-sm md:text-lg w-11/12 md:w-2/3 lg:w-full mx-auto text-center lg:text-xl mb-5'>
        Conoce algunos de los proyectos que hemos desarrollado junto a nuestros clientes.
      </p>
    <div className='mt-5 gap-5 flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 mx-auto' data-aos="zoom-in">    
        <div className='text-sm md:text-lg border-1 w-3/4 lg:w-1/2 p-6 text-center rounded shadow'>
        <img src={tracker} alt='tacker ip' className='w-full h-40 object-cover rounded  transform transition-transform duration-300 hover:scale-105 '/>
        <h2 className='text-lg font-semibold color mt-2'>Tracker IP</h2>
        </div>
        <div className='text-sm md:text-lg border-1 w-3/4 lg:w-1/2 p-6 text-center rounded shadow'>
        <img src={agricola} alt='agricola del norte s.a' className='w-full h-40 object-cover rounded  transform transition-transform duration-300 hover:scale-105 '/>
        <h2 className='text-lg font-semibold color mt-2'>Agrícola del Norte S.A</h2>
        </div>
        <div className='text-sm md:text-lg border-1 w-3/4 lg:w-1/2 p-6 text-center rounded shadow'>
        <img src={zona} alt='zona fotica' className='w-full h-40 object-cover rounded   transform transition-transform duration-300 hover:scale-105'/>
        <h2 className='text-lg font-semibold color mt-2'>Zona Fótica</h2>
        </div>
    </div>  
    
     
</>
)
}