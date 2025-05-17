import React from 'react'

const Mein = () => {
return(

<div className='fondo bg-white mx-auto mb-6 md:p-12 lg:p-0 lg:w-full '>
 <section className="  py-10 px-6 text-center lg:w-full ">
  
  <div className="max-w-3xl mx-auto space-y-8 lg:max-w-5xl ">
    <h3 className="text-2xl text-left lg:text-4xl font-semibold mb-2 color lg:text-center lg:mb-10">Nuestra Misión</h3>
    <div className='flex flex-col lg:flex-row-reverse lg:gap-8 lg:w-full '>
      
      <p className="text-md text-gray-700 text-justify mb-3 mt-2 lg:w-1/2 lg:text-2xl"  data-aos="fade-left">
  En Solware, ayudamos a personas y empresas a conectar con el mundo digital a través de soluciones web modernas, funcionales y personalizadas. Nos comprometemos a entregar un servicio cercano, transparente y de calidad, adaptado a las necesidades reales de nuestros clientes.
      </p>
       <video
  autoPlay
  muted
  loop
  playsInline
  className='w-auto lg:h-65 mt-3 lg:w-1/2  '
  style={{ borderRadius: '1.3rem'}}
 
   data-aos="fade-right"
>
  <source
    src="https://videos.pexels.com/video-files/5572860/5572860-sd_640_360_30fps.mp4"
    type="video/mp4"
  />
  Tu navegador no soporta la reproducción de video.
</video>
    </div>
    
      <h3 className="text-2xl lg:text-4xl text-left font-semibold mb-2 color lg:text-center lg:mb-10 lg:mt-14">Nuestra Visión</h3>
 <div className='flex flex-col lg:flex-row lg:gap-8 lg:w-full '>
      <p className="text-md text-gray-700 text-justify mb-3 mt-2 lg:w-1/2 lg:text-2xl" data-aos="fade-right">
        Ser una empresa reconocida en Chile por democratizar el acceso a tecnologías web, impulsando el crecimiento digital de emprendedores, pymes y profesionales con soluciones efectivas, asequibles y bien diseñadas.
      </p>
      <video
  autoPlay
  muted
  loop
  playsInline
  className='w-full lg:h-65 mt-3 lg:w-1/2 '
  style={{ borderRadius: '1.3rem'}}
 data-aos="fade-left"
>
  <source
    src="https://videos.pexels.com/video-files/5977258/5977258-sd_640_360_25fps.mp4"
    type="video/mp4"
  />
  Tu navegador no soporta la reproducción de video.
</video>
      
    </div>
  </div>
</section>

 </div>

)

}

export default Mein;