# ITG - Servicios de Tecnología de la Información

Una landing page moderna y responsive para ITG, empresa líder en servicios de tecnología de la información.

## 🚀 Tecnologías

- **Framework**: Astro.js
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS
- **Componentes Interactivos**: React
- **Linting**: ESLint
- **Formateo**: Prettier
- **Despliegue**: Vercel

## 📋 Características

### Secciones de la Página

- **Header**: Navegación responsive con logo y menú móvil
- **Hero Section**: Presentación principal con call-to-action
- **Servicios Empresariales**:
  - Centros de Datos
  - Cableado Estructurado
  - Cámaras de Seguridad
- **Consultoría Especializada**:
  - SAP BASIS
  - IBM AIX
  - IBM SPECTRUM
  - ZABBIX
- **Servicios Adicionales**: SEO, Desarrollo Web, Sistemas Administrativos
- **Formulario de Contacto**: React component con validación
- **Footer**: Información de contacto y redes sociales

### Funcionalidades

- Diseño completamente responsive
- Navegación suave entre secciones
- Formulario de contacto con validación
- Iconos SVG para cada servicio
- Paleta de colores moderna (azules, grises, neutros)
- Optimizado para SEO
- Configurado para producción

## Instalación y Desarrollo

### Prerrequisitos

- Node.js 18+ 
- npm o yarn

### Comandos

```bash
# Instalar dependencias
npm install

# Servidor de desarrollo
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview

# Linting
npm run lint
npm run lint:fix

# Formateo de código
npm run format
```

## Despliegue

### Vercel (Recomendado)

1. Conecta tu repositorio a Vercel
2. La configuración está lista en `vercel.json`
3. Deploy automático en cada push

### Configuración Manual

```bash
# Build del proyecto
npm run build

# Los archivos estáticos estarán en ./dist/
```

## Estructura del Proyecto

```
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   ├── Services.astro
│   │   ├── ContactForm.tsx
│   │   └── Footer.astro
│   ├── layouts/
│   │   └── Layout.astro
│   └── pages/
│       └── index.astro
├── .eslintrc.json
├── .prettierrc
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── vercel.json
```

## Personalización

### Colores

Los colores principales están definidos en Tailwind CSS:
- Primario: Azul (`blue-600`, `blue-700`)
- Secundario: Índigo (`indigo-600`)
- Neutros: Grises (`gray-50` a `gray-900`)

### Contenido

Para modificar el contenido, edita los componentes en `src/components/`:
- Servicios: `Services.astro`
- Información de contacto: `ContactForm.tsx` y `Footer.astro`
- Texto principal: `Hero.astro`

## Contacto

- **Email**: contacto@itg.com
- **Teléfono**: +1 (555) 123-4567
- **Redes Sociales**: LinkedIn, Twitter, Facebook, Instagram

## Licencia

 2024 ITG - Servicios de Tecnología de la Información. Todos los derechos reservados.
