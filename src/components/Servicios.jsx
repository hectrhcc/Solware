import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const servicios = [
  {
    titulo: 'One Page',
    precio: '120.000 CLP',
    imagen: 'https://images.unsplash.com/photo-1487014679447-9f8336841d58?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwcGFnZXxlbnwwfDB8MHx8fDI%3D',
  },
  {
    titulo: 'Landing Page',
    precio: '130.000 CLP',
    imagen: 'https://images.pexels.com/photos/234352/pexels-photo-234352.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    titulo: 'Sitio Corporativo',
    precio: '250.000 CLP',
    imagen: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    titulo: 'App móvil',
    precio: '500.000 CLP',
    imagen: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Servicios() {
  return (
    <>
      <h1
        className="text-2xl md:text-4xl lg:text-5xl font-bold color text-center mt-7 md:mt-10 mb-5"
        data-aos="fade-up"
      >
        SERVICIOS
      </h1>

      <p
        className="text-md md:text-lg w-11/12 md:w-2/3 lg:full mx-auto text-center lg:text-2xl mb-7"
        data-aos="fade-up"
      >
        Impulsa tu presencia online con soluciones web a medida para tu negocio.
      </p>

      <div className="w-[73%] md:w-4/5 lg:w-3/4 mx-auto mb-1" data-aos="zoom-in">
        <Swiper
          spaceBetween={20}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ el: '.swiper-custom-pagination', clickable: true }}
          loop={true}
          navigation={false}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3.5 },
          }}
        >
          {servicios.map((servicio, index) => (
            <SwiperSlide key={index}>
              <div className="tarjeta p-4 rounded-xl text-center shadow-md">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h3 className="text-xl font-bold mb-2">{servicio.titulo}</h3>
                <p className="text-lg font-semibold text-gray-700">{servicio.precio}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="swiper-custom-pagination flex justify-center mt-6"></div>

      {/* Estilos personalizados */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background: #aaa;
          opacity: 1;
          margin: 0 6px !important;
          width: 12px;
          height: 12px;
          border-radius: 50%;
        }

        .swiper-pagination-bullet-active {
          background: #1a183e;
        }

        .tarjeta {
          background: linear-gradient(145deg, #dcdcdc, #bfbfbf, #e8e8e8);
          border: 1px solid #bdbdbd;
          border-radius: 1rem;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.05);
        }
      `}</style>
    </>
  );
}
