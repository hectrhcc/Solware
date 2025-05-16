import React, { useState , useEffect} from 'react';
import agricola from '../../public/agricola2.png';
import tracker from '../../public/trackerip.png';
import zona from '../../public/zonafotica.png';
import ojo from '../../public/ojo.png';

export default function Portafolio() {

return (  
<>
 <h1 className='text-2xl md:text-4xl lg:text-5xl font-bold color text-center mt-7 color md:mt-10 mb-5' >PORTAFOLIO</h1>
    <p className='text-sm md:text-lg w-11/12 md:w-2/3 lg:w-full mx-auto text-center lg:text-xl mb-5 lg:mb-12'>
        Conoce algunos de los proyectos que hemos desarrollado junto a nuestros clientes.
      </p>
    <div className='mt-5 gap-5 flex flex-col lg:flex-row justify-center items-center w-full lg:w-3/4 mx-auto ' data-aos="zoom-in">    
       
        <div className=' divporta bg-gray-100  hover:bg-white rounded text-sm md:text-lg    w-3/4 lg:w-1/2  pb-7   text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]  transform transition-transform duration-300 hover:scale-105  '>
            <div className="ml-2 pt-2 pb-4 mb-0 h-7   bolitas "><div className="  bolita"><br/>
    </div><div className="  bolita2"><br/></div>
<div className=" bolita3"><br/></div></div>
<a href="https://www.agricoladelnorte.cl/" target="_blank" rel="nofollow noopener noreferrer" >
        <img src={agricola} alt='agricola del norte s.a' className='w-full h-40 object-cover rounded  border-1 border-gray-100 '/>
</a>        
        <h2 className='text-lg font-semibold color mt-2' data-aos="flip-up">Agrícola del Norte S.A</h2>
        <a href="https://www.agricoladelnorte.cl/" target="_blank" rel="nofollow noopener noreferrer" >
        <img src={ojo} alt='ojo' className='mx-auto w-5 mt-2 'data-aos="flip-up"/></a>
        </div>
        <div className=' divporta bg-gray-100  hover:bg-white rounded text-sm md:text-lg    w-3/4 lg:w-1/2  pb-7   text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]  transform transition-transform duration-300 hover:scale-105 '>
            <div className="ml-2 pt-2 pb-0 mb-0 h-7   bolitas "><div className="  bolita"><br/>
    </div><div className="  bolita2"><br/></div>
<div className=" bolita3"><br/></div></div>
 <a
    href="https://www.zonafotica.cl/"
    target="_blank"
    rel="nofollow noopener noreferrer"

  >        <img src={zona} alt='zona fotica' className='w-full h-40 object-cover border-1  rounded border-gray-100 '/></a>
        <h2 className='text-lg font-semibold color mt-2' data-aos="flip-up">Zona Fótica</h2>
  <a
    href="https://www.zonafotica.cl/"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >       
  <img src={ojo} alt='ojo' className=' mx-auto w-5 mt-2 'data-aos="flip-up"/>
  </a>
        </div>
     <div className=' divporta bg-gray-100  hover:bg-white rounded text-sm md:text-lg    w-3/4 lg:w-1/2  pb-7   text-center shadow-[0_4px_30px_rgba(0,0,0,0.5)]  transform transition-transform duration-300 hover:scale-105 '>
    <div className="  ml-2 pt-2 pb-4 mb-0 h-7   bolitas "><div className="  bolita"><br/>
    </div><div className="  bolita2"><br/></div>
<div className=" bolita3"><br/></div></div>
 <a
    href="https://trackeripaddress.netlify.app/"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
        <img src={tracker} alt='tacker ip' className='w-full h-40 object-cover  border-1   border-white  '/></a>
        <h2 className='text-lg font-semibold color mt-2 ' data-aos="flip-up">Tracker IP</h2>
       <a
    href="https://trackeripaddress.netlify.app/"
    target="_blank"
    rel="nofollow noopener noreferrer"
  >
        <img src={ojo} alt='ojo' className='mx-auto w-5 mt-2 'data-aos="flip-up"/> </a>
        </div>  
    </div>  
    
     
</>
)
}