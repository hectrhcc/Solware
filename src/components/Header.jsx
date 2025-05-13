import React, { useState, useEffect } from 'react';
import { Route, Link } from 'wouter';
import Home from '../pages/Home';
import ServiciosPage from '../pages/ServiciosPage';
import PortafolioPage from '../pages/PortafolioPage';
import ContactoPage from '../pages/ContactoPage';
import logoletra from '../logoletra.png';
import Hamburguesa from './Hamburguesa';

const Header = () => {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [animandoCierre, setAnimandoCierre] = useState(false);
  const [openBurger, setOpenBurger] = useState(false); 
  const [darkMode, setDarkMode] = useState(false);

  const cerrarMenu = () => {
    setAnimandoCierre(true);
    setOpenBurger(false); // <- cerrar hamburguesa
    setTimeout(() => {
      setMenuAbierto(false);
      setAnimandoCierre(false);
    }, 500);
  };

  const toggleMenu = () => {
    if (menuAbierto) {
      cerrarMenu();
    } else {
      setMenuAbierto(true);
      setOpenBurger(true); // <- abrir hamburguesa
    }
  };

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  useEffect(() => {
    const darkGuardado = localStorage.getItem("modoOscuro") === "true";
    setDarkMode(darkGuardado);
  }, []);
  
  useEffect(() => {
    if (darkMode) {
      document.body.parentElement?.classList.add("modo-oscuro");
    } else {
      document.body.parentElement?.classList.remove("modo-oscuro");
    }
    localStorage.setItem("modoOscuro", darkMode);
  }, [darkMode]);

  return (
    <>
      <header className="w-full h-full flex justify-between items-center p-4 bg-yellow-500 relative">
        {/* Hamburguesa */}
        <div className="lg:hidden w-1/12 h-16.5 items-center bg-yellow-500">
          <button onClick={toggleMenu}>
            <Hamburguesa open={openBurger} />
          </button>
        </div>

        {/* Logo */}
        <div className="lg:w-1/4 w-10/12 bg-yellow-500 flex items-start logo-emergente" >
          <img src={logoletra} alt="Logo de Solware" className="object-contain lg:w-70 " />
        </div>
        {/* Menú escritorio */}
        <nav className="lg:w-3/4 gap-4 hidden md:flex justify-end pr-1 bg-yellow-500 text-white place-items-start">
          <Link href="/" className="mr-3 text-xl pr-3 ml-20 font-semibold subrayado-naranja-espacio">Inicio</Link>
          <Link href="Servicios" className="mr-3 text-xl pr-3 font-semibold subrayado-naranja-espacio">Servicios</Link>
          <Link href="Portafolio" className="mr-3 text-xl pr-3 font-semibold subrayado-naranja-espacio">Portafolio</Link>
          <Link href="Contacto" className="mr-3 text-xl pr-3 font-semibold subrayado-naranja-espacio">Contacto</Link>
        </nav>

        {/* Icono Sol / Luna */}
        <div className="flex items-center justify-items-normal ">
          <label htmlFor="darkmode" className="bg-white w-14 h-7 rounded-full cursor-pointer p-1 border-1  border-yellow-600 relative focus:outline-none focus:ring-0">
            <input onClick={handleClick} type="checkbox" id="darkmode" className="sr-only peer " checked={darkMode} readOnly />
            <div id="luna" className="w-5 h-5  rounded-full peer-checked:translate-x-6 transition-all bg-white ">
            <span className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-between text-x rounded-full text-gray-800 peer-checked:text-gray-200 ">
              {darkMode ? '🌙' : '☀️'}
            </span>
            </div>
          </label>
        </div>

        {/* Menú móvil */}
        {(menuAbierto || animandoCierre) && (
          <nav
            className={`absolute top-[6.1rem] right-0 w-full bg-white text-gray-800 flex flex-col items-start lg:hidden z-50 origin-top ${
              menuAbierto && !animandoCierre
                ? 'animate-[aparecerConAltura_0.5s_forwards]'
                : 'animate-[desaparecerConAltura_0.5s_forwards]'
            }`}
          >
            <Link href="/" onClick={cerrarMenu} className="pt-3 pb-3 pl-3 text-lg font-medium hover:text-white hover:bg-yellow-400 w-full">INICIO</Link>
            <Link href="Servicios" onClick={cerrarMenu} className="pt-3 pb-3 pl-3 text-lg font-medium hover:text-white hover:bg-yellow-400 w-full">SERVICIOS</Link>
            <Link href="Portafolio" onClick={cerrarMenu} className="pt-3 pb-3 pl-3 text-lg font-medium hover:text-white hover:bg-yellow-400 w-full">PORTAFOLIO</Link>
            <Link href="Contacto" onClick={cerrarMenu} className="pt-3 pb-3 pl-3 text-lg font-medium hover:text-white hover:bg-yellow-400 w-full">CONTACTO</Link>
          </nav>
        )}
      </header>

      {/* Rutas */}
      <Route path="/" component={Home} />
      <Route path="/servicios" component={ServiciosPage} />
      <Route path="/portafolio" component={PortafolioPage} />
      <Route path="/contacto" component={ContactoPage} />

      {/* Animaciones */}
      <style>{`
        @keyframes aparecerConAltura {
          from {
            transform: scaleY(0);
            opacity: 0;
          }
          to {
            transform: scaleY(1);
            opacity: 1;
          }
        }

        @keyframes desaparecerConAltura {
          from {
            transform: scaleY(1);
            opacity: 1;
          }
          to {
            transform: scaleY(0);
            opacity: 0;
          }
        }
@keyframes emerge {
  0% {
    transform: translateY(30%); 
    opacity: 0;
  }
  100% {
    transform: translateY(0); 
    opacity: 1;
  }
}

.logo-emergente {
  animation: emerge 1s ease-out forwards;
  z-index: 0; /* Asegura que el logo esté encima del contenido */
}


      `}</style>
    </>
  );
};

export default Header;
