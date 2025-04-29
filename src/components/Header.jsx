import React from 'react'
import Home from '../pages/Home';
import ServiciosPage from '../pages/ServiciosPage';
import PortafolioPage from '../pages/PortafolioPage';
import ContactoPage from '../pages/ContactoPage';

import { Route, Link } from 'wouter';

const Header = () => {
  return (
    <>    
    <nav className='flex justify-center items-center gap-4 bg-gray-800 text-white p-4'>
        <Link href="/"> Inicio </Link>
        <Link href="Servicios"> Servicios </Link>
        <Link href="Portafolio"> Portafolio </Link>
        <Link href="Contacto"> Contacto </Link>
    </nav>

    <Route path="/" component={Home} />
    <Route path="/servicios" component={ServiciosPage} />
    <Route path="/portafolio" component={PortafolioPage} />
    <Route path="/contacto" component={ContactoPage} />
    </>
  )
}

export default Header;
// import React from 'react';



