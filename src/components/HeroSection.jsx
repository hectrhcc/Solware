import React from 'react';
import solware from '../../public/solware.png';

export default function HeroSection() {
  return (
    <section className=" mb-0 pb-0 w-full bg-white py-20 px-6 flex flex-row items-center justify-between gap-0 lg:gap-20 lg:py-10 overflow-hidden">

      {/* Texto a la izquierda */}
      <div className="w-1/2 md:w-2/3 lg:w-1/2 text-left">
        <h1 className="text-3xl  lg:relative lg:left-30 lg:bottom-12 md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Desarrollamos el <span className="text-[#0D206C]">sitio web</span><br />
          que tu negocio necesita
        </h1>
        <p className="mt-4 text-md md:text-xl lg:text-2xl lg:bottom-12 text-gray-600 lg:relative lg:left-30">
          Creamos sitios informativos, tiendas online y plataformas a medida para potenciar tu presencia digital.
        </p>
        <button className="hidden lg:block lg:relative lg:left-30 lg:bottom-12 mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-base md:text-lg hover:bg-indigo-700 transition">
          Lleva tu empresa al siguiente nivel
        </button>
         <button className="block lg:hidden mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-base md:text-lg hover:bg-indigo-700 transition">
          VER SERVICIOS
        </button>
      </div>

      {/* Logo a la derecha */}
      <div className="relative left-15 md:left-5 lg:left-40 lg:bottom-12 bottom-9 w-1/2 md:w-1/3 lg:w-1/2 h-full flex justify-items-start ">
        <img
          src={solware}
          alt="Solware"
          className="object-contain w-[260%] max-w-none h-auto md:w-[150%] lg:w-full"
          style={{ transform: 'translateX(-25%)' }} // muestra solo parte del logo
        />
      </div>

    </section>
  );
}
