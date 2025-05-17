import React from 'react';
import solware from '../../public/solware.png';

export default function HeroSection() {
  return (
    <section className="min-h-screen mb-0 pb-0 w-full bg-white px-6 flex flex-row items-center justify-between gap-0 lg:gap-20 overflow-hidden">

      {/* Texto a la izquierda */}
      <div className="w-1/2 md:w-2/3 lg:w-1/2 text-left">
        <h1 className="text-3xl lg:relative md:left-8 md:relative lg:left-30 lg:bottom-12 md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
          Desarrollamos el <span className="text-[#0D206C]">sitio web</span><br />
          que tu negocio necesita
        </h1>
        <p className="mt-4 text-md md:w-9/10 md:text-xl lg:text-2xl lg:bottom-12 md:left-8 md:relative  text-gray-600 lg:relative lg:left-30">
          Creamos sitios informativos, tiendas online y plataformas a medida para potenciar tu presencia digital.
        </p>

        {/* Botones */}
        <button className="hidden lg:block lg:relative lg:left-30 lg:bottom-12 mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-base md:text-lg hover:bg-indigo-700 transition">
          Lleva tu empresa al siguiente nivel
        </button>
        <button className="block md:left-8 md:relative  lg:hidden mt-6 bg-indigo-600 text-white px-6 py-3 rounded-full text-base md:text-lg hover:bg-indigo-700 transition">
          VER SERVICIOS
        </button>
      </div>

      {/* Logo a la derecha */}
      <div className="relative left-91  md:left-130 w-1/2 md:w-1/3 lg:w-1/2 h-full flex justify-end">
        <img
          src={solware}
          alt="Solware"
          className="object-contain w-[290%] lg:relative lg:right-97 lg:bottom-6 md:w-[280%] lg:w-full max-w-none h-auto"
          style={{ transform: 'translateX(-25%)' }}
        />
      </div>

    </section>
  );
}
