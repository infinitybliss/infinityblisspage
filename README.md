# Infinity Bliss — Nails & Massage

Sitio web oficial de **Infinity Bliss**, centro de bienestar en Santiago de Compostela.

Este repositorio contiene el código fuente de la página web del negocio, incluyendo su catálogo de tratamientos, contenido multilingüe e integración con el sistema externo de reservas SimplyBook.me.

**Propiedad del proyecto:** Infinity Bliss
**Repositorio:** `infinitybliss/infinityblisspage`
**Estado:** en preparación para la entrega y publicación definitiva.

---

## 1. ¿Qué incluye la página?

- Página de inicio e información sobre el centro.
- Catálogo de masajes, rituales, manicura, pedicura y presoterapia.
- Páginas individuales de tratamientos.
- Contenido en español, gallego e inglés.
- Acceso al sistema de reservas de SimplyBook.me.
- Información de contacto y páginas legales.
- Diseño adaptado a móviles, tabletas y ordenadores.

Las reservas y los datos de los clientes se gestionan en SimplyBook.me, no en este repositorio.

## 2. Tecnologías

| Tecnología                       | Uso                                              |
| -------------------------------- | ------------------------------------------------ |
| Next.js                          | Estructura de la web                             |
| React y TypeScript               | Componentes e interfaz                           |
| Tailwind CSS                     | Estilos visuales                                 |
| Cloudflare Workers Static Assets | Publicación y alojamiento                        |
| SimplyBook.me                    | Gestión de citas y disponibilidad                |
| GitHub                           | Almacenamiento del código e historial de cambios |

El proyecto utiliza una compilación estática. La carpeta `out/` se genera al compilar la aplicación.

## 3. Enlaces del proyecto

| Recurso                         | Dirección                                          |
| ------------------------------- | -------------------------------------------------- |
| Página web definitiva           | Pendiente de configurar                            |
| Vista provisional en Cloudflare | Pendiente de añadir                                |
| Panel de Cloudflare             | https://dash.cloudflare.com/                       |
| Panel de SimplyBook.me          | https://simplybook.me/                             |
| Repositorio GitHub              | https://github.com/infinitybliss/infinityblisspage |

**Importante:** completar los enlaces de producción cuando se publique la versión definitiva. No incluir credenciales en esta sección.

## 4. Desarrollo local

Para trabajar en el proyecto se necesita Node.js y npm en versiones compatibles con el `package.json` y el archivo de bloqueo del repositorio.

Clonar el repositorio:

```bash
git clone https://github.com/infinitybliss/infinityblisspage.git
cd infinityblisspage
```

Instalar las dependencias:

```bash
npm install
```

Iniciar el entorno de desarrollo:

```bash
npm run dev
```

Abrir:

http://localhost:3000

Para generar la versión estática:

```bash
npm run build
```

El resultado se genera en `out/`, según la configuración actual del proyecto.

> Antes de ejecutar comandos adicionales, consultar los scripts disponibles en `package.json`.

## 5. Idiomas y navegación

La web dispone de tres idiomas:

| Idioma  | Código |
| ------- | ------ |
| Español | `es`   |
| Gallego | `gl`   |
| Inglés  | `en`   |

Las páginas públicas utilizan rutas localizadas. Por ejemplo:

```text
/es
/gl
/en

/es/servicios
/gl/servizos
/en/services

/es/reservas
/gl/reservas
/en/book
```

Al incorporar una página o tratamiento nuevo, comprobar sus versiones en los tres idiomas, sus enlaces internos y sus metadatos.

## 6. Catálogo y precios

Los tratamientos, descripciones, duraciones y precios se mantienen en el código del proyecto.

Para modificar un servicio:

1. Localizar su definición en el catálogo existente.
2. Actualizar la información correspondiente.
3. Revisar las traducciones ES / GL / EN.
4. Comprobar si el cambio también debe realizarse en SimplyBook.me.
5. Probar la web antes de publicar.

**Los precios y horarios de SimplyBook.me deben mantenerse sincronizados con la información mostrada en la página.**

No modificar precios, duración o condiciones de los servicios sin confirmación del negocio.

## 7. Sistema de reservas

La web utiliza SimplyBook.me para mostrar disponibilidad y gestionar las citas.

Los servicios de la web tienen identificadores internos estables. La integración utiliza además identificadores de servicio (`bookingId`) asignados por SimplyBook.me.

