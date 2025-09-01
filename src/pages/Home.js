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
                  Desarrollo de bots con IA, consultoría estratégica y automatización de procesos 
                  empresariales que impulsan el crecimiento y la eficiencia de tu empresa.
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
                      <h3 className="font-semibold">Desarrollo de Bots IA</h3>
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
                      <h3 className="font-semibold">Consultoría Estratégica</h3>
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
                      <h3 className="font-semibold">Automatización Empresarial</h3>
                      <p className="text-sm opacity-90">Procesos optimizados</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de servicios principales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Servicios
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones integrales de inteligencia artificial que combinan 
              tres enfoques complementarios para maximizar el impacto en tu negocio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Desarrollo de Bots con IA</h3>
              <p className="text-gray-600 mb-4">
                Bots inteligentes para WhatsApp y web que ofrecen una experiencia 
                excepcional a tus clientes con inteligencia artificial avanzada.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• WhatsApp Business con IA</li>
                <li>• Chatbots embebidos en web</li>
                <li>• Procesamiento de lenguaje natural</li>
              </ul>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-inapsis-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Consultoría Estratégica en IA</h3>
              <p className="text-gray-600 mb-4">
                Asesoramiento especializado para implementar estrategias de IA 
                que creen ventajas competitivas sostenibles.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Auditoría de procesos</li>
                <li>• Roadmap de transformación</li>
                <li>• Capacitación de equipos</li>
              </ul>
            </div>
            
            <div className="text-center p-8 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Automatización de Procesos</h3>
              <p className="text-gray-600 mb-4">
                Optimización de procesos empresariales con automatizaciones 
                inteligentes que maximizan la eficiencia operativa.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Workflows inteligentes</li>
                <li>• Integración entre sistemas</li>
                <li>• Monitoreo automático</li>
              </ul>
            </div>
          </div>

          {/* Enfoques de IA */}
          <div className="text-center mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Nuestros Enfoques de IA
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
              Combinamos tres enfoques complementarios para crear soluciones 
              que se adaptan perfectamente a tus necesidades específicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">IA Tradicional</h4>
              <p className="text-sm text-gray-600">
                Reglas, árboles de decisión y algoritmos clásicos para procesos estructurados.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">IA Predictiva</h4>
              <p className="text-sm text-gray-600">
                Machine learning para anticipar comportamientos y resultados futuros.
              </p>
            </div>
            
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">IA Generativa</h4>
              <p className="text-sm text-gray-600">
                LLMs para crear contenido y generar respuestas conversacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de impacto en el negocio */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Impacto en tu Negocio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestras soluciones de IA impactan directamente en tres áreas clave 
              que determinan el éxito y la rentabilidad de cualquier empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Optimización de Procesos</h3>
              <p className="text-gray-600">
                Automatizamos tareas repetitivas y optimizamos flujos de trabajo 
                para que tu equipo se enfoque en lo que realmente importa.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-inapsis-purple rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Reducción de Costos</h3>
              <p className="text-gray-600">
                Minimizamos gastos operativos a través de la automatización 
                inteligente y la optimización de recursos.
              </p>
            </div>
            
            <div className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Maximización del ROI</h3>
              <p className="text-gray-600">
                Nuestras soluciones están diseñadas para generar retornos de 
                inversión medibles y sostenibles a corto y largo plazo.
              </p>
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

      {/* Casos de Éxito Preview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Éxito
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubre cómo hemos transformado empresas de diversos sectores 
              con soluciones de IA innovadoras.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gradient-to-br from-inapsis-orange to-inapsis-orange-light rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">🎓</div>
              <h3 className="text-xl font-bold mb-2">Sector Educativo</h3>
              <p className="opacity-90">Bot conversacional para gestión de trámites administrativos</p>
            </div>
            
            <div className="bg-gradient-to-br from-inapsis-purple to-inapsis-purple-light rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">🌾</div>
              <h3 className="text-xl font-bold mb-2">Agroindustria</h3>
              <p className="opacity-90">Administración de documentación interna y procesamiento contable</p>
            </div>
            
            <div className="bg-gradient-to-br from-inapsis-orange to-inapsis-orange-light rounded-2xl p-6 text-white text-center">
              <div className="text-4xl mb-4">💻</div>
              <h3 className="text-xl font-bold mb-2">Software</h3>
              <p className="opacity-90">Generación automática de casos de testing y documentación técnica</p>
            </div>
          </div>
          
          <div className="text-center">
            <Link to="/casos-exito" className="btn-outline">
              Ver todos los casos de éxito
            </Link>
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
