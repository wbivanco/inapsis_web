# Inapsis - Sitio Institucional

Sitio web institucional de Inapsis, empresa especializada en inteligencia artificial, plataforma de bots IA, consultoría y automatizaciones.

## 🚀 Características

- **Diseño Moderno**: Interfaz limpia y profesional con los colores corporativos de Inapsis
- **Responsive**: Optimizado para dispositivos móviles, tablets y desktop
- **Navegación Intuitiva**: Menú responsive con navegación fluida
- **Formulario de Contacto**: Formulario funcional con validación
- **SEO Optimizado**: Meta tags y estructura semántica
- **Performance**: Carga rápida y optimizada

## 🎨 Diseño

El sitio utiliza los colores corporativos de Inapsis:
- **Naranja**: `#E94B35` (inapsis-orange)
- **Violeta**: `#7D52A1` (inapsis-purple)
- **Tipografía**: Inter y Poppins de Google Fonts

## 📁 Estructura del Proyecto

```
web_inapsis/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Layout.js
│   │       ├── Header.js
│   │       └── Footer.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── Services.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Tecnologías Utilizadas

- **React 18**: Framework principal
- **React Router 6**: Navegación entre páginas
- **TailwindCSS 3**: Framework de estilos
- **PostCSS**: Procesamiento de CSS
- **Google Fonts**: Tipografías web

## 📦 Instalación

1. **Clonar el repositorio**:
   ```bash
   git clone <url-del-repositorio>
   cd web_inapsis
   ```

2. **Instalar dependencias**:
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   npm start
   ```

4. **Abrir en el navegador**:
   ```
   http://localhost:3000
   ```

## 🚀 Scripts Disponibles

- `npm start`: Inicia el servidor de desarrollo
- `npm build`: Construye la aplicación para producción
- `npm test`: Ejecuta las pruebas
- `npm eject`: Expone la configuración de webpack (irreversible)

## 📄 Páginas del Sitio

### 🏠 Inicio (`/`)
- Hero section con presentación de la empresa
- Características principales
- Estadísticas de la empresa
- Call-to-action

### 🔧 Servicios (`/servicios`)
- Plataforma de Bots IA
- Consultoría en IA
- Automatizaciones
- Proceso de trabajo

### 👥 Nosotros (`/nosotros`)
- Misión y visión
- Valores corporativos
- Historia de la empresa
- Equipo de trabajo

### 📞 Contacto (`/contacto`)
- Formulario de contacto funcional
- Información de contacto
- Horarios de atención

## 🎯 Componentes Principales

### Layout
- **Layout.js**: Estructura principal con header y footer
- **Header.js**: Navegación responsive con logo y menú
- **Footer.js**: Información de contacto y enlaces

### Páginas
- **Home.js**: Página principal con hero section
- **Services.js**: Detalle de servicios ofrecidos
- **About.js**: Información sobre la empresa
- **Contact.js**: Formulario de contacto e información

## 🎨 Personalización

### Colores
Los colores se pueden modificar en `tailwind.config.js`:

```javascript
colors: {
  'inapsis-orange': '#E94B35',
  'inapsis-purple': '#7D52A1',
  'inapsis-orange-light': '#f5654d',
  'inapsis-purple-light': '#9b6bb8',
}
```

### Tipografías
Las fuentes se configuran en `tailwind.config.js` y se cargan desde Google Fonts en `public/index.html`.

## 📱 Responsive Design

El sitio está optimizado para:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🔧 Configuración de Producción

1. **Construir para producción**:
   ```bash
   npm run build
   ```

2. **Los archivos se generan en la carpeta `build/`**

3. **Desplegar en tu servidor web preferido**

## 📞 Información de Contacto

- **Email**: info@inapsis.com
- **Teléfono**: +54 11 1234-5678
- **Dirección**: Buenos Aires, Argentina

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 🙏 Agradecimientos

- [React](https://reactjs.org/)
- [TailwindCSS](https://tailwindcss.com/)
- [React Router](https://reactrouter.com/)
- [Google Fonts](https://fonts.google.com/)

---

**Inapsis** - Transformando negocios con Inteligencia Artificial 🤖
