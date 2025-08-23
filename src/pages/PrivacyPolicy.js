import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Política de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-inapsis-orange to-inapsis-purple">
              Privacidad
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Protegemos tu privacidad y datos personales con los más altos estándares de seguridad.
          </p>
        </div>
      </section>

      {/* Contenido */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <div className="mb-8">
              <p className="text-gray-600">
                <strong>Última actualización:</strong> {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Información que Recopilamos</h2>
                <p className="text-gray-700 mb-4">
                  En Inapsis, recopilamos la siguiente información personal cuando utilizas nuestros servicios:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Información de contacto:</strong> Nombre, dirección de correo electrónico, número de teléfono y empresa</li>
                  <li><strong>Información del proyecto:</strong> Detalles sobre tu proyecto, necesidades específicas y objetivos</li>
                  <li><strong>Datos de uso:</strong> Información sobre cómo utilizas nuestros servicios y plataformas</li>
                  <li><strong>Información técnica:</strong> Datos sobre tu dispositivo, navegador y conexión a internet</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Cómo Utilizamos tu Información</h2>
                <p className="text-gray-700 mb-4">
                  Utilizamos tu información personal para:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Proporcionar y mejorar nuestros servicios de inteligencia artificial</li>
                  <li>Comunicarnos contigo sobre tu proyecto y consultas</li>
                  <li>Enviar información relevante sobre nuestros servicios</li>
                  <li>Personalizar tu experiencia y ofrecer contenido adaptado</li>
                  <li>Cumplir con obligaciones legales y regulatorias</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Compartir Información</h2>
                <p className="text-gray-700 mb-4">
                  No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto en las siguientes circunstancias:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Con tu consentimiento:</strong> Cuando nos autorices explícitamente</li>
                  <li><strong>Requisitos legales:</strong> Cuando la ley lo requiera o para proteger nuestros derechos</li>
                  <li><strong>Seguridad:</strong> Para prevenir fraudes y proteger la seguridad de nuestros usuarios</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Seguridad de Datos</h2>
                <p className="text-gray-700 mb-4">
                  Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Encriptación de datos en tránsito y en reposo</li>
                  <li>Acceso restringido a información personal</li>
                  <li>Monitoreo regular de seguridad</li>
                  <li>Capacitación del personal en protección de datos</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies y Tecnologías de Seguimiento</h2>
                <p className="text-gray-700 mb-4">
                  Utilizamos cookies y tecnologías similares para:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Mejorar la funcionalidad de nuestro sitio web</li>
                  <li>Analizar el tráfico y uso de la plataforma</li>
                  <li>Personalizar tu experiencia</li>
                  <li>Recordar tus preferencias</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Puedes controlar el uso de cookies a través de la configuración de tu navegador.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Tus Derechos</h2>
                <p className="text-gray-700 mb-4">
                  Tienes los siguientes derechos sobre tu información personal:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Acceso:</strong> Solicitar una copia de tus datos personales</li>
                  <li><strong>Rectificación:</strong> Corregir información inexacta o incompleta</li>
                  <li><strong>Eliminación:</strong> Solicitar la eliminación de tus datos personales</li>
                  <li><strong>Portabilidad:</strong> Recibir tus datos en formato estructurado</li>
                  <li><strong>Oposición:</strong> Oponerte al procesamiento de tus datos</li>
                  <li><strong>Limitación:</strong> Solicitar la limitación del procesamiento</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Retención de Datos</h2>
                <p className="text-gray-700">
                  Conservamos tu información personal solo durante el tiempo necesario para cumplir con los propósitos descritos en esta política, o según lo requiera la ley. Cuando ya no necesitemos tu información, la eliminaremos de forma segura.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Transferencias Internacionales</h2>
                <p className="text-gray-700">
                  Tu información puede ser transferida y procesada en países fuera de tu residencia. Nos aseguramos de que estas transferencias cumplan con las leyes de protección de datos aplicables y que tus datos estén protegidos adecuadamente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Menores de Edad</h2>
                <p className="text-gray-700">
                  Nuestros servicios no están dirigidos a menores de 18 años. No recopilamos intencionalmente información personal de menores de edad. Si eres padre o tutor y crees que tu hijo nos ha proporcionado información personal, contáctanos inmediatamente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Cambios a esta Política</h2>
                <p className="text-gray-700">
                  Podemos actualizar esta política de privacidad ocasionalmente. Te notificaremos sobre cualquier cambio significativo por correo electrónico o mediante un aviso en nuestro sitio web. Te recomendamos revisar esta política periódicamente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Contacto</h2>
                <p className="text-gray-700 mb-4">
                  Si tienes preguntas sobre esta política de privacidad o sobre cómo manejamos tu información personal, contáctanos:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> privacidad@inapsis.com</p>
                  <p className="text-gray-700"><strong>Teléfono:</strong> +54 9 3834241994</p>
                  <p className="text-gray-700"><strong>Dirección:</strong> Catamarca, Argentina</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
