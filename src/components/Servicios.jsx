import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

export default function Servicios() {
  return (
    <>
      <h1 className='text-4xl lg:text-5xl font-bold color text-center mt-7 lg:mt-10 mb-5'>
        SERVICIOS
      </h1>

      <p className='w-11/12 md:w-2/3 lg:w-1/2 mx-auto text-center text-lg lg:text-xl mb-5'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
      </p>

      <div className='w-[73%] md:w-4/5 lg:w-3/4 mx-auto mb-1 '>
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
            1024: { slidesPerView: 3.5 }, // Permite rotar en escritorio
          }}
        >
          {[1, 2, 3, 4].map((n) => (
            <SwiperSlide key={n}>
              <div className='border p-6 text-center rounded shadow'>
                Servicio {n}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination bullets debajo del carrusel */}
      <div className='swiper-custom-pagination flex justify-center mt-6'></div>

      {/* Estilos personalizados para bullets */}
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
          background: #1A183E;
        }
      `}</style>
    </>
  );
}
