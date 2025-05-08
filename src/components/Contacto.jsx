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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4  mx-auto bg-amber-300">
      <div className='flex mt-5 '>
        
        <input
          {...register('nombre', { required: 'El nombre es obligatorio' })}
          className=" w-5/12 rounded-2xl mr-4 ml-4 p-1 bg-white"
          placeholder='  Nombre'
        />
        {errors.nombre && <p className="text-red-500 text-sm">{errors.nombre.message}</p>}

               <input
          {...register('apellido', { required: 'El apellido es obligatorio' })}
          className="  w-5/12 rounded-2xl ml-4 mr-4 p-1  bg-white "
          placeholder='  Apellido'
        />
        {errors.apellido && <p className="text-red-500 text-sm">{errors.apellido.message}</p>}
      </div>

      <div className='flex'>
             <input
          type="email"
          {...register('correo', { required: 'El correo es obligatorio' })}
          className=" w-5/12 rounded-2xl mr-4 ml-4 p-1  bg-white"
          placeholder='  Correo'
        />
        {errors.correo && <p className="text-red-500 text-sm">{errors.correo.message}</p>}
       
               <input
          type="telefono"
          {...register('telefono', { required: 'El telefono es obligatorio' })}
          className=" w-5/12 rounded-2xl ml-4 mr-4 p-1 bg-white"
          placeholder='  Teléfono'
        />
        {errors.telefono && <p className="text-red-500 text-sm">{errors.telefono.message}</p>}
      </div>

      <div>
        <textarea
          {...register('mensaje', { required: 'El mensaje no puede estar vacío' })}
          className=" min-w-11/12 rounded-2xl ml-3 mr-3 min-h-auto  bg-white"
          placeholder='   Mensaje'
        />
        {errors.mensaje && <p className="text-red-500 text-sm">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4  ml-4 "
      >
        Enviar
      </button>
    </form>
  );
}
