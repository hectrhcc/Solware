import React from 'react'
import Contacto from '../components/Contacto';

const ContactoPage = () => {
  return (
    <>
      <h1 className='text-5xl font-bold color text-center mt-7' >Contacto</h1>
      <hr className="w-1/2 h-1 mx-auto mt-2 mb-3 bg-amber-300 border-none rounded md:w-1/6 md:items-end" />
    <div className='flex flex-col  w-full p-3'>
    <h3 className='text-2xl text-center font-semibold mb-3 color 7 '>¡Estamos aquí para ayudarte!</h3>
    <p className='text-lg mb-3 ml-4 mr-3 text-left justify-between  md:mx-auto md:text-center md:w-1/3 '>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros.</p>
</div>
      <Contacto/>
     
    </>
  )
}

export default ContactoPage;
