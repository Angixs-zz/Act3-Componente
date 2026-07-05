// Llamadas a la librería de Componente Visual (componente.js)
activarTooltips();

document.getElementById("botonIniciarTour").addEventListener("click", function () {
    crearTour([
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
});

// Lógica de validación del formulario (usando utileria.js)
document.getElementById("botonEnviar").addEventListener("click", function () {
    let nombre = document.getElementById("nombre").value;
    let correo = document.getElementById("correo").value;

    // Usamos las funciones de utileria.js
    if (!soloLetras(nombre)) {
        return; // soloLetras ya se encarga de mostrar un alert si falla
    }

    if (!validarCorreo(correo)) {
        return; // validarCorreo ya se encarga de mostrar un alert si falla
    }

    // Si pasa todas las validaciones
    alert("¡Los datos son válidos! Formulario listo para enviarse.");
});
