# Portafolio de Oscar David Gaviria Martínez

Sitio web profesional enfocado en el perfil de Oscar como desarrollador .NET con experiencia en backend, bases de datos y soluciones empresariales, complementado por su formación en Ingeniería de Sistemas, Administración Financiera y contabilización de operaciones.

## Contenido

- Presentación profesional y propuesta de valor.
- Experiencia en PANACEA S.A.S.
- Proyectos destacados y stack técnico.
- Formación académica y aprendizaje continuo.
- Enlaces de contacto, GitHub y LinkedIn.
- CV descargable y tarjeta social para compartir el sitio.

## Desarrollo local

Requiere Node.js 22.13 o superior.

```bash
npm install
npm run dev
```

La página estará disponible en `http://localhost:3000`.

## Validación y compilación

```bash
npm test
```

La compilación de producción se genera en `dist/` y es compatible con Cloudflare Workers mediante vinext.

## Personalización rápida

- Contenido principal: `app/page.tsx`
- Estilos y diseño responsive: `app/globals.css`
- Metadatos SEO y redes sociales: `app/layout.tsx`
- Fotografía, CV y tarjeta social: `public/`
