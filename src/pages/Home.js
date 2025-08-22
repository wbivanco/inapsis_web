import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contenido principal */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Transformamos tu negocio con{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-inapsis-orange to-inapsis-purple">
                    Inteligencia Artificial
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Plataforma de bots IA para WhatsApp y web, consultoría especializada y automatizaciones 
                  que impulsan el crecimiento y la eficiencia de tu empresa.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contacto" className="btn-primary text-center">
                  ¡Hablemos de tu proyecto!
                </Link>
                <Link to="/servicios" className="btn-outline text-center">
                  Conoce nuestros servicios
                </Link>
              </div>
            </div>
            
            {/* Imagen/Ilustración */}
            <div className="relative">
              <div className="bg-gradient-to-br from-inapsis-orange to-inapsis-purple rounded-2xl p-8 text-white">
                <div className="space-y-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Bots Inteligentes</h3>
                      <p className="text-sm opacity-90">WhatsApp, Web e IA</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Consultoría IA</h3>
                      <p className="text-sm opacity-90">Estrategias personalizadas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Automatizaciones</h3>
                      <p className="text-sm opacity-90">Procesos optimizados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de características */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ¿Por qué elegir Inapsis?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos tecnología de vanguardia con experiencia empresarial 
              para ofrecer soluciones que realmente transforman tu negocio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Bots Multiplataforma</h3>
              <p className="text-gray-600">
                Nuestros bots funcionan en WhatsApp Business y se integran perfectamente 
                en tu sitio web con inteligencia artificial avanzada.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-inapsis-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Experiencia Comprobada</h3>
              <p className="text-gray-600">
                Más de 20 años de experiencia en el desarrollo de software 
                y 6 años en la implementación de soluciones de IA.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Resultados Rápidos</h3>
              <p className="text-gray-600">
                Implementamos soluciones que generan valor inmediato y 
                mejoran la eficiencia desde el primer día.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-inapsis-orange to-inapsis-purple text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para transformar tu negocio?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Agenda una consulta gratuita y descubre cómo la inteligencia artificial 
            puede impulsar el crecimiento de tu empresa.
          </p>
          <Link to="/contacto" className="bg-white text-inapsis-orange font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
            ¡Agenda tu consulta gratuita!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
