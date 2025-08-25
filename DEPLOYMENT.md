# 🚀 Guía de Despliegue - Azure Static Web Apps

Esta guía te ayudará a desplegar el sitio web de Inapsis en Azure Static Web Apps usando GitHub Actions.

## 📋 Prerrequisitos

1. **Cuenta de Azure** activa
2. **Repositorio en GitHub** con el código del proyecto
3. **Permisos** para crear recursos en Azure

## 🔧 Configuración en Azure

### 1. Crear Static Web App en Azure

1. Ve al [Portal de Azure](https://portal.azure.com)
2. Busca "Static Web Apps" y selecciónalo
3. Haz clic en "Create" (Crear)
4. Completa la información:

```
Subscription: Tu suscripción
Resource Group: Crear nuevo o usar existente
Name: inapsis-website (o el nombre que prefieras)
Region: East US, West Europe, etc.
Source: GitHub
Repository: wbivanco/inapsis_web
Branch: main
Build Details:
  - Build Preset: React
  - App location: /
  - API location: (dejar vacío)
  - Output location: build
```

### 2. Configurar GitHub Actions

Azure automáticamente:
- Conectará tu repositorio de GitHub
- Creará el workflow de GitHub Actions
- Configurará los secrets necesarios

### 3. Obtener el Token de API

1. En Azure Portal, ve a tu Static Web App
2. En el menú lateral, selecciona "Configuration" → "General settings"
3. Copia el "API token" (lo necesitarás para GitHub)

## 🔐 Configuración en GitHub

### 1. Agregar Secret en GitHub

1. Ve a tu repositorio en GitHub
2. Settings → Secrets and variables → Actions
3. "New repository secret"
4. Nombre: `AZURE_STATIC_WEB_APPS_API_TOKEN`
5. Valor: El token que copiaste de Azure

### 2. Verificar el Workflow

El archivo `.github/workflows/azure-static-web-apps.yml` ya está configurado y se ejecutará automáticamente cuando:

- **Push a main**: Despliega a producción
- **Pull Request**: Crea un preview
- **Cierre de PR**: Limpia el preview

## 🚀 Proceso de Despliegue

### Despliegue Automático

1. **Haz push a la rama main**:
   ```bash
   git add .
   git commit -m "Actualización del sitio"
   git push origin main
   ```

2. **GitHub Actions se ejecutará automáticamente**:
   - Instala dependencias
   - Construye el proyecto
   - Despliega a Azure

3. **Verifica el despliegue**:
   - Ve a la pestaña "Actions" en GitHub
   - Revisa el log del workflow
   - Accede a tu URL de Azure

### URLs de Despliegue

- **Producción**: `https://[nombre-app].azurestaticapps.net`
- **Preview**: `https://[nombre-app]-[branch].azurestaticapps.net`

## 📁 Archivos de Configuración

### 1. GitHub Actions Workflow
- **Archivo**: `.github/workflows/azure-static-web-apps.yml`
- **Función**: Automatiza el build y deploy

### 2. Azure Static Web Apps Config
- **Archivo**: `staticwebapp.config.json`
- **Función**: Configura rutas y headers de seguridad

### 3. Configuración de React
- **Archivo**: `package.json`
- **Scripts**: `build` para producción

## 🔍 Troubleshooting

### Problemas Comunes

1. **Build falla**:
   - Verifica que `npm run build` funcione localmente
   - Revisa los logs en GitHub Actions

2. **Rutas no funcionan**:
   - Verifica `staticwebapp.config.json`
   - Asegúrate de que React Router esté configurado

3. **Errores de dependencias**:
   - Verifica que todas las dependencias estén en `package.json`
   - Usa `npm ci` en lugar de `npm install`

### Logs Útiles

- **GitHub Actions**: Ve a Actions → Workflow runs
- **Azure**: Portal → Static Web App → Logs

## 🔒 Seguridad

### Headers de Seguridad

El archivo `staticwebapp.config.json` incluye:
- `X-Content-Type-Options`: Previne MIME sniffing
- `X-Frame-Options`: Previene clickjacking
- `X-XSS-Protection`: Protección XSS
- `Referrer-Policy`: Control de referrer

### Variables de Entorno

Para variables de entorno:
1. Azure Portal → Configuration → Application settings
2. Agrega variables como `REACT_APP_API_URL`

## 📊 Monitoreo

### Métricas Disponibles

- **Visitas**: Azure Portal → Analytics
- **Performance**: Azure Application Insights (opcional)
- **Errores**: Logs de Azure

### Alertas

Configura alertas en Azure para:
- Errores 4xx/5xx
- Tiempo de respuesta
- Disponibilidad

## 🔄 Actualizaciones

### Proceso de Actualización

1. Desarrolla en una rama feature
2. Crea Pull Request
3. Revisa el preview
4. Merge a main
5. Despliegue automático a producción

### Rollback

Si necesitas hacer rollback:
1. Ve a Azure Portal → Static Web App
2. "Manage deployment tokens"
3. Revisa versiones anteriores
4. Restaura la versión deseada

## 📞 Soporte

### Recursos Útiles

- [Azure Static Web Apps Docs](https://docs.microsoft.com/en-us/azure/static-web-apps/)
- [GitHub Actions Docs](https://docs.github.com/en/actions)
- [React Deployment Guide](https://create-react-app.dev/docs/deployment/)

### Contacto

Para problemas específicos:
- GitHub Issues en el repositorio
- Azure Support (si tienes soporte)
- Documentación oficial de Azure

---

**¡Tu sitio web de Inapsis estará disponible en Azure Static Web Apps!** 🎉
