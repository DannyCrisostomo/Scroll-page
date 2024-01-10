# Scroll Webpage

Este proyecto es una página web simple con secciones que se desplazan verticalmente. Al hacer scroll hacia arriba o hacia abajo, la página se desplaza automáticamente a la siguiente sección.


## Tecnologías Utilizadas

- HTML
- CSS (con estilos responsivos)
- JavaScript

## Capturas de Pantalla

*Captura de Pantalla de la Sección "Profesión"*
![Profesión](https://github.com/DannyCrisostomo/Scroll-page/blob/1b357224dfa783e11c466bb94617affb674c9cae/Scroll.png)

*Captura de Pantalla de la Sección "Informática"*
![Informática](https://github.com/DannyCrisostomo/Scroll-page/blob/1b357224dfa783e11c466bb94617affb674c9cae/Scroll2.png)

*Captura de Pantalla de la Sección "Programación"*
![Programación](https://github.com/DannyCrisostomo/Scroll-page/blob/1b357224dfa783e11c466bb94617affb674c9cae/Scroll3.png)


## Estilos y Colores

El proyecto utiliza variables CSS para los colores. Aquí están algunas de las variables utilizadas:

```/* Estilos del scroll */
::-webkit-scrollbar {
    display: none;
}

* {
    margin: 0;
    box-sizing: border-box;
    font-family: sans-serif;
    list-style: none;
    outline: none;
    border: none;
}
html, body {
    overflow: hidden;
    font-size: 62.5%;
}

.sections {
    height: 100vh;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;
    display: flex;
    color: white;
    font-family: var(--fontHeaders1);
    align-items: center;
    justify-content: center;
    font-size: 5vw;
    font-weight: 900;
}
.section{
    scroll-snap-align: start;
}
#seccion1{
    background: rgb(255, 0, 98);
}
#seccion2{
    background: rgb(0, 0, 0);
}
#seccion3{
    background: rgb(0 255 173);
}
