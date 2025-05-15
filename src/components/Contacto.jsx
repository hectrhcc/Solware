import emailjs from 'emailjs-com';
import React, { useState , useEffect} from 'react';
import { useForm } from 'react-hook-form';

export default function ContactForm() {
   
const [enviando, setEnviando] = useState(false);
const [mensajeEnviado, setMensajeEnviado] = useState('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
}, []);

  const onSubmit = (data) => {
    setEnviando(true);
  setMensajeEnviado('');
  emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  data
)  
  .then((result) => {
      console.log('Mensaje enviado ✅', result.text);
      //alert('Mensaje enviado con éxito');
      setMensajeEnviado('✅ Se ha enviado correctamente tu mensaje.');
    })
    .catch((error) => {
      console.error('Error al enviar ❌', error);
      //alert('Hubo un problema al enviar tu mensaje');
      setMensajeEnviado('❌ Hubo un problema al enviar tu mensaje. Intenta nuevamente.');
    })
    .finally(() => {
      setEnviando(false);
    });
};

  return (  
      <div className=' md:flex md:flex-col mx-auto  w-full '>
      
       <div className='flex flex-col p-3 '>
               <h3 className='text-2xl text-center font-semibold mb-4 color'>¡Estamos aquí para ayudarte!</h3>
                <p className='text-lg lg:ml-11  lg:text-xl  p-1 w-5/6   mx-auto  text-left justify-between  lg:justify-center lg:w-11/12  break-words'>
                Si tiene alguna consulta o requiere información adicional, no dude en ponerse en contacto con nosotros.</p>        
                 </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="mt-2 w-5/6 ml-6     lg:ml-8 space-y-3  mx-auto  lg:w-full lg:h-full">
      <div className='flex  lg:flex-row lg:gap-1 lg:px-2'>
      <div className="flex flex-col lg:w-full ">
        <input
          {...register('nombre', { required: 'nombre obligatorio' })}
          className=" w-10/12 rounded-2xl  ml-4 mr-1 p-1 pl-4 bg-gray-100  border-1   lg:mr-0 "
          placeholder='Nombre'   
        />
        {errors.nombre && <p className="text-red-500 text-sm  ml-5 w-[90%] md:w-full ">{errors.nombre.message}</p>}
        </div>
        <div className="flex flex-col lg:w-full ">
               <input
          {...register('apellido', { required: 'apellido obligatorio' })}
          className="  w-10/12 rounded-2xl ml-3 mr-1 p-1  pl-4 bg-gray-100  border-1  lg:ml-0 lg:mr-0 "
          placeholder='Apellido'
        />
        {errors.apellido && <p className="text-red-500 text-sm  ml-4  w-[90%] md:w-full ">{errors.apellido.message}</p>}
      </div>
     </div>
      <div className='flex  lg:flex-row lg:gap-1 lg:px-2'>
      <div className="flex flex-col lg:w-full ">
             <input
          type="email"
          {...register('correo', { required: 'correo obligatorio' })}
          className=" w-10/12 rounded-2xl mr-1 ml-4 p-1 pl-4 bg-gray-100  border-1  lg:mr-0"
          placeholder='Correo'          
        />
        {errors.correo && <p className="text-red-500 text-sm  ml-5 w-[90%]  md:w-full ">{errors.correo.message}</p>}
       </div>
       <div className="flex flex-col lg:w-full">
               <input
          type="telefono"
          {...register('telefono', { required: 'telefono obligatorio' })}
          className=" w-10/12 rounded-2xl ml-3 mr-1 p-1 pl-4 bg-gray-100 border-1 lg:ml-0 "
          placeholder='Teléfono'
        />
        {errors.telefono && <p className="text-red-500 text-sm ml-3 w-[91%] md:w-full ">{errors.telefono.message}</p>}
      </div>
    </div>
      <div className='lg:flex-row lg:gap-1 lg:px-2  mb-1.5 w-full'>
        <textarea
          {...register('mensaje', { required: 'Mensaje no puede estar vacío' })}
          className="resize-none min-w-11/12 rounded-2xl ml-3 mr-3 min-h-auto h-36  bg-gray-100 pl-4 border-1 lg:min-w-9/10 "
          placeholder='Mensaje'    
        />
        {errors.mensaje && <p className="text-red-500 text-sm block w-full pl-4">{errors.mensaje.message}</p>}
      </div>

      <button
        type="submit"
        className=" px-4 py-2 rounded border-1   ml-5.5 hover:scale-110 lg:w-7/8 lg:py-3 lg:hover:scale-100"
        disabled={enviando} // para evitar doble envío
      >
         <span >
                {enviando ? 'Enviando...' : 'Enviar'}
        </span>
      </button>
      
      {mensajeEnviado && (
      <div className="mt-1 ml-6 mr-6 p-3 border-l-4 border-green-500 bg-green-100 text-green-700 rounded lg:w-7/8">
        {mensajeEnviado}
      </div>
)}

      </form>
   </div>
  );
}