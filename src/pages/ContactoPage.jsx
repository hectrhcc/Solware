import React from 'react'
import Contacto from '../components/Contacto';

const ContactoPage = () => {
  return (
    <>
      <h1 className='text-5xl font-bold color text-center mt-6'>Contacto</h1>
      <div className='flex flex-col  w-full p-3'>
    <p className='text-2xl text-center font-semibold mb-4'>¡Estamos aquí para ayudarte!</p>
    <p className='text-lg mb-4 text-center justify-between '>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Estaremos encantados de ayudarte.</p>
</div>
      <Contacto/>
      <div className='flex  w-full  p-1 text-center justify-center'>
        <div className='flex flex-col   w-full  text-center justify-center '>
          <h3 className='text-xl font-bold mb-3  mt-6 color'>Horario de Atención</h3>
            <p>Lunes a viernes de 09:00 a 19:00 hrs.</p>
            <p className='mb-8'> Sábado de 10:00 a 14:00 hrs.</p>
      </div>
      </div>
    </>
  )
}

export default ContactoPage;
