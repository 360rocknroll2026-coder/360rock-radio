360ROCK N' ROLL RADIO ONLINE
============================

CONTENIDO
- index.html: estructura de la landing page.
- styles.css: diseño adaptable a celulares, tablets y computadoras.
- config.js: enlaces del canal y configuración del reproductor.
- script.js: menú móvil, año automático e integración del video.

CÓMO CONFIGURAR EL REPRODUCTOR DE YOUTUBE
1. Abrí YouTube Studio o tu canal y copiá el enlace de la transmisión en vivo.
2. En el enlace https://www.youtube.com/watch?v=XXXXXXXXXXX, el ID es el texto que aparece después de v=.
3. Abrí config.js y reemplazá el valor vacío de LIVE_VIDEO_ID por ese ID:
   LIVE_VIDEO_ID: "XXXXXXXXXXX"
4. Guardá el archivo y volvé a subir/publicar el sitio.
5. Si no hay una emisión activa o preferís no insertar un video, dejá LIVE_VIDEO_ID vacío. La página mostrará el acceso al canal y al directo.

IMPORTANTE SOBRE YOUTUBE
El enlace @360RockNrollarg identifica tu canal, pero el reproductor embebido necesita el ID del video concreto. Por eso, cuando hagas una nueva emisión, actualizá LIVE_VIDEO_ID con el ID de ese directo. Los visitantes también tendrán siempre un botón para abrir tu canal o su página de emisiones en vivo.

PUBLICAR GRATIS EN CLOUDFLARE PAGES
1. Creá una cuenta gratuita en https://dash.cloudflare.com/
2. Creá un repositorio en GitHub en https://github.com/new y subí los cuatro archivos de este paquete a la raíz del repositorio.
3. En Cloudflare: Workers & Pages > Create application > Pages > Connect to Git.
4. Conectá GitHub y elegí el repositorio que acabás de crear.
5. Configuración:
   - Production branch: main
   - Framework preset: None
   - Build command: exit 0 (o dejalo vacío si el panel lo permite)
   - Build output directory: /
6. Iniciá el despliegue. Cloudflare te dará una dirección gratuita terminada en .pages.dev.
7. Cada vez que actualices el repositorio, Cloudflare publicará los cambios automáticamente.

SITIO ESTÁTICO
No requiere base de datos, servidor propio, frameworks ni instalación de dependencias.


REDISEÑO CON TUS IMÁGENES
- assets/banner-360rock.jpg: primera imagen enviada, conservada completa y sin recortes como banner principal.
- assets/estudio-360rock.png: escena de estudio con pared de ladrillos, dos sillas vacías, micrófonos con brazos articulados y cartel ON AIR apagado.
Ambas imágenes se muestran completas, manteniendo su proporción original.


ACTUALIZACIÓN DE IDENTIDAD MUSICAL
El fondo del estudio fue reemplazado por una ambientación dedicada al rock and roll clásico y al rock: Elvis Presley, Chuck Berry, The Beatles, The Rolling Stones, Jimi Hendrix y Led Zeppelin, con vinilos, guitarras y amplificadores. No se utiliza estética ni referencias de pop comercial.


ACTUALIZACIÓN DE CONTACTO
Se quitó el número de celular de la gráfica principal. No se publica ningún teléfono ni dato personal de contacto en el banner o en el fondo del estudio.
