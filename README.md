# Medical Simulation Web Application - Operating Room Crisis

Una aplicación web de simulación médica que utiliza una sala de operaciones hospitalaria como analogía para los desafíos de gestión del talento.

## 🏥 Descripción del Proyecto

Esta aplicación simula una crisis médica donde:
- **Paciente** = Organización perdiendo talento
- **Pérdida de sangre** = Problemas de retención de talento
- **Bolsa de transfusión rota** = Sistema de atracción de talento defectuoso
- **"SALVAR AL PACIENTE"** = Implementar el proyecto San Roque Contigo

## 🚀 Ejecución Local

**Prerrequisitos:** Node.js (versión 18 o superior)

1. **Clonar el repositorio:**
   ```bash
   git clone <repository-url>
   cd operating-room-crisis_-a-talent-metaphor
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   ```bash
   cp .env.example .env.local
   # Editar .env.local y agregar tu GEMINI_API_KEY
   ```

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

5. **Construir para producción:**
   ```bash
   npm run build
   ```

## 🌐 Despliegue en GitHub Pages

### Configuración Automática

El proyecto incluye un workflow de GitHub Actions que despliega automáticamente a GitHub Pages:

1. **Habilitar GitHub Pages:**
   - Ve a Settings → Pages en tu repositorio
   - Selecciona "GitHub Actions" como fuente

2. **Configurar Secrets:**
   - Ve a Settings → Secrets and variables → Actions
   - Añade `GEMINI_API_KEY` con tu clave API de Gemini

3. **Despliegue automático:**
   - Cada push a la rama `main` desplegará automáticamente
   - La aplicación estará disponible en: `https://tu-usuario.github.io/operating-room-crisis_-a-talent-metaphor/`

### Despliegue Manual

```bash
npm run build
# Subir el contenido de la carpeta 'dist' a tu servidor web
```

## 🛠️ Tecnologías Utilizadas

- **React 19** - Framework de interfaz de usuario
- **TypeScript** - Tipado estático
- **Vite** - Herramienta de construcción y desarrollo
- **Recharts** - Gráficos y visualizaciones
- **Tailwind CSS** - Estilos (implícito en los componentes)

## 📁 Estructura del Proyecto

```
├── components/           # Componentes React
│   ├── IntroScreen.tsx
│   ├── CrisisQuestionsScreen.tsx
│   ├── OperatingRoom.tsx
│   └── SolutionModal.tsx
├── hooks/               # Hooks personalizados
├── .github/workflows/   # Workflows de GitHub Actions
├── dist/               # Archivos construidos (generados)
├── package.json        # Dependencias y scripts
├── vite.config.ts      # Configuración de Vite
└── tsconfig.json       # Configuración de TypeScript
```

## 🔧 Scripts Disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Previsualizar build de producción

## 📝 Notas de Desarrollo

- La aplicación funciona sin la API key de Gemini para demostración
- Los componentes están optimizados para una experiencia fluida
- El diseño es responsive y funciona en dispositivos móviles
