# Escoseg — Sitio web de seguridad integral

Sitio web de una sola página (landing page) para Escoseg, empresa de seguridad privada. Presenta sus servicios, proceso de trabajo, sectores atendidos, cobertura geográfica, testimonios de clientes y un formulario de contacto.

## Objetivo del proyecto

Comunicar de forma profesional y confiable la propuesta de valor de Escoseg (guardias, tecnología electrónica, poligrafía, GPS y custodia de mercancía) y generar solicitudes de cotización a través de formulario, WhatsApp o correo.

## Archivos del proyecto

```
escoseg.html              (página principal, todo el sitio en un solo archivo HTML)
js/
  └── contact.js           (lógica de envío del formulario de contacto)
images/
  ├── escoseg-logo.png             (logo/escudo institucional, generado con fondo transparente)
  └── escoseg-mapa-cobertura.png   (ilustración del mapa de cobertura en México)
README.md
```

## ✅ Funcionalidades completadas en esta iteración

1. **Logo y nombre más vistosos**
   - Se generó un nuevo escudo/emblema institucional en tonos verde bosque, dorado (trigo) y crema, coherente con la paleta de marca.
   - Se le quitó el fondo grisáceo (se generó con fondo transparente mediante remoción de fondo), por lo que ahora se ve nítido tanto en el header claro como en las secciones oscuras (About y Footer).
   - El logo se agrandó (36px → 48px en header, 120px → 130px en la caja "Nosotros") y se le añadió una sombra sutil (`drop-shadow`) para dar profundidad.
   - El nombre "ESCOSEG" se agrandó y se le dio un tratamiento tipográfico con "SEG" resaltado en dorado.

2. **Tipografía de secciones más grande**
   - Se aumentó el tamaño base del texto del body y el de todos los títulos `h2` de sección (de ~26–38px a ~28–42px con `clamp`).
   - Se aumentó el tamaño de párrafos, tarjetas de servicio, ítems de sector, checklist y textos del formulario para mejorar la legibilidad general.

3. **Mapa de cobertura**
   - Nueva sección `#cobertura` con una ilustración de mapa de México con puntos de presencia (generada especialmente para el sitio) y una lista de las principales regiones atendidas (CDMX, Bajío, Monterrey, Guadalajara, Puebla).

4. **Testimonios**
   - Nueva sección `#testimonios` con 3 tarjetas de testimonios de clientes ficticios representativos (industrial, comercial y logística), con calificación de 5 estrellas, cita y autor con avatar.

5. **Formulario conectado a un servicio real**
   - El formulario de contacto ahora apunta a **Formspree** (`action="https://formspree.io/f/TU_ID_DE_FORMSPREE"`), un servicio gratuito de manejo de formularios sin backend propio, compatible con sitios estáticos.
   - Se agregaron nombres (`name="..."`) a todos los campos, requeridos por Formspree para armar el correo de notificación.
   - `js/contact.js` maneja el envío vía `fetch` y muestra el mensaje de confirmación sin recargar la página; si el endpoint de Formspree no ha sido configurado todavía, solo simula la confirmación (modo vista previa) para no romper la demo.
   - Se añadieron **alternativas de contacto directo** ya funcionales sin configuración adicional:
     - Botón "Escríbenos por WhatsApp" → enlace `https://wa.me/525500000000?text=...` (solo hay que sustituir el número).
     - Botón "Enviar correo" → enlace `mailto:contacto@escoseg.com`.
     - Teléfono y correo del bloque de contacto ahora son enlaces `tel:` y `mailto:` clicables.

## 🔧 Pasos pendientes para dejar el formulario 100% operativo

1. Crear una cuenta gratuita en [Formspree](https://formspree.io/).
2. Crear un formulario y copiar el endpoint que te asignan (algo como `https://formspree.io/f/abcdwxyz`).
3. En `escoseg.html`, reemplazar `TU_ID_DE_FORMSPREE` en el atributo `action` del `<form id="contact-form">` por tu endpoint real.
4. Reemplazar el número de teléfono de ejemplo (`525500000000`) en los enlaces de WhatsApp y `tel:` por el número real de la empresa.
5. Reemplazar `contacto@escoseg.com` por el correo real si es distinto.

No se requiere ningún cambio adicional en el código: en cuanto el `action` del formulario apunte a un endpoint válido de Formspree, `js/contact.js` detecta automáticamente que ya está configurado y realiza el envío real.

## Estructura de navegación (anclas internas)

| Sección | Ancla |
|---|---|
| Inicio / Hero | `#top` |
| Servicios | `#servicios` |
| Quiénes somos | `#nosotros` |
| Cómo trabajamos | `#proceso` |
| Sectores atendidos | `#sectores` |
| Mapa de cobertura | `#cobertura` |
| Testimonios | `#testimonios` |
| Contacto | `#contacto` |

No hay rutas adicionales: es una landing de una sola página (`escoseg.html`), sin parámetros de URL.

## Datos y almacenamiento

Este proyecto **no utiliza base de datos ni Table API**: es un sitio estático informativo. El único punto de captura de datos es el formulario de contacto, cuyo envío se delega a Formspree (servicio externo gratuito y sin necesidad de backend propio). No se almacena ninguna información en el propio sitio.

## Funcionalidades no implementadas / posibles próximos pasos

- Conectar Formspree con el endpoint real (ver pasos pendientes arriba).
- Sustituir testimonios de ejemplo por testimonios reales de clientes (con su autorización).
- Sustituir teléfono/correo de ejemplo por los datos reales de contacto de la empresa.
- Si se desea un mapa interactivo real (no ilustrativo), se podría integrar un mapa embebido de Google Maps o Mapbox mostrando ubicaciones exactas de oficinas/cobertura.
- Añadir integración con Google Analytics o similar para medir conversiones del formulario.
- Considerar agregar una sección de certificaciones/alianzas si la empresa cuenta con ellas.

## Cómo publicar

Para hacer público este sitio, usa la pestaña **Publish** del panel del proyecto. Esa pestaña se encarga de todo el proceso de despliegue y te entrega la URL pública final.
