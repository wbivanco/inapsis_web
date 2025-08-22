import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Plataforma de Bots IA',
      description: 'Desarrollamos chatbots inteligentes que automatizan la atención al cliente y mejoran la experiencia del usuario.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      features: [
        'Chatbots conversacionales avanzados',
        'Integración con WhatsApp, Telegram y web',
        'Procesamiento de lenguaje natural',
        'Análisis de sentimientos',
        'Integración con CRM y sistemas existentes',
        'Reportes y analytics en tiempo real'
      ],
      color: 'inapsis-orange'
    },
    {
      id: 2,
      title: 'Consultoría en IA',
      description: 'Asesoramos a tu empresa en la implementación estratégica de inteligencia artificial para maximizar resultados.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      features: [
        'Auditoría de procesos actuales',
        'Estrategia de implementación de IA',
        'Análisis de viabilidad técnica',
        'Roadmap de transformación digital',
        'Capacitación de equipos',
        'Seguimiento y optimización continua'
      ],
      color: 'inapsis-purple'
    },
    {
      id: 3,
      title: 'Automatizaciones',
      description: 'Optimizamos tus procesos empresariales con automatizaciones inteligentes que ahorran tiempo y recursos.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      features: [
        'Automatización de procesos repetitivos',
        'Integración entre sistemas',
        'Workflows inteligentes',
        'Automatización de marketing',
        'Gestión automatizada de datos',
        'Monitoreo y alertas automáticas'
      ],
      color: 'inapsis-orange'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nuestros{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-inapsis-orange to-inapsis-purple">
              Servicios
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ofrecemos soluciones integrales de inteligencia artificial diseñadas 
            para transformar tu negocio y maximizar su potencial.
          </p>
        </div>
      </section>

      {/* Servicios principales */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                {/* Contenido */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className={`w-20 h-20 bg-${service.color} rounded-2xl flex items-center justify-center text-white mb-6`}>
                    {service.icon}
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className={`w-5 h-5 bg-${service.color} rounded-full flex items-center justify-center`}>
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                          </svg>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <Link to="/contacto" className={`btn-primary bg-${service.color} hover:bg-${service.color}-light`}>
                    Solicitar cotización
                  </Link>
                </div>
                
                {/* Imagen/Ilustración */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className={`bg-gradient-to-br from-${service.color} to-${service.color}-light rounded-2xl p-8 text-white h-80 flex items-center justify-center`}>
                    <div className="text-center">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
                      <p className="opacity-90">Solución personalizada para tu empresa</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Seguimos una metodología probada que garantiza el éxito de cada proyecto.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Análisis</h3>
              <p className="text-gray-600">
                Evaluamos tus necesidades y objetivos para diseñar la solución perfecta.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-inapsis-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Diseño</h3>
              <p className="text-gray-600">
                Creamos un plan detallado y prototipos para validar la solución.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Desarrollo</h3>
              <p className="text-gray-600">
                Implementamos la solución con las mejores prácticas y tecnologías.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-inapsis-purple rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                4
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Soporte</h3>
              <p className="text-gray-600">
                Acompañamos el lanzamiento y brindamos soporte continuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-inapsis-orange to-inapsis-purple text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Necesitas una solución personalizada?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Cada empresa es única. Contáctanos para crear una solución 
            de IA adaptada específicamente a tus necesidades.
          </p>
          <Link to="/contacto" className="bg-white text-inapsis-orange font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
            ¡Hablemos de tu proyecto!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
