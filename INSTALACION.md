# Guía de Instalación - Sitio Web Inapsis

## 📋 Requisitos Previos

Antes de ejecutar el proyecto, necesitas tener instalado:

### 1. Node.js y npm

#### Opción A: Instalación desde el sitio oficial
1. Ve a [nodejs.org](https://nodejs.org/)
2. Descarga la versión LTS (Long Term Support)
3. Instala siguiendo las instrucciones del instalador

#### Opción B: Instalación con Homebrew (macOS)
```bash
# Instalar Homebrew si no lo tienes
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Instalar Node.js
brew install node
```

#### Opción C: Instalación con nvm (Node Version Manager)
```bash
# Instalar nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash

# Reiniciar terminal o ejecutar
source ~/.bashrc

# Instalar Node.js LTS
nvm install --lts
nvm use --lts
```

### 2. Verificar la instalación
```bash
node --version
npm --version
```

## 🚀 Instalación del Proyecto

Una vez que tengas Node.js instalado, sigue estos pasos:

### 1. Instalar dependencias
```bash
npm install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm start
```

### 3. Abrir en el navegador
El sitio se abrirá automáticamente en `http://localhost:3000`

## 📁 Estructura del Proyecto Creado

```
web_inapsis/
├── public/
│   └── index.html          # Archivo HTML principal
├── src/
│   ├── components/
│   │   └── Layout/
│   │       ├── Layout.js   # Layout principal con header y footer
│   │       ├── Header.js   # Navegación responsive
│   │       └── Footer.js   # Footer con información de contacto
│   ├── pages/
│   │   ├── Home.js         # Página de inicio
│   │   ├── Services.js     # Página de servicios
│   │   ├── About.js        # Página sobre nosotros
│   │   └── Contact.js      # Página de contacto con formulario
│   ├── App.js              # Componente principal con rutas
│   ├── index.js            # Punto de entrada
│   └── index.css           # Estilos globales con TailwindCSS
├── package.json            # Dependencias y scripts
├── tailwind.config.js      # Configuración de TailwindCSS
├── postcss.config.js       # Configuración de PostCSS
├── README.md               # Documentación principal
└── INSTALACION.md          # Este archivo
```

## 🎨 Características Implementadas

### ✅ Estructura de Carpetas
- Organización modular con componentes y páginas separadas
- Layout principal con header y footer fijos
- Sistema de rutas con React Router

### ✅ Componentes Creados
- **Layout**: Estructura principal con `<Outlet>` para contenido dinámico
- **Header**: Navegación responsive con logo y menú hamburguesa
- **Footer**: Información de contacto, redes sociales y enlaces legales

### ✅ Páginas Implementadas
- **Home**: Hero section, características, estadísticas y CTA
- **Services**: Detalle de los 3 servicios principales con proceso de trabajo
- **About**: Misión, visión, valores, historia y equipo
- **Contact**: Formulario funcional con validación e información de contacto

### ✅ Diseño y Estilos
- Colores corporativos de Inapsis (#E94B35 y #7D52A1)
- Tipografías Inter y Poppins de Google Fonts
- Diseño completamente responsive
- Componentes de TailwindCSS personalizados

### ✅ Funcionalidades
- Navegación entre páginas sin recarga
- Formulario de contacto con estados de envío
- Menú responsive para móviles
- Enlaces activos en la navegación

## 🔧 Scripts Disponibles

```bash
npm start          # Inicia el servidor de desarrollo
npm run build      # Construye para producción
npm test           # Ejecuta las pruebas
npm run eject      # Expone configuración de webpack
```

## 🌐 Rutas del Sitio

- `/` - Página de inicio
- `/servicios` - Página de servicios
- `/nosotros` - Página sobre nosotros
- `/contacto` - Página de contacto

## 🎯 Próximos Pasos

1. **Instalar Node.js** siguiendo las instrucciones arriba
2. **Ejecutar `npm install`** para instalar dependencias
3. **Ejecutar `npm start`** para iniciar el servidor
4. **Personalizar contenido** según necesidades específicas
5. **Configurar dominio y hosting** para producción

## 📞 Soporte

Si tienes problemas con la instalación:

1. Verifica que Node.js esté instalado correctamente
2. Asegúrate de estar en el directorio correcto del proyecto
3. Elimina la carpeta `node_modules` y ejecuta `npm install` nuevamente
4. Verifica que no haya conflictos de puertos en el 3000

---

**¡El sitio web de Inapsis está listo para usar!** 🚀