Estos identificadores **no son intercambiables entre cuentas**. Si se crea una nueva cuenta de SimplyBook.me o se sustituyen servicios, hay que revisar el mapeo.

Para modificar la integración:

1. Verificar la URL pública vigente de SimplyBook.me.
2. Obtener los IDs reales de los servicios.
3. Actualizar su configuración en el módulo de reservas correspondiente.
4. Comprobar variantes de duración y precio.
5. Realizar pruebas reales de selección y disponibilidad.

No utilizar identificadores ficticios ni reutilizar IDs de una cuenta anterior sin verificarlos.

**Pendiente de entrega:** documentar aquí la ubicación exacta del archivo que contiene la URL de SimplyBook.me y el mapeo de `bookingId`.

## 8. Despliegue en Cloudflare

La web se publica mediante Cloudflare Workers Static Assets.

La configuración del proyecto se encuentra en `wrangler.jsonc` o en el archivo equivalente que utilice este repositorio.

Flujo previsto:

```text
Cambios en el código
        ↓
GitHub
        ↓
Compilación de Next.js
        ↓
Archivos estáticos en out/
        ↓
Cloudflare Workers
        ↓
Página pública
```

Para el despliegue manual, desde un entorno autorizado:

```bash
npm run build
npx wrangler deploy
```

El despliegue automático desde GitHub deberá configurarse y verificarse en la cuenta de Cloudflare del negocio.

**No asumir que cada `git push` publica automáticamente la web hasta que la integración con GitHub esté configurada y probada.**

## 9. Dominio y QR de reservas

El dominio definitivo debe pertenecer al negocio y estar gestionado desde sus cuentas.

El proyecto puede conservar su dirección `workers.dev` al conectar un dominio personalizado.

Si se imprimen códigos QR con una URL `workers.dev`, se debe mantener activo el Worker correspondiente para que esos códigos continúen funcionando.

**Pendiente de entrega:**

- Dominio definitivo.
- URL pública de Cloudflare.
- URL estable utilizada para los QR.
- Configuración de cualquier redirección.

No eliminar ni renombrar un Worker que reciba visitas desde materiales impresos sin verificar antes las consecuencias.

## 10. Identidad visual

La web utiliza la identidad **Infinity Bliss Light Gold**:

| Elemento        | Color     |
| --------------- | --------- |
| Blanco marfil   | `#FFFEFC` |
| Crema luminoso  | `#F8F5EF` |
| Blanco          | `#FFFFFF` |
| Cacao oscuro    | `#302820` |
| Dorado champán  | `#C5A16D` |
| Dorado profundo | `#9A7344` |
| Arena pálida    | `#EAE0D2` |
| Taupe cálido    | `#725B43` |

Los colores deben mantenerse centralizados en los estilos o tokens del proyecto.

No modificar el logotipo original sin autorización del negocio.

## 11. Cuentas y permisos

Las cuentas y servicios relacionados con la web deben permanecer bajo control de Infinity Bliss:

- GitHub: repositorio y código fuente.
- Cloudflare: alojamiento, despliegues y dominio, si se gestiona desde esta plataforma.
- SimplyBook.me: sistema de reservas.
- Registrador del dominio: titularidad y renovación.

Los desarrolladores deben trabajar mediante accesos individuales de colaborador o miembro, sin necesidad de compartir la contraseña principal del negocio.

Nunca subir al repositorio contraseñas, tokens de acceso, claves privadas, archivos `.env` con secretos ni información personal de clientes.

## 12. Entrega y mantenimiento

Este repositorio permite que Infinity Bliss conserve el código fuente y pueda encargar modificaciones a otro profesional en el futuro.

Para una transferencia de mantenimiento, el nuevo desarrollador deberá recibir los permisos necesarios en GitHub y, cuando proceda, Cloudflare y SimplyBook.me.

Antes de publicar modificaciones importantes, comprobar:

- Funcionamiento en móvil y ordenador.
- Enlaces y contenido de los tres idiomas.
- Catálogo, precios y duraciones.
- Integración de reservas.
- Datos de contacto.
- Generación correcta de la versión estática.

Las modificaciones del código no actualizan automáticamente la configuración interna de SimplyBook.me.

---

**Infinity Bliss — Nails & Massage**
Santiago de Compostela, Galicia.
