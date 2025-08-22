import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Plataforma de Bots IA',
      description: 'Desarrollamos bots inteligentes que pueden usar WhatsApp, estar embebidos en tu web y utilizar inteligencia artificial para ofrecer una experiencia excepcional.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      features: [
        'Bots para WhatsApp Business con IA',
        'Chatbots embebidos en tu sitio web',
        'Inteligencia artificial conversacional',
        'Procesamiento de lenguaje natural',
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

      {/* Capacidades de los Bots */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Bots Pueden
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ofrecemos soluciones versátiles que se adaptan a tus necesidades específicas.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usar WhatsApp</h3>
              <p className="text-gray-600 mb-4">
                Integración completa con WhatsApp Business para atención al cliente 24/7
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Respuestas automáticas inteligentes</li>
                <li>• Gestión de pedidos y consultas</li>
                <li>• Integración con catálogos</li>
                <li>• Notificaciones automáticas</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Estar Embebidos en Web</h3>
              <p className="text-gray-600 mb-4">
                Chatbots integrados directamente en tu sitio web para capturar leads
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Widget personalizable</li>
                <li>• Captura de contactos</li>
                <li>• Navegación asistida</li>
                <li>• Soporte en tiempo real</li>
              </ul>
            </div>
            
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Usar Inteligencia Artificial</h3>
              <p className="text-gray-600 mb-4">
                Bots inteligentes que aprenden y mejoran con cada interacción
              </p>
              <ul className="text-sm text-gray-500 space-y-2">
                <li>• Procesamiento de lenguaje natural</li>
                <li>• Aprendizaje automático</li>
                <li>• Respuestas contextuales</li>
                <li>• Análisis de sentimientos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proceso de trabajo */}
      <section className="bg-white section-padding">
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
