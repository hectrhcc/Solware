import React from 'react'
import Home from '../pages/Home';
import ServiciosPage from '../pages/ServiciosPage';
import PortafolioPage from '../pages/PortafolioPage';
import ContactoPage from '../pages/ContactoPage';
import logoletra from '../logoletra.png'

import { Route, Link } from 'wouter';

const Header = () => {
  return (
    <>    
    <header className='w-full flex justify-between items-center p-0'>
         {/* Izquierda: menu hamburguesa */}
        <div className='lg:hidden h-18 items-start w-1/3 bg-gray-800 text-white p-4'>
           <span className=''>hamburguesa</span> 
        </div>
        {/* Derecha: logo  */}
        <div className='lg:w-1/4 items-start w-2/3 bg-gray-800 text-white p-4'>
           
           <img src={logoletra} alt="Logo de Solware" className="h-10 w-full lg:w-60" />
 
        </div>
        <nav className=' lg:w-3/4 hidden  h-18 md:flex justify-end-safe pr-30   gap-4 bg-gray-800 text-white p-2 items-center'> 
        <Link href="/" className='mr-3 text-xl pr-3 ml-20'> Inicio </Link>
        <Link href="Servicios"className='mr-3 text-xl pr-3' > Servicios </Link>
        <Link href="Portafolio"className='mr-3 text-xl pr-3' > Portafolio </Link>
        <Link href="Contacto"className='mr-3 text-xl pr-3' > Contacto </Link>
        </nav>


</ header>
    <Route path="/" component={Home} />
    <Route path="/servicios" component={ServiciosPage} />
    <Route path="/portafolio" component={PortafolioPage} />
    <Route path="/contacto" component={ContactoPage} />
    </>
  )
}

export default Header;
// import React from 'react';



