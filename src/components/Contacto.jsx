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
      <div className='flex mt-7 '>
      <div className="flex flex-col">
        <input
          {...register('nombre', { required: 'El nombre es obligatorio' })}
          className=" w-10/12 rounded-2xl  ml-4 mr-1 p-1 bg-white pl-4"
          placeholder='Nombre'
        />
        {errors.nombre && <p className="text-red-500 text-sm w-1/3 w-full ml-5 ">{errors.nombre.message}</p>}
        </div>
        <div className="flex flex-col">
               <input
          {...register('apellido', { required: 'El apellido es obligatorio' })}
          className="  w-10/12 rounded-2xl ml-3 mr-1 p-1  bg-white  pl-4"
          placeholder='Apellido'
        />
        {errors.apellido && <p className="text-red-500 text-sm w-1/3 w-full ml-5  ">{errors.apellido.message}</p>}
      </div>
     </div>
      <div className='flex '>
      <div className="flex flex-col">
             <input
          type="email"
          {...register('correo', { required: 'El correo es obligatorio' })}
          className=" w-10/12 rounded-2xl mr-1 ml-4 p-1  bg-white  pl-4"
          placeholder='Correo'
        />
        {errors.correo && <p className="text-red-500 text-sm w-1/3 w-full ml-5  ">{errors.correo.message}</p>}
       </div>
       <div className="flex flex-col">
               <input
          type="telefono"
          {...register('telefono', { required: 'El telefono es obligatorio' })}
          className=" w-10/12 rounded-2xl ml-3 mr-1 p-1 bg-white  pl-4"
          placeholder='Teléfono'
        />
        {errors.telefono && <p className="text-red-500 text-sm w-full ml-5 ">{errors.telefono.message}</p>}
      </div>
    </div>
      <div>
        <textarea
          {...register('mensaje', { required: 'El mensaje no puede estar vacío' })}
          className=" min-w-11/12 rounded-2xl ml-3 mr-3 min-h-auto h-36  bg-white pl-4"
          placeholder='Mensaje'
        />
        {errors.mensaje && <p className="text-red-500 text-sm block w-full pl-4">{errors.mensaje.message}</p>}
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
