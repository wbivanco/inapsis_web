// Base de conocimiento del chatbot basada en el contenido del sitio

export const chatbotData = [
  // Casos de éxito
  {
    keywords: ['casos de éxito', 'casos exitosos', 'proyectos', 'clientes', 'trabajos realizados', 'ejemplos'],
    question: '¿Qué casos de éxito tienen?',
    answer: 'Tenemos 5+ casos de éxito en diferentes sectores:\n\n' +
      '🎓 **Sector Educativo**: Bot conversacional para gestión de trámites administrativos con reducción del 70% en tiempo de respuesta\n\n' +
      '🌾 **Agroindustria**: Sistema de administración de documentación interna con organización automática de 500+ documentos\n\n' +
      '💻 **Software**: Bot procedural para generación automática de casos de testing con cobertura del 95%\n\n' +
      'Puedes ver todos los detalles en la sección "Casos de Éxito" del sitio.'
  },
  {
    keywords: ['educación', 'educativo', 'trámites', 'instituciones educativas'],
    question: '¿Tienen casos en el sector educativo?',
    answer: 'Sí, desarrollamos un bot conversacional para gestión de trámites administrativos en instituciones educativas. ' +
      'Los beneficios incluyen:\n' +
      '• Reducción del 70% en tiempo de respuesta\n' +
      '• Automatización de 15 tipos de trámites\n' +
      '• Disponibilidad 24/7 para consultas\n' +
      '• Integración con sistemas educativos existentes'
  },
  {
    keywords: ['agroindustria', 'agropecuario', 'documentación', 'documentos'],
    question: '¿Qué soluciones tienen para agroindustria?',
    answer: 'Desarrollamos un sistema inteligente que gestiona y organiza la documentación interna de empresas agropecuarias:\n' +
      '• Organización automática de 500+ documentos\n' +
      '• Búsqueda inteligente por contenido\n' +
      '• Control de versiones automatizado\n' +
      '• Acceso seguro desde cualquier dispositivo'
  },

  // Servicios
  {
    keywords: ['servicios', 'qué ofrecen', 'qué hacen', 'soluciones'],
    question: '¿Qué servicios ofrecen?',
    answer: 'Ofrecemos tres servicios principales:\n\n' +
      '🤖 **Desarrollo de Bots con IA**: Bots para WhatsApp Business, chatbots embebidos en web, inteligencia artificial conversacional\n\n' +
      '💼 **Consultoría Estratégica en IA**: Auditoría de procesos, estrategia de implementación, análisis de viabilidad técnica\n\n' +
      '⚙️ **Automatizaciones**: Optimización de procesos internos, reducción de costos operativos, maximización del ROI\n\n' +
      'Puedes ver más detalles en la sección "Servicios".'
  },
  {
    keywords: ['bots', 'chatbot', 'whatsapp', 'bot conversacional'],
    question: '¿Desarrollan bots para WhatsApp?',
    answer: 'Sí, desarrollamos bots inteligentes para WhatsApp Business con IA que incluyen:\n' +
      '• Bots para WhatsApp Business con IA\n' +
      '• Chatbots embebidos en tu sitio web\n' +
      '• Inteligencia artificial conversacional\n' +
      '• Procesamiento de lenguaje natural\n' +
      '• Integración con CRM y sistemas existentes\n' +
      '• Reportes y analytics en tiempo real'
  },
  {
    keywords: ['consultoría', 'asesoría', 'estrategia'],
    question: '¿Ofrecen consultoría en IA?',
    answer: 'Sí, ofrecemos consultoría estratégica en IA que incluye:\n' +
      '• Auditoría de procesos actuales\n' +
      '• Estrategia de implementación de IA\n' +
      '• Análisis de viabilidad técnica\n' +
      '• Roadmap de transformación digital\n' +
      '• Capacitación de equipos\n' +
      '• Seguimiento y optimización continua'
  },
  {
    keywords: ['automatización', 'automatizaciones', 'procesos'],
    question: '¿Qué tipo de automatizaciones hacen?',
    answer: 'Desarrollamos automatizaciones inteligentes que incluyen:\n' +
      '• Optimización de procesos internos\n' +
      '• Reducción de costos operativos\n' +
      '• Maximización del ROI\n' +
      '• Automatización de tareas repetitivas\n' +
      '• Optimización de flujos de trabajo'
  },

  // Información de contacto
  {
    keywords: ['contacto', 'cómo contactar', 'email', 'teléfono', 'whatsapp', 'dirección'],
    question: '¿Cómo puedo contactarlos?',
    answer: 'Puedes contactarnos de las siguientes formas:\n\n' +
      '📧 **Email**: info@inapsis.com.ar\n\n' +
      '💬 **WhatsApp**: +54 9 3834241994\n\n' +
      '📍 **Dirección**: Catamarca, Argentina\n\n' +
      'También puedes usar el formulario de contacto en la página "Contacto".'
  },
  {
    keywords: ['email', 'correo', 'mail'],
    question: '¿Cuál es su email?',
    answer: 'Nuestro email es: **info@inapsis.com.ar**'
  },
  {
    keywords: ['ubicación', 'dónde están', 'dirección', 'localización'],
    question: '¿Dónde están ubicados?',
    answer: 'Estamos ubicados en **Catamarca, Argentina**.'
  },

  // Información de la empresa
  {
    keywords: ['quiénes son', 'qué es inapsis', 'empresa', 'sobre ustedes'],
    question: '¿Quiénes son?',
    answer: 'Inapsis es una empresa especializada en inteligencia artificial que desarrolla soluciones innovadoras para transformar negocios. ' +
      'Ofrecemos desarrollo de bots con IA, consultoría estratégica y automatizaciones inteligentes.'
  },
  {
    keywords: ['valores', 'principios', 'filosofía'],
    question: '¿Cuáles son sus valores?',
    answer: 'Nuestros valores son:\n\n' +
      '🚀 **Innovación**: Buscamos constantemente nuevas formas de aplicar la IA\n\n' +
      '⭐ **Excelencia**: Entregamos soluciones de la más alta calidad\n\n' +
      '🤝 **Colaboración**: Trabajamos en estrecha colaboración con nuestros clientes\n\n' +
      '💪 **Impacto**: Creamos soluciones que generan impacto real y medible'
  },

  // Tecnologías
  {
    keywords: ['tecnologías', 'tecnología', 'herramientas', 'stack', 'qué usan'],
    question: '¿Qué tecnologías utilizan?',
    answer: 'Utilizamos tecnologías de vanguardia en IA:\n\n' +
      '• **LLMs** (Large Language Models) para chatbots conversacionales\n' +
      '• **NLP** (Procesamiento de Lenguaje Natural)\n' +
      '• **LangChain** para desarrollo de aplicaciones con IA\n' +
      '• **Azure OpenAI** y **OpenAI**\n' +
      '• **WhatsApp Business API**\n' +
      '• **AWS** y **Azure** para infraestructura\n' +
      '• **FastAPI** para backends\n' +
      '• Búsqueda semántica y vectorial'
  },

  // Respuesta por defecto
  {
    keywords: [],
    question: 'No entiendo',
    answer: 'Lo siento, no entendí tu pregunta. Puedes preguntarme sobre:\n\n' +
      '• Nuestros casos de éxito\n' +
      '• Los servicios que ofrecemos\n' +
      '• Cómo contactarnos\n' +
      '• Información sobre la empresa\n' +
      '• Tecnologías que utilizamos\n\n' +
      'También puedes contactarnos directamente por WhatsApp o email.'
  }
];

// Función para buscar respuesta basada en palabras clave
export const findAnswer = (userMessage) => {
  const message = userMessage.toLowerCase().trim();
  
  // Buscar coincidencias por palabras clave
  for (const item of chatbotData) {
    if (item.keywords.length === 0) continue; // Saltar respuesta por defecto
    
    const matches = item.keywords.filter(keyword => 
      message.includes(keyword.toLowerCase())
    );
    
    if (matches.length > 0) {
      return {
        question: item.question,
        answer: item.answer
      };
    }
  }
  
  // Si no hay coincidencias, devolver respuesta por defecto
  return {
    question: chatbotData[chatbotData.length - 1].question,
    answer: chatbotData[chatbotData.length - 1].answer
  };
};

