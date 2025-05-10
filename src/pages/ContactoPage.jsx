import React from 'react'
import Contacto from '../components/Contacto';
import qrwsp from '../../public/qrcode-56967689934.jpg';

const ContactoPage = () => {
  return (
    <>
      <h1 className='text-5xl font-bold color text-center mt-7' >Contacto</h1>
        <hr className="w-1/2 h-1 mx-auto mt-2 mb-3 bg-amber-300 border-none rounded md:w-1/6 md:items-end" />
    <div className=' lg:flex  lg:flex-row mb-4'>
      <div className='hidden lg:flex  w-3/12'>
      <video
       src="/contactman.mp4"
      autoPlay
      loop
      muted
      playsInline
      className="w-full h-120"
      >
      Tu navegador no soporta la reproducción de video.
      </video>
      </div>
    <div className='  lg:flex  md:w-6/12 mx-auto '>  
      <Contacto/>
    </div>
    <div className='hidden lg:block  w-3/12 relative right-13'>
                        <p className=' text-4xl font-extralight text-center mt-1  '>Whatsapp QR</p>
              <img src={qrwsp} alt="whatsapp" className="hover:scale-105 mt-2 object-contain  mx-auto w-4/6  " />
              <p className=' font-bold text-center mt-1  '> +56967689934</p>
    </div>
    </div>

     
     
    </>
  )
}

export default ContactoPage;
