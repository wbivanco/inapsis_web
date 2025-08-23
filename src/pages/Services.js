import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Desarrollo de Bots con IA',
      description: 'Creamos bots inteligentes que pueden usar WhatsApp, estar embebidos en tu web y utilizar inteligencia artificial para ofrecer una experiencia excepcional a tus clientes.',
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
      title: 'Consultoría Estratégica en IA',
      description: 'Asesoramos a tu empresa en la implementación estratégica de inteligencia artificial para maximizar resultados y crear ventajas competitivas sostenibles.',
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
      title: 'Automatización de Procesos Empresariales',
      description: 'Optimizamos tus procesos empresariales con automatizaciones inteligentes que ahorran tiempo, recursos y maximizan la eficiencia operativa.',
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

  const aiApproaches = [
    {
      title: 'IA Tradicional',
      description: 'Basada en reglas, árboles de decisión y algoritmos clásicos para procesos estructurados y predecibles.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      examples: ['Sistemas de reglas de negocio', 'Árboles de decisión', 'Algoritmos de clasificación']
    },
    {
      title: 'IA Predictiva',
      description: 'Modelos de machine learning para anticipar comportamientos, tendencias y resultados futuros.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      ),
      examples: ['Predicción de ventas', 'Análisis de riesgo', 'Mantenimiento predictivo']
    },
    {
      title: 'IA Generativa',
      description: 'Tecnologías como LLMs para crear contenido, generar respuestas conversacionales y automatizar tareas creativas.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
      examples: ['Chatbots conversacionales', 'Generación de contenido', 'Asistentes virtuales']
    }
  ];

  const businessImpact = [
    {
      title: 'Optimización de Procesos Internos',
      description: 'Automatizamos tareas repetitivas y optimizamos flujos de trabajo para que tu equipo se enfoque en lo que realmente importa.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: 'Reducción de Costos Operativos',
      description: 'Minimizamos gastos operativos a través de la automatización inteligente y la optimización de recursos.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"/>
        </svg>
      )
    },
    {
      title: 'Maximización del ROI',
      description: 'Nuestras soluciones están diseñadas para generar retornos de inversión medibles y sostenibles a corto y largo plazo.',
      icon: (
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
        </svg>
      )
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
            para transformar tu negocio y maximizar su potencial a través de tres enfoques 
            complementarios de IA que se adaptan a tus necesidades específicas.
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
                  <div className={`bg-gradient-to-br from-${service.color} to-${service.color}-light rounded-2xl p-8 text-white h-80 flex items-center justify-center shadow-2xl hover:shadow-3xl transition-shadow duration-300 relative overflow-hidden`}>
                    {/* Elementos decorativos de fondo */}
                    <div className="absolute top-4 right-4 w-16 h-16 bg-white bg-opacity-10 rounded-full"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white bg-opacity-10 rounded-full"></div>
                    <div className="absolute top-1/2 left-4 w-8 h-8 bg-white bg-opacity-5 rounded-full"></div>
                    <div className="absolute top-1/3 right-8 w-6 h-6 bg-white bg-opacity-5 rounded-full"></div>
                    
                    <div className="text-center relative z-10">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                      <p className="opacity-90 mb-4">Solución personalizada para tu empresa</p>
                      
                      {/* Iconos adicionales según el servicio */}
                      <div className="flex justify-center space-x-4">
                        {service.id === 1 && (
                          <>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                              </svg>
                            </div>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                              </svg>
                            </div>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                              </svg>
                            </div>
                          </>
                        )}
                        {service.id === 2 && (
                          <>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
                              </svg>
                            </div>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </div>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
                              </svg>
                            </div>
                          </>
                        )}
                        {service.id === 3 && (
                          <>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
                              </svg>
                            </div>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"/>
                              </svg>
                            </div>
                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                              </svg>
                            </div>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enfoques de IA */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Enfoques de Inteligencia Artificial
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos tres enfoques complementarios de IA para crear soluciones 
              que se adaptan perfectamente a las necesidades específicas de tu empresa.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aiApproaches.map((approach, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-inapsis-orange rounded-full flex items-center justify-center mx-auto mb-6">
                  {approach.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{approach.title}</h3>
                <p className="text-gray-600 mb-6 text-center">{approach.description}</p>
                <div className="space-y-2">
                  {approach.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-inapsis-orange rounded-full"></div>
                      <span className="text-sm text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impacto en el negocio */}
      <section className="bg-white section-padding">
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
            {businessImpact.map((impact, index) => (
              <div key={index} className="text-center p-8 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                <div className="w-20 h-20 bg-inapsis-purple rounded-full flex items-center justify-center mx-auto mb-6">
                  {impact.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{impact.title}</h3>
                <p className="text-gray-600">{impact.description}</p>
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
