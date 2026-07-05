# GuiaExplorador.js - Librería de Ayuda Visual e Interactiva

<p align="center">
  <strong>INSTITUTO TECNOLÓGICO NACIONAL DE MÉXICO</strong><br>
  <strong>INSTITUTO TECNOLÓGICO DE OAXACA</strong>
</p>

<p align="center">
  <strong>Nombre de la carrera:</strong><br>
  Ingeniería en Sistemas Computacionales
</p>

<p align="center">
  <strong>Nombre de la materia:</strong><br>
  Programación Web
</p>

<p align="center">
  <strong>Unidad:</strong><br>
  Unidad 2
</p>

<p align="center">
  <strong>Título del trabajo:</strong><br>
  Actividad 3 - Componente Visual en JavaScript
</p>

<p align="center">
  <strong>Alumno:</strong><br>
  Hernández Pérez Miguel Angel
</p>

<p align="center">
  <strong>Docente:</strong><br>
  Adelina Martínez Nieto
</p>

<p align="center">
  <strong>Grupo:</strong><br>
  B
</p>

<p align="center">
  <strong>Fecha de entrega:</strong><br>
  05 de julio del 2026
</p>

---

## ¿Qué problema resuelve?

No te ha pasado que entras a un pagina web, aplicacion web o un sitio y al momento en que entras noo sabes a donde picar o como dezplasarte o simplemente no entiendes el comportamiento de la pagina? Esto sucede para muchos usuarios. Esto genera frustracion, errores de llenado y hasta que lleguen a abandonar la pagina.

Mi librería **GuiaExplorador.js** resuelve este problema proporcionando dos componentes visuales muy fáciles de implementar:
El primero es:
1. **TooltipJS:** Muestra pequeños mensajes de ayuda que siguen al cursor del mouse, indicando exactamente que hace cada elemento de la interfaz.
El segundo es:
2. **TourJS:** Es una guía interactiva paso a paso que lleva al usuario de la mano por toda la página. Este muestra  resaltando la seccion que se esta explicando mediante un marco visual

Ambos componentes fueron creados con JavaScript, eliminando la necesidad de usar dependencias externas y permitiendo a cualquier desarrollador configurarlo en su propio `index.js` de manera totalmente personalizable.

## Instalación

Para utilizar **GuiaExplorador.js** en tus proyectos, debes incluir la hoja de estilos para la apariencia de los componentes y el archivo JavaScript para la lógica.

```html
<!-- 1. Agrega el CSS en la etiqueta <head> de tu documento -->
<link rel="stylesheet" href="css/guiaExplorador.css">

<!-- 2. Coloca el script antes de cerrar la etiqueta </body> -->
<script src="js/guiaExplorador.js"></script>
```

## Uso y Ejemplos

La librería está hecha para usarse de forma sencilla. Sus funciones se pueden llamar desde tu archivo principal de JavaScript, por ejemplo desde index.j

### 1. `agregarAyuda(idElemento, mensaje)` - (TooltipJS)
Esta función asigna un mensaje de ayuda a cualquier elemento de tu HTML usando su atributo `id`.

**HTML:**
```html
<input type="text" id="nombreUsuario" placeholder="Tu nombre">
```

**JavaScript (`index.js`):**
```javascript
// Agrega un mensaje que seguira al mouse al pasar sobre el input
agregarAyuda("nombreUsuario", "Ayuda: Ingresa aquí tu nombre completo empezando por apellidos.");
```

### 2. `crearTour(pasos)` - (TourJS)
Inicia un recorrido interactivo por la página. Recibe un arreglo de objetos donde cada objeto representa un "paso" del tour.

**HTML:**
```html
<button id="iniciarGuia">Iniciar Recorrido</button>

<div id="seccionUno">
    <h2>Paso 1</h2>
</div>
```

**JavaScript (`index.js`):**
```javascript
// Obtenemos el boton que iniciara el tour
let botonInicioTour = document.getElementById("iniciarGuia");

// Al darle clic, se ejecutara la función iniciarTour
botonInicioTour.addEventListener("click", iniciarTour);

// Esta funcion contiene los pasos que se van a mostrar en la guia
function iniciarTour() {
    crearTour([
        // Cada grupo entre { } es un paso del tour
        {
            elemento: "#seccionUno",
            titulo: "Paso 1: Bienvenida",
            mensaje: "Esta es la primera sección de nuestra página."
        },
        {
            elemento: "#seccionDos",
            titulo: "Paso 2: Formulario",
            mensaje: "Aquí puedes ingresar tus datos de contacto."
        }
    ]);
}
```


## Capturas de Pantalla

A continuación se demuestra el funcionamiento visual de los componentes implementados en el proyecto de prueba:

### 1. TooltipJS en acción
*El mensaje emergente sigue de manera fluida al cursor del mouse al pasar sobre un elemento.*
![TooltipJS demostración 1](img/tooltip1.png)
![TooltipJS demostración 2](img/tooltip2.png)


### 2. TourJS navegando por la página
*La caja del tour se posiciona de forma fija en la esquina inferior derecha para no obstruir el contenido. Mientras tanto, la sección activa se centra automáticamente y se resalta con un marco.*
![TourJS en progreso 1](img/tour1.png)
![TourJS en progreso 2](img/tour2.png)
![TourJS en progreso 1](img/tour2.png)
![TourJS en progreso 2](img/tour3.png)

## Video Demostrativo

En el siguiente video se demuestra en tiempo real el problema que resuelve la librería

[**Ver Video Demostrativo en YouTube**](https://youtu.be/ENLACE_DE_TU_VIDEO)

## Enlace a GitHub

Puedes acceder al código fuente completo y ver la demostración en vivo de los componentes en los siguientes enlaces:

[**Ver Repositorio**](https://github.com/Angixs-zz/Act3-Componente)

[**Ver Página en Vivo**](https://angixs-zz.github.io/Act3-Componente/)
