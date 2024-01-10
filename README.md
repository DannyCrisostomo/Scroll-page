# Scroll Webpage

Este proyecto es una página web simple con secciones que se desplazan verticalmente. Al hacer scroll hacia arriba o hacia abajo, la página se desplaza automáticamente a la siguiente sección.

## Contenido

- [HTML](#html)
- [CSS](#css)
- [JavaScript](#javascript)

## HTML

```html
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/style.css">
  <link rel="stylesheet" href="css/query.css">
  <title>Scroll</title>
  <script src="js/script.js"></script>
</head>

<body>
  <div class="section">
    <div class="sections" style="background: rgb(255, 0, 98);">👨‍🎓 Profesión</div>
    <div class="sections" style="background: rgb(0, 0, 0);">💻 Informatica</div>
    <div class="sections" style="background: rgb(0 255 173);">😎 Programación</div>
  </div>
</body>

</html>
