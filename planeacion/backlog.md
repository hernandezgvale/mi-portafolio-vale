# Backlog de mi-portafolio

Este archivo es el **plan** del proyecto. Cada historia de usuario (HU) de aquí
se convierte en un **issue** en GitHub, se pone en el **tablero** de GitHub
Projects y se cierra con un **commit** que diga `closes #número`.

Formato de cada criterio de aceptación:

> `- [ ] Dado <contexto>, cuando <acción>, entonces <resultado esperado>.`

Cuando crees el issue en GitHub, escribe su número en la línea **Issue:**
(por ejemplo `**Issue:** #4`).

---

## HU-01 · Menú de navegación fijo  ✅ (ejemplo resuelto)

**Historia:** Como visitante del portafolio, quiero un menú fijo en la parte superior, para ir a cualquier sección sin hacer scroll.

**Etiquetas:** historia, frontend, prioridad-alta · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que abro el portafolio, cuando miro la parte superior, entonces veo un menú con enlaces a "Sobre mí", "Proyectos" y "Contacto".
- [ ] Dado que estoy en la parte de arriba, cuando hago clic en "Proyectos", entonces la página baja hasta la sección de proyectos.
- [ ] Dado que hice scroll hasta el final, cuando miro la parte superior de la pantalla, entonces el menú sigue visible.

**Issue:** #

---

## HU-02 · Sección de habilidades  ✅ (ejemplo resuelto)

**Historia:** Como reclutador, quiero ver las habilidades técnicas del aprendiz en una lista, para evaluar rápidamente si su perfil encaja con la vacante.

**Etiquetas:** historia, frontend · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que abro el portafolio, cuando llego a la sección "Habilidades", entonces veo al menos 6 habilidades técnicas.
- [ ] Dado que estoy en la sección "Habilidades", cuando la leo, entonces las habilidades están agrupadas en "Frontend" y "Herramientas".
- [ ] Dado que estoy en el menú, cuando hago clic en "Habilidades", entonces la página baja hasta esa sección.

**Issue:** #

---

## HU-03 · Pie de página con redes

**Historia:** Como visitante, quiero un pie de página con el año y los enlaces a las redes del aprendiz, para contactarlo desde cualquier parte de la página.

**Etiquetas:** historia, frontend · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que abro el portafolio, cuando llego al final de la página, entonces veo un pie de página con el año 2026 y el nombre del aprendiz.
- [ ] Dado que estoy en el pie de página, cuando reviso los enlaces sociales, entonces encuentro enlaces a las redes del aprendiz.
- [ ] Dado que hago clic en un enlace social, cuando se abre el destino, entonces llego a la página correspondiente de esa red social.

**Issue:** #

---

## HU-04 · Enlace al repositorio en cada proyecto

**Historia:** Como reclutador, quiero que cada tarjeta de proyecto tenga un enlace a su repositorio en GitHub, para revisar el código que escribió el aprendiz.

**Etiquetas:** historia, frontend · **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que abro la sección "Proyectos", cuando reviso las tarjetas, entonces cada proyecto tiene un enlace a su repositorio en GitHub.
- [ ] Dado que veo el enlace de un proyecto, cuando reviso el texto del enlace, entonces aparece un texto claro como "Ver repositorio en GitHub".
- [ ] Dado que hago clic en el enlace del repositorio, cuando se abre el destino, entonces el repositorio se abre en una pestaña nueva.

**Issue:** #

---

## HU-05 · Portafolio adaptable al celular

**Historia:** Como visitante que usa el celular, quiero que el portafolio se vea bien en pantallas pequeñas, para leerlo sin hacer zoom ni scroll horizontal.

**Etiquetas:** historia, frontend, prioridad-alta · **Estimación:** M

**Criterios de aceptación:**

- [ ] Dado que abro el portafolio en una pantalla de menos de 600 px, cuando veo las tarjetas de proyectos, entonces las 3 tarjetas se muestran en una sola columna.

- [ ] Dado que navego por el portafolio desde un celular, cuando leo el contenido, entonces puedo ver los textos sin necesidad de hacer zoom.

- [ ] Dado que uso el portafolio en una pantalla pequeña, cuando recorro la página, entonces el contenido no genera desplazamiento horizontal.

**Issue:** #

---

## HU-06 · (RETO) Escribe tu propia historia


**Historia:** Como visitante del portafolio, quiero un botón para volver al inicio de la página, para navegar más fácilmente después de bajar por el contenido.

**Etiquetas:** historia, frontend **Estimación:** S

**Criterios de aceptación:**

- [ ] Dado que bajo por la página del portafolio, cuando aparece el botón "Volver arriba", entonces puedo identificarlo fácilmente.

- [ ] Dado que estoy en una parte inferior de la página, cuando hago clic en el botón "Volver arriba", entonces la página regresa al inicio.

- [ ] Dado que estoy en la parte superior de la página, cuando todavía no he bajado por el contenido, entonces el botón no estorba la navegación.

**Issue:** #
