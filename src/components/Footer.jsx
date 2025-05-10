import React from 'react'
import logoletra from '../logoletra.png';
import linkedin from '../linkedin.png';
import wsp from '../wsp.png';
import mail from '../mail.png';
import { Route, Link } from 'wouter';
import ServiciosPage from '../pages/ServiciosPage';
import PortafolioPage from '../pages/PortafolioPage';
import ContactoPage from '../pages/ContactoPage';


const Footer = () => {
 
    return(
        <>  
       <footer  className="w-full flex flex-col items-center  py-4  md:py-4 md:pt-12 md:pb-12">
  {/* Logo y frase */}
<div className='md:flex md:flex-row md:justify-evenly md:items-center md:w-full '>
  <div className="flex flex-col items-center mb-4 md:w-1/4 md:mb-0">
    <img
      src={logoletra}
      alt="Logo"
      className="w-89 h-17  object-contain "
    />
    <span className="text-sm text-white bottom-3 mx-0  md:text-center lg:text-normal ">Desarrollo que impulsa tu negocio</span>
  </div>

  {/* Navegación */}
  <div className="flex flex-col items-center mb-4 md:w-1/4  lg:w-2/4 md:mb-0 md:justify-center" >
  
   
  <div className="flex flex-col items-start ">
  <Link href="/" className="text-white hover:text-sky-500 text-justify">› Inicio</Link>
<Link to="/servicios" className="text-white hover:text-sky-500 text-justify">› Servicios</Link>
<Link to="/portafolio" className="text-white hover:text-sky-500 text-justify">› Portafolio</Link>
<Link to="/contacto" className="text-white hover:text-sky-500 text-justify">› Contacto</Link>
    </div>
 
    <div className='lg:hidden md:hidden flex  flex-col  w-full   items-center text-white mt-4 '>
       
       <h3 className='text-md font-semibold mb-2'>Horario de Atención</h3>
         <p className='text-xs'>Lunes a viernes: 09:00 a 19:00 hrs.</p>
         <p className='text-xs'> Sábado: 10:00 a 14:00 hrs.</p>
   </div>
  
  </div>

  {/*Contacto */}
  <div className='hidden md:block md:w-1/4 '>
    <h2 className="hidden md:block text-white text-lg font-semibold mb-2">Contacto</h2>
    <p className="text-white font-semibold">✉ <span className='font-normal  md:text-sm lg:text-base'>contacto@solware.cl</span></p>
    <p className="text-white font-semibold">📱 <span className='font-normal  md:text-sm lg:text-base'> +56 9 6768 9934</span> </p>
   
  </div>

  {/* Redes sociales */}
  <div className="flex  md:flex-col justify-center items-center mb-3 md:w-1/4">
  <h2 className="hidden md:block text-white text-lg font-semibold mb-2">Encuéntranos aquí</h2>
  <div className="flex">
    <a
      href="https://www.linkedin.com/company/solware-dev/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-sky-500 transition transform hover:-translate-y-1 duration-200 ease-in-out"
    >
      <img src={linkedin} alt="logo linkedin" className="w-5 h-5 m-2 relative top-0.5 " />
    </a>
    <a
      href="mailto:contacto@solware.cl"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-sky-500 transition transform hover:-translate-y-1 duration-200 ease-in-out"
    >
      <img src={mail} alt="logo mail" className="w-6 h-6 m-2" />
    </a>
    <a
      href="https://wa.me/56967689934"
      target="_blank"
      rel="noopener noreferrer"
      className="text-white hover:text-sky-500 transition transform hover:-translate-y-1 duration-200 ease-in-out"
    >
      <img src={wsp} alt="logo whatsapp" className="w-6 h-6 m-2" />
    </a>
    </div>
  </div>
</div>
  {/* Créditos */}
  <div className="text-white text-xs text-center  md:relative md:top-12 md:mb-4">
    © 2025 Solware. Todos los derechos reservados.
  </div>
</footer>



        </>
    )
}

export default Footer;


