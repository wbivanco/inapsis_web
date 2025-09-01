import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'Bot Conversacional para Gestión de Trámites Administrativos',
      sector: 'Educación',
      description: 'Desarrollo de un chatbot inteligente que automatiza la gestión de trámites administrativos en instituciones educativas, mejorando la eficiencia operativa y la experiencia del usuario.',
      benefits: [
        'Reducción del 70% en tiempo de respuesta',
        'Automatización de 15 tipos de trámites',
        'Disponibilidad 24/7 para consultas',
        'Integración con sistemas educativos existentes'
      ],
      technologies: ['NLP', 'LLM', 'Azure', 'WhatsApp Business API'],
      image: '🎓',
      color: 'inapsis-orange'
    },
    {
      id: 2,
      title: 'Bot Conversacional para Administración de Documentación Interna',
      sector: 'Agroindustria',
      description: 'Sistema inteligente que gestiona y organiza la documentación interna de empresas agropecuarias, facilitando el acceso y control de información crítica.',
      benefits: [
        'Organización automática de 500+ documentos',
        'Búsqueda inteligente por contenido',
        'Control de versiones automatizado',
        'Acceso seguro desde cualquier dispositivo'
      ],
      technologies: ['LangChain', 'OpenAI', 'AWS', 'Búsqueda semántica'],
      image: '🌾',
      color: 'inapsis-purple'
    },
    {
      id: 3,
      title: 'Bot Procedural para Generación de Casos de Testing',
      sector: 'Software',
      description: 'Agente inteligente que genera automáticamente casos de testing para aplicaciones de software, aumentando la cobertura y calidad de las pruebas.',
      benefits: [
        'Generación automática de 1000+ casos de prueba',
        'Cobertura de testing del 95%',
        'Reducción del 80% en tiempo de creación',
        'Detección temprana de bugs críticos'
      ],
      technologies: ['LLM', 'AI Testing', 'Azure OpenAI', 'FastAPI'],
      image: '💻',
      color: 'inapsis-orange'
    },
    {
      id: 4,
      title: 'Agente de Generación de Documentación Técnica',
      sector: 'Tecnología',
      description: 'Sistema que automatiza la creación de documentación técnica para proyectos de desarrollo de software, manteniendo consistencia y actualización automática.',
      benefits: [
        'Generación automática de documentación',
        'Actualización en tiempo real',
        'Consistencia en formato y contenido',
        'Integración con repositorios de código'
      ],
      technologies: ['Python', 'OpenAI', 'FastAPI', 'Docker'],
      image: '📚',
      color: 'inapsis-purple'
    },
    {
      id: 5,
      title: 'Agente de Procesamiento de Comprobantes Contables por WhatsApp',
      sector: 'Agroindustria',
      description: 'Solución que procesa automáticamente comprobantes contables enviados por WhatsApp, digitalizando y organizando la información financiera.',
      benefits: [
        'Procesamiento automático de comprobantes',
        'Integración directa con sistemas contables',
        'Reducción del 90% en tiempo de procesamiento',
        'Validación automática de datos'
      ],
      technologies: ['WhatsApp Business API', 'OCR', 'LangGraph', 'LandSmith'],
      image: '📱',
      color: 'inapsis-orange'
    }
  ];

  const sectors = ['Educación', 'Agroindustria', 'Software', 'Tecnología'];
  
  // Estado para el carrusel de tecnologías
  const [currentPage, setCurrentPage] = useState(0);
  const totalPages = 6; // 6 páginas con 4 tecnologías cada una
  
  // Función para mover el carrusel
  const moveCarousel = (direction) => {
    setCurrentPage(prevPage => {
      if (direction === 1) {
        return prevPage === totalPages - 1 ? 0 : prevPage + 1;
      } else {
        return prevPage === 0 ? totalPages - 1 : prevPage - 1;
      }
    });
  };
  
  // Función para ir a una página específica
  const goToPage = (page) => {
    setCurrentPage(page);
  };
  
  // Auto-play del carrusel
  useEffect(() => {
    const interval = setInterval(() => {
      moveCarousel(1);
    }, 5000); // Cambia cada 5 segundos
    
    return () => clearInterval(interval);
  }, []);
  
  // Calcular la transformación del carrusel
  const getCarouselTransform = () => {
    return `translateX(-${currentPage * 100}%)`;
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Casos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-inapsis-orange to-inapsis-purple">
              Éxito
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Descubre cómo Inapsis ha transformado empresas de diversos sectores 
            con soluciones de inteligencia artificial innovadoras y efectivas.
          </p>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-inapsis-orange mb-2">5+</div>
              <div className="text-gray-600">Casos de Éxito</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-inapsis-purple mb-2">4</div>
              <div className="text-gray-600">Sectores</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-inapsis-orange mb-2">70%</div>
              <div className="text-gray-600">Mejora Promedio</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-inapsis-purple mb-2">24/7</div>
              <div className="text-gray-600">Disponibilidad</div>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Éxito */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Soluciones Implementadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cada caso representa una transformación digital exitosa que ha generado 
              valor tangible para nuestros clientes.
            </p>
          </div>
          
          <div className="space-y-12">
            {caseStudies.map((study, index) => (
              <div key={study.id} className={`bg-white rounded-2xl shadow-lg overflow-hidden ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Imagen/Icono */}
                  <div className={`bg-gradient-to-br from-${study.color} to-${study.color}-light p-12 flex items-center justify-center`}>
                    <div className="text-center text-white">
                      <div className="text-8xl mb-4">{study.image}</div>
                      <h3 className="text-2xl font-bold mb-2">{study.sector}</h3>
                      <p className="opacity-90">Sector de aplicación</p>
                    </div>
                  </div>
                  
                  {/* Contenido */}
                  <div className="p-8 lg:p-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {study.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">Beneficios Logrados:</h4>
                      <ul className="space-y-2">
                        {study.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-center space-x-2">
                            <div className={`w-2 h-2 bg-${study.color} rounded-full`}></div>
                            <span className="text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Tecnologías Utilizadas:</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, techIndex) => (
                          <span key={techIndex} className={`bg-${study.color} bg-opacity-10 text-${study.color} px-3 py-1 rounded-full text-sm font-medium`}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectores de Experiencia */}
      <section className="bg-white section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Sectores de Experiencia
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nuestra experiencia abarca múltiples industrias, adaptando soluciones 
              de IA a las necesidades específicas de cada sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sectors.map((sector, index) => (
              <div key={index} className="text-center p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className={`w-16 h-16 bg-${index % 2 === 0 ? 'inapsis-orange' : 'inapsis-purple'} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-2xl">
                    {index === 0 ? '🎓' : index === 1 ? '🌾' : index === 2 ? '💻' : '🚀'}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{sector}</h3>
                <p className="text-gray-600">
                  {index === 0 ? 'Chatbots inteligentes para automatización de procesos educativos y gestión administrativa' :
                   index === 1 ? 'Soluciones de IA para optimización de procesos agropecuarios y gestión documental' :
                   index === 2 ? 'Herramientas de testing automatizado y generación de casos de prueba inteligentes' :
                   'Sistemas de documentación automática y generación de contenido técnico con IA'}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tecnologías Utilizadas */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologías Utilizadas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos las tecnologías más avanzadas y confiables del mercado 
              para crear soluciones de IA robustas y escalables.
            </p>
          </div>
          
          {/* Carrusel de Tecnologías */}
          <div className="relative">
            {/* Contenedor del carrusel */}
            <div className="overflow-hidden">
              <div 
                className="flex transition-transform duration-500 ease-in-out" 
                id="tech-carousel"
                style={{ transform: getCarouselTransform() }}
              >
                {/* Cloud & Infrastructure */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 p-2 shadow-sm">
                      <img 
                        src="/images/aws.png" 
                        alt="AWS Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Amazon Web Services</h3>
                    <p className="text-gray-600 text-sm">Infraestructura cloud escalable y servicios gestionados</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 p-2 shadow-sm">
                      <img 
                        src="/images/azure.jpeg" 
                        alt="Azure Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Microsoft Azure</h3>
                    <p className="text-gray-600 text-sm">Plataforma cloud integral con servicios de IA</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center mx-auto mb-4 p-2 shadow-sm">
                      <img 
                        src="/images/docker.png" 
                        alt="Docker Logo" 
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Containerization</h3>
                    <p className="text-gray-600 text-sm">Empaquetado y despliegue consistente de aplicaciones</p>
                  </div>
                </div>

                {/* AI & Machine Learning */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">LLM</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Large Language Models</h3>
                    <p className="text-gray-600 text-sm">Modelos de lenguaje avanzados para IA conversacional</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-600 to-green-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">Azure</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Azure OpenAI</h3>
                    <p className="text-gray-600 text-sm">Servicios de IA empresarial de Microsoft</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">OpenAI</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">OpenAI API</h3>
                    <p className="text-gray-600 text-sm">Acceso a modelos de IA de última generación</p>
                  </div>
                </div>

                {/* LangChain Ecosystem */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">LC</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">LangChain</h3>
                    <p className="text-gray-600 text-sm">Framework para construir aplicaciones con LLMs</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">LG</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">LangGraph</h3>
                    <p className="text-gray-600 text-sm">Construcción de agentes de IA complejos</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">LS</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">LangSmith</h3>
                    <p className="text-gray-600 text-sm">Observabilidad y debugging para aplicaciones LLM</p>
                  </div>
                </div>

                {/* Backend & APIs */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">FA</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">FastAPI</h3>
                    <p className="text-gray-600 text-sm">Framework web moderno y rápido para Python</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">Py</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Python</h3>
                    <p className="text-gray-600 text-sm">Lenguaje principal para desarrollo de IA</p>
                  </div>
                </div>

                {/* Data & Search */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">Ch</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Chroma</h3>
                    <p className="text-gray-600 text-sm">Base de datos vectorial para embeddings</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">ES</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Elasticsearch</h3>
                    <p className="text-gray-600 text-sm">Motor de búsqueda y análisis de datos</p>
                  </div>
                </div>

                {/* Frontend & UI */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">St</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Streamlit</h3>
                    <p className="text-gray-600 text-sm">Creación rápida de apps web para ML</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo-600 to-indigo-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">AA</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">Azure Apps</h3>
                    <p className="text-gray-600 text-sm">Servicios de aplicaciones web gestionadas</p>
                  </div>
                </div>

                {/* Message Queues */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">RMQ</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">RabbitMQ</h3>
                    <p className="text-gray-600 text-sm">Sistema de mensajería asíncrona</p>
                  </div>
                </div>

                {/* Web Technologies */}
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">R</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">React</h3>
                    <p className="text-gray-600 text-sm">Framework frontend para interfaces modernas</p>
                  </div>
                </div>
                
                <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 px-3">
                  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">JS</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-lg mb-2">JavaScript</h3>
                    <p className="text-gray-600 text-sm">Lenguaje web para desarrollo frontend</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Botones de navegación */}
            <button 
              onClick={() => moveCarousel(-1)} 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={() => moveCarousel(1)} 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-200 z-10"
              aria-label="Siguiente"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Indicadores de página */}
            <div className="flex justify-center mt-8 space-x-2">
              {[0, 1, 2, 3, 4, 5].map((page) => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentPage === page ? 'bg-inapsis-orange' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir a página ${page + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-inapsis-orange to-inapsis-purple text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres ser nuestro próximo caso de éxito?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Transforma tu empresa con soluciones de inteligencia artificial 
            personalizadas y comprobadas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contacto" className="bg-white text-inapsis-orange font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
              ¡Hablemos de tu proyecto!
            </Link>
            <Link to="/servicios" className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-inapsis-orange transition-colors duration-300 inline-block">
              Conoce nuestros servicios
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
