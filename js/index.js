// Llamadas a la libreria de Componente Visual (componente.js)
// Usamos la herramienta agregarAyuda de nuestra libreria
agregarAyuda("botonIniciarTour", "Haz clic aqui para iniciar la guia interactiva");
agregarAyuda("cajaTour", "Guia al usuario paso a paso dentro de la página");
agregarAyuda("cajaTooltip", "Muestra mensajes de ayuda cuando pasas el mouse");
agregarAyuda("nombre", "Ayuda: Escribe tu nombre");
agregarAyuda("correo", "Ayuda: correo@ejemplo.com");
agregarAyuda("botonEnviar", "Este boton simula el envio del formulario");

// Con esto obtenemos el boton que iniciara el tour
let botonInicioTour = document.getElementById("botonIniciarTour");

// Cuando se de clic en el boton, se ejecutara la funcion iniciarTour
botonInicioTour.addEventListener("click", iniciarTour);

// Esta funcion contiene los pasos que se van a mostrar en la guia interactiva
function iniciarTour() {
    crearTour([
        // cada grupo entre { } es un paso del tour, en este caso hay 5
        {
            elemento: "#seccionInicio",
            titulo: "Bienvenida",
            mensaje: "Esta es la sección principal donde se presenta la libreria GuiaExplorador.js."
        },
        {
            elemento: "#seccionProblema",
            titulo: "Problema que resuelve",
            mensaje: "Aqui se explica para qué sirve la libreria y cómo ayuda al usuario."
        },
        {
            elemento: "#seccionComponentes",
            titulo: "Componentes visuales",
            mensaje: "En esta parte se muestran los componentes incluidos: TourJS y TooltipJS."
        },
        {
            elemento: "#seccionEjemplo",
            titulo: "Formulario de ejemplo",
            mensaje: "Este formulario contiene tooltips que muestran ayuda al pasar el mouse."
        },
        {
            elemento: "#seccionFinal",
            titulo: "Fin del recorrido",
            mensaje: "Aqui termina la guia interactiva. El componente puede reutilizarse con otros pasos y textos."
        }
    ]);
}

let botonEnviar = document.getElementById("botonEnviar");

botonEnviar.addEventListener("click", validarFormulario);

function validarFormulario() {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    if (!soloLetras(nombre)) {
        return;
    }

    if (!validarCorreo(correo)) {
        return;
    }

    alert("¡Los datos son válidos! Formulario listo para enviarse.");
}
