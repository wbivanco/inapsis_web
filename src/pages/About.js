import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  const values = [
    {
      title: 'Innovación',
      description: 'Buscamos constantemente nuevas formas de aplicar la IA para resolver desafíos empresariales.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M13 10V3L4 14h7v7l9-11h-7z"/>
        </svg>
      )
    },
    {
      title: 'Excelencia',
      description: 'Nos comprometemos a entregar soluciones de la más alta calidad que superen las expectativas.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      title: 'Colaboración',
      description: 'Trabajamos en estrecha colaboración con nuestros clientes para lograr resultados excepcionales.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
        </svg>
      )
    },
    {
      title: 'Impacto',
      description: 'Nos enfocamos en crear soluciones que generen un impacto real y medible en el negocio.',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      )
    }
  ];

  const team = [
    {
      name: 'Dr. Ana Martínez',
      role: 'CEO & Fundadora',
      description: 'Experta en IA con más de 15 años en el sector tecnológico.',
      image: '👩‍💼'
    },
    {
      name: 'Ing. Carlos Rodríguez',
      role: 'CTO',
      description: 'Especialista en machine learning y arquitectura de sistemas.',
      image: '👨‍💻'
    },
    {
      name: 'Lic. María González',
      role: 'Directora de Consultoría',
      description: 'Consultora estratégica con amplia experiencia en transformación digital.',
      image: '👩‍💼'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Sobre{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-inapsis-orange to-inapsis-purple">
              Inapsis
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Somos una empresa líder en inteligencia artificial, comprometida con 
            transformar negocios a través de soluciones tecnológicas innovadoras.
          </p>
        </div>
      </section>

      {/* Misión y Visión */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Misión */}
            <div className="bg-gradient-to-br from-inapsis-orange to-inapsis-orange-light rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Democratizar el acceso a la inteligencia artificial, proporcionando 
                soluciones accesibles y efectivas que permitan a las empresas de 
                todos los tamaños aprovechar el poder de la IA para crecer y 
                competir en el mercado global.
              </p>
            </div>

            {/* Visión */}
            <div className="bg-gradient-to-br from-inapsis-purple to-inapsis-purple-light rounded-2xl p-8 text-white">
              <div className="w-16 h-16 bg-white bg-opacity-20 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                  <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4">Nuestra Visión</h2>
              <p className="text-lg leading-relaxed opacity-90">
                Ser la empresa de referencia en Latinoamérica para soluciones de 
                inteligencia artificial, reconocida por la innovación, calidad y 
                el impacto transformador que generamos en nuestros clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Estos principios guían cada decisión y acción en Inapsis.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="w-12 h-12 bg-inapsis-orange rounded-lg flex items-center justify-center text-white mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historia */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <div className="space-y-6 text-lg text-gray-600">
                <p>
                  Inapsis nació en 2020 con la visión de hacer la inteligencia artificial 
                  accesible para empresas de todos los tamaños. Fundada por un equipo de 
                  expertos en IA y emprendedores tecnológicos, comenzamos con un objetivo 
                  claro: democratizar la tecnología más avanzada.
                </p>
                <p>
                  Desde nuestros inicios, hemos trabajado con más de 50 empresas, 
                  desde startups hasta grandes corporaciones, ayudándolas a implementar 
                  soluciones de IA que transforman sus operaciones y resultados.
                </p>
                <p>
                  Hoy, somos reconocidos como una de las empresas líderes en el sector 
                  de IA en Latinoamérica, con un equipo de más de 20 profesionales 
                  especializados y una cartera de proyectos exitosos que habla por sí sola.
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-inapsis-orange to-inapsis-purple rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-6">Nuestros Logros</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">50+</span>
                  </div>
                  <div>
                    <div className="font-semibold">Proyectos Exitosos</div>
                    <div className="text-sm opacity-90">Implementados en diversos sectores</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">95%</span>
                  </div>
                  <div>
                    <div className="font-semibold">Satisfacción del Cliente</div>
                    <div className="text-sm opacity-90">Basado en encuestas post-proyecto</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-bold">3</span>
                  </div>
                  <div>
                    <div className="font-semibold">Años de Experiencia</div>
                    <div className="text-sm opacity-90">En el mercado de IA</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="bg-gray-50 section-padding">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conoce a los expertos que hacen posible la transformación digital de nuestros clientes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-inapsis-orange to-inapsis-purple rounded-full flex items-center justify-center text-3xl mx-auto mb-4">
                  {member.image}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-inapsis-orange font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-inapsis-orange to-inapsis-purple text-white section-padding">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Quieres ser parte de nuestra historia?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a las empresas que ya han transformado su negocio con Inapsis. 
            Estamos aquí para ayudarte a escribir tu propio éxito.
          </p>
          <Link to="/contacto" className="bg-white text-inapsis-orange font-semibold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-300 inline-block">
            ¡Hablemos de tu proyecto!
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
