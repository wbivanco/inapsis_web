import React from 'react';

const TermsOfService = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white section-padding">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Términos de{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-inapsis-orange to-inapsis-purple">
              Servicio
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Condiciones y términos que rigen el uso de nuestros servicios de inteligencia artificial.
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Aceptación de los Términos</h2>
                <p className="text-gray-700">
                  Al acceder y utilizar los servicios de Inapsis, aceptas estar sujeto a estos Términos de Servicio. Si no estás de acuerdo con alguna parte de estos términos, no debes utilizar nuestros servicios.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Descripción de Servicios</h2>
                <p className="text-gray-700 mb-4">
                  Inapsis ofrece los siguientes servicios de inteligencia artificial:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li><strong>Desarrollo de Bots con IA:</strong> Creación de chatbots inteligentes para WhatsApp y sitios web</li>
                  <li><strong>Consultoría Estratégica en IA:</strong> Asesoramiento especializado en implementación de inteligencia artificial</li>
                  <li><strong>Automatización de Procesos:</strong> Optimización de procesos empresariales mediante IA</li>
                  <li><strong>Soporte Técnico:</strong> Mantenimiento y soporte continuo de las soluciones implementadas</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Precios y Pagos</h2>
                <p className="text-gray-700 mb-4">
                  Los precios de nuestros servicios se establecen en las propuestas comerciales y contratos específicos:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Los precios se cotizan en pesos argentinos (ARS) o dólares estadounidenses (USD)</li>
                  <li>Los pagos se realizan según los términos acordados en cada contrato</li>
                  <li>Los precios pueden estar sujetos a cambios con previo aviso de 30 días</li>
                  <li>Los impuestos aplicables serán agregados a los precios cotizados</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Responsabilidades del Cliente</h2>
                <p className="text-gray-700 mb-4">
                  Como cliente, te comprometes a:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Proporcionar información precisa y completa para el desarrollo del proyecto</li>
                  <li>Revisar y aprobar los entregables en los plazos establecidos</li>
                  <li>Utilizar los servicios de acuerdo con las leyes aplicables</li>
                  <li>No compartir credenciales de acceso con terceros</li>
                  <li>Respetar los derechos de propiedad intelectual de Inapsis</li>
                  <li>Pagar los servicios en los términos acordados</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Responsabilidades de Inapsis</h2>
                <p className="text-gray-700 mb-4">
                  Inapsis se compromete a:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Proporcionar servicios de alta calidad y profesionalismo</li>
                  <li>Cumplir con los plazos acordados en los contratos</li>
                  <li>Mantener la confidencialidad de la información del cliente</li>
                  <li>Proporcionar soporte técnico según los términos del servicio</li>
                  <li>Actualizar y mantener las soluciones implementadas</li>
                  <li>Cumplir con las leyes de protección de datos aplicables</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Propiedad Intelectual</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Propiedad de Inapsis:</strong> Inapsis conserva todos los derechos de propiedad intelectual sobre:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Software, algoritmos y tecnologías desarrolladas por Inapsis</li>
                  <li>Metodologías, procesos y know-how propietarios</li>
                  <li>Marcas comerciales, logos y materiales de marketing</li>
                </ul>
                <p className="text-gray-700 mb-4 mt-4">
                  <strong>Licencia al Cliente:</strong> Inapsis otorga al cliente una licencia no exclusiva para utilizar las soluciones desarrolladas según los términos del contrato específico.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Confidencialidad</h2>
                <p className="text-gray-700">
                  Ambas partes se comprometen a mantener la confidencialidad de la información compartida durante la relación comercial. Esta obligación permanece vigente durante y después de la terminación del contrato.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Limitación de Responsabilidad</h2>
                <p className="text-gray-700 mb-4">
                  En ningún caso Inapsis será responsable por:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Daños indirectos, incidentales o consecuentes</li>
                  <li>Pérdida de beneficios, datos o uso</li>
                  <li>Interrupciones del servicio por causas fuera de nuestro control</li>
                  <li>Daños causados por el uso incorrecto de nuestros servicios</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  La responsabilidad total de Inapsis estará limitada al monto pagado por el cliente en los 12 meses anteriores al evento que dio lugar a la reclamación.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Garantías</h2>
                <p className="text-gray-700 mb-4">
                  <strong>Garantía de Servicios:</strong> Inapsis garantiza que los servicios se proporcionarán de manera profesional y competente, de acuerdo con los estándares de la industria.
                </p>
                <p className="text-gray-700">
                  <strong>Exclusión de Garantías:</strong> Excepto según se establece expresamente en estos términos, todos los servicios se proporcionan "tal como están" sin garantías adicionales.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Terminación</h2>
                <p className="text-gray-700 mb-4">
                  Cualquiera de las partes puede terminar el contrato:
                </p>
                <ul className="list-disc pl-6 text-gray-700 space-y-2">
                  <li>Con 30 días de aviso previo por escrito</li>
                  <li>Inmediatamente en caso de incumplimiento material de estos términos</li>
                  <li>Por insolvencia o quiebra de cualquiera de las partes</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Al terminar el contrato, el cliente deberá pagar por todos los servicios prestados hasta la fecha de terminación.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Ley Aplicable y Jurisdicción</h2>
                <p className="text-gray-700">
                  Estos términos se rigen por las leyes de la República Argentina. Cualquier disputa será resuelta en los tribunales de la Ciudad de Buenos Aires, Argentina, salvo que se acuerde un método alternativo de resolución de disputas.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Modificaciones</h2>
                <p className="text-gray-700">
                  Inapsis se reserva el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor 30 días después de su publicación en nuestro sitio web. El uso continuado de nuestros servicios después de los cambios constituye aceptación de los nuevos términos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Contacto</h2>
                <p className="text-gray-700 mb-4">
                  Para preguntas sobre estos términos de servicio, contáctanos:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-gray-700"><strong>Email:</strong> legal@inapsis.com</p>
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

export default TermsOfService;
