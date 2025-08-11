#!/bin/bash

# Medical Simulation App - Setup Script
echo "🏥 Configurando Medical Simulation App..."

# Verificar Node.js
if ! command -v node &> /dev/null; then
    echo "❌ Node.js no está instalado. Por favor instala Node.js 18 o superior."
    exit 1
fi

NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js versión $NODE_VERSION detectada. Se requiere versión 18 o superior."
    exit 1
fi

echo "✅ Node.js $(node -v) detectado"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Error instalando dependencias"
    exit 1
fi

echo "✅ Dependencias instaladas correctamente"

# Crear archivo .env.local si no existe
if [ ! -f ".env.local" ]; then
    echo "🔧 Creando archivo .env.local..."
    cp .env.example .env.local
    echo "⚠️  IMPORTANTE: Edita .env.local y agrega tu GEMINI_API_KEY"
else
    echo "✅ Archivo .env.local ya existe"
fi

# Probar build
echo "🔨 Probando build de producción..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Error en el build de producción"
    exit 1
fi

echo "✅ Build de producción exitoso"

# Mostrar resumen
echo ""
echo "🎉 ¡Configuración completada!"
echo ""
echo "📋 Próximos pasos:"
echo "1. Editar .env.local con tu GEMINI_API_KEY"
echo "2. Ejecutar: npm run dev (para desarrollo)"
echo "3. Ejecutar: npm run preview (para probar build)"
echo "4. Para GitHub: seguir instrucciones en DEPLOYMENT.md"
echo ""
echo "🌐 URLs disponibles:"
echo "- Desarrollo: http://localhost:5173"
echo "- Preview: http://localhost:4173/operating-room-crisis_-a-talent-metaphor/"
echo ""
echo "📚 Documentación:"
echo "- README.md - Información general y uso"
echo "- DEPLOYMENT.md - Guía de despliegue detallada"
