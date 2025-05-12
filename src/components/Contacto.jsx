import React from 'react';

// ContactForm.jsx
import { useForm } from 'react-hook-form';

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log('Datos enviados:', data);
  };

  return (
    
      <div className=' md:flex md:flex-col  '>
      
       <div className='flex flex-col p-3 '>
               <h3 className='text-2xl text-center font-semibold mb-3 color 7 '>¡Estamos aquí para ayudarte!</h3>
                <p className='text-lg mb-3 ml-4 mr-3 lg:ml-0 lg:mr-0 text-left justify-between mx-auto lg:justify-center lg:w-full text-wrap '>Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con nosotros. Rellena con tus datos el siguiente formulario y en breve responderemos.</p>
        </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  mx-auto  lg:w-full lg:h-full">
      <div className='flex  lg:flex-row lg:gap-1 lg:px-2'>
      <div className="flex flex-col lg:w-full ">
        <input
          {...register('nombre', { required: 'El nombre es obligatorio' })}
          className=" w-10/12 rounded-2xl  ml-4 mr-1 p-1 pl-4 bg-gray-100  border-1   lg:mr-0 "
          placeholder='Nombre'
        />
        {errors.nombre && <p className="text-red-500 text-sm w-full ml-5 ">{errors.nombre.message}</p>}
        </div>
        <div className="flex flex-col lg:w-full ">
               <input
          {...register('apellido', { required: 'El apellido es obligatorio' })}
          className="  w-10/12 rounded-2xl ml-3 mr-1 p-1  pl-4 bg-gray-100  border-1  lg:ml-0 lg:mr-0 "
          placeholder='Apellido'
        />
        {errors.apellido && <p className="text-red-500 text-sm  w-full ml-5  ">{errors.apellido.message}</p>}
      </div>
     </div>
      <div className='flex  lg:flex-row lg:gap-1 lg:px-2'>
      <div className="flex flex-col lg:w-full ">
             <input
          type="email"
          {...register('correo', { required: 'El correo es obligatorio' })}
          className=" w-10/12 rounded-2xl mr-1 ml-4 p-1 pl-4 bg-gray-100  border-1  lg:mr-0"
          placeholder='Correo'
        />
        {errors.correo && <p className="text-red-500 text-sm  w-full ml-5  ">{errors.correo.message}</p>}
       </div>
       <div className="flex flex-col lg:w-full">
               <input
          type="telefono"
          {...register('telefono', { required: 'El telefono es obligatorio' })}
          className=" w-10/12 rounded-2xl ml-3 mr-1 p-1 pl-4 bg-gray-100 border-1 lg:ml-0 "
          placeholder='Teléfono'
        />
        {errors.telefono && <p className="text-red-500 text-sm w-full ml-5 ">{errors.telefono.message}</p>}
      </div>
    </div>
      <div className='lg:flex-row lg:gap-1 lg:px-2'>
        <textarea
          {...register('mensaje', { required: 'El mensaje no puede estar vacío' })}
          className="resize-none min-w-11/12 rounded-2xl ml-3 mr-3 min-h-auto h-36  bg-gray-100 pl-4 border-1 lg:min-w-9/10 "
          placeholder='Mensaje'
        />
        {errors.mensaje && <p className="text-red-500 text-sm block w-full pl-4">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700   ml-5.5 hover:scale-110 lg:w-7/8 lg:py-3 lg:hover:bg-blue-500 lg:hover:scale-100"
      >
        Enviar
      </button>
      </form>
   </div>
  );
}
