import React from 'react';
import Servicios from '../components/Servicios';

const ServiciosPage = () => {
  return (
    <div className="w-full mb-20 px-4 md:px-10 lg:max-w-6xl mx-auto text-gray-800">
      <div className="mt-15">
      <Servicios />
      </div>
      <section className="mt-12 space-y-10 lg:w-[87%] lg:mx-auto ">
        {/* One Page */}
        <article className="divporta bg-[#fafbfd] p-6 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.5)] text-justify break-words" data-aos="flip-down ">
          <h3 className="text-2xl font-semibold mb-3 color">📄 One Page </h3>
          <p > 
            Una página web completa con todo el contenido en una sola URL, sin navegación a otras páginas internas.
          </p>
          <p  >
            Ideal para negocios pequeños, portfolios personales, currículums online o eventos.
          </p>
          <p >
            Contiene secciones como Servicios, Sobre mí, Testimonios, Contacto y enlaces que llevan a diferentes partes de la página.
          </p>
           <h3 className="text-lg font-semibold mt-2 mb-2">Descripción:</h3>
<ul className="list-disc-none list-inside mb-4 color">
    <li>✔️ Dominio por 1 año</li>
    <li>✔️ Hosting compartido por 1 año </li>
    <li>✔️ Diseño web personalizado</li>
    <li>✔️ Levantamiento de hasta 5 secciones en la misma página</li>
    <li>✔️ Optimización básica para SEO</li>
    <li>✔️ Responsive para móviles y tablets</li>
  </ul>

          <p><strong>Precio:</strong> 120.000 CLP</p>

        </article>

        {/* Landing Page */}
        <article className="divporta bg-[#fafbfd] p-6 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.5)] " data-aos="flip-down">
          <h2 className="text-2xl font-semibold mb-3 color">📈 Landing Page</h2>
          <p>
            Página diseñada para convertir visitantes en clientes, suscriptores o cualquier acción que quieras lograr.
          </p>
          <p>
            Usada en campañas de marketing, promociones o lanzamiento de productos y servicios.
          </p>
          <p>
            Diseño enfocado en una única meta, sin distracciones y con llamados a la acción claros y persuasivos.
          </p>
        <h3 className="text-lg font-semibold mt-2 mb-2">Descripción:</h3>
  <ul className="list-disc-none list-inside mb-4 color">
    <li>✔️ Dominio por 1 año</li>
    <li>✔️ Hosting compartido por 1 año</li>
    <li>✔️ Diseño enfocado en conversión y llamada a la acción (CTA)</li>
    <li>✔️ Contenido y estructura optimizada para marketing</li>
    <li>✔️ Integración con formularios o suscripciones</li>
    <li>✔️ Optimización para velocidad y SEO básico</li>
  </ul>
          <p><strong>Precio:</strong> 130.000 CLP</p>
        </article>

        {/* Sitio Corporativo */}
        <article className="divporta bg-[#fafbfd] p-6 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.5)] " data-aos="flip-down">
          <h2 className="text-2xl font-semibold mb-3 color">🏢 Sitio Corporativo</h2>
          <p>
            Páginas profesionales para empresas con varias secciones: Nosotros, Servicios, Blog, Contacto, entre otras.
          </p>
          <p>
            Ideal para fortalecer la presencia digital y comunicar la identidad y oferta de la empresa.
          </p>
          <h3 className="text-lg font-semibold mt-2 mb-2">Descripción:</h3>
          <ul className="list-disc-none list-inside mb-4 color">
    <li>✔️ Dominio por 1 año</li>
    <li>✔️ Hosting compartido o dedicado según necesidades</li>
    <li>✔️ Diseño corporativo profesional</li>
    <li>✔️ Levantamiento de hasta 10 páginas internas (Nosotros, Servicios, Blog, Contacto...)</li>
    <li>✔️ Integración con blog o noticias (CMS básico opcional)</li>
    <li>✔️ Optimización SEO avanzada</li>
    <li>✔️ Soporte técnico y mantenimiento básico por 3 meses</li>
  </ul>
          <p><strong>Precio:</strong> 250.000 CLP</p>
        </article>

        {/* Desarrollo de Aplicaciones */}
        <article className="divporta bg-[#fafbfd] p-6 rounded-lg shadow-[0_2px_10px_rgba(0,0,0,0.5)] " data-aos="flip-down">
          <h2 className="text-2xl font-semibold mb-3 color">📱 Aplicación Móvil</h2>
          <p>
            Creamos aplicaciones móviles y web a medida, adaptadas a tus necesidades específicas.
          </p>
                  <ul className="list-disc-none list-inside mb-4 color">
             <h3 className="text-lg font-semibold mt-2 mb-2">Descripción:</h3>
    <li>✔️ Análisis y definición de requerimientos personalizados</li>
    <li>✔️ Diseño UI/UX moderno y escalable</li>
    <li>✔️ Desarrollo a medida</li>
    <li>✔️ Pruebas de calidad y performance</li>
    <li>✔️ Soporte técnico durante el proyecto</li>
    <li>✔️ Publicación en tiendas (App Store, Google Play) si aplica</li>
    <li>✔️ Capacitación básica para uso y administración</li>
  </ul>
          <p>El precio puede variar según la complejidad del proyecto.</p>
          <p>Desde<strong> 500.000 CLP</strong></p>
        </article>
      </section>
    </div>
  );
};

export default ServiciosPage;
