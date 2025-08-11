# Guía de Despliegue - Medical Simulation App

## 📋 Lista de Verificación Pre-Despliegue

### ✅ Configuración Local Completada
- [x] Dependencias instaladas (`npm install`)
- [x] Proyecto construye correctamente (`npm run build`)
- [x] Servidor de desarrollo funciona (`npm run dev`)
- [x] Archivo `.env.example` creado
- [x] Configuración de Vite actualizada para GitHub Pages

### ✅ Configuración de GitHub
- [x] Workflow de GitHub Actions creado (`.github/workflows/deploy.yml`)
- [x] README actualizado con instrucciones completas
- [x] Configuración de base URL para GitHub Pages

## 🚀 Pasos para Despliegue en GitHub

### 1. Preparar el Repositorio

```bash
# Inicializar git (si no está inicializado)
git init

# Agregar archivos
git add .

# Commit inicial
git commit -m "Initial commit: Medical simulation app ready for deployment"

# Agregar remote de GitHub
git remote add origin https://github.com/tu-usuario/operating-room-crisis_-a-talent-metaphor.git

# Push a GitHub
git push -u origin main
```

### 2. Configurar GitHub Pages

1. **Ir a Settings del repositorio**
2. **Navegar a Pages**
3. **Seleccionar "GitHub Actions" como fuente**
4. **Configurar Secrets:**
   - Ve a Settings → Secrets and variables → Actions
   - Clic en "New repository secret"
   - Nombre: `GEMINI_API_KEY`
   - Valor: Tu clave API de Gemini

### 3. Verificar Despliegue

- El workflow se ejecutará automáticamente en cada push a `main`
- Verifica en la pestaña "Actions" que el despliegue sea exitoso
- La app estará disponible en: `https://tu-usuario.github.io/operating-room-crisis_-a-talent-metaphor/`

## 🔧 Configuración del Servidor Local

### Variables de Entorno Requeridas

```bash
# .env.local (crear desde .env.example)
GEMINI_API_KEY=tu_clave_api_aqui
```

### Comandos de Desarrollo

```bash
# Desarrollo
npm run dev          # http://localhost:5173

# Producción local
npm run build        # Genera carpeta dist/
npm run preview      # Previsualiza build local
```

## 🌐 URLs de Acceso

- **Desarrollo local:** http://localhost:5173
- **GitHub Pages:** https://tu-usuario.github.io/operating-room-crisis_-a-talent-metaphor/
- **Preview local:** http://localhost:4173 (después de `npm run preview`)

## 🛠️ Solución de Problemas

### Error: "Failed to resolve module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Error en GitHub Actions
- Verificar que `GEMINI_API_KEY` esté configurado en Secrets
- Revisar logs en la pestaña Actions del repositorio

### Página en blanco en GitHub Pages
- Verificar que la configuración `base` en `vite.config.ts` sea correcta
- Asegurar que el nombre del repositorio coincida con la URL base

## 📊 Estado del Proyecto

✅ **Listo para producción**
- Aplicación funcional sin dependencias externas críticas
- Build optimizado y minificado
- Configuración de despliegue automatizada
- Documentación completa

## 🔄 Flujo de Trabajo Recomendado

1. **Desarrollo local:** `npm run dev`
2. **Testing:** `npm run build` + `npm run preview`
3. **Commit y push:** Git workflow estándar
4. **Despliegue automático:** GitHub Actions se encarga del resto

## 📞 Soporte

Si encuentras problemas:
1. Revisar logs de GitHub Actions
2. Verificar configuración de variables de entorno
3. Comprobar que todas las dependencias estén instaladas
4. Validar que el build local funcione correctamente
