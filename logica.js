document.addEventListener("DOMContentLoaded", function() {
    var selection = document.getElementById("seleccion");

    selection.addEventListener("change", function() {
        var opcionSeleccionada = this.value;
        
        // Ocultar todas las secciones
        var secciones = document.querySelectorAll("section");
        secciones.forEach(function(seccion) {
            seccion.style.display = "none";
        });

        // Mostrar la sección correspondiente a la opción seleccionada
        if (opcionSeleccionada === "opcion0") {
            document.getElementById("Opcion0").style.display = "block";
        }
        else if (opcionSeleccionada === "opcion1") {
                document.getElementById("Opcion1").style.display = "block";
        } else if (opcionSeleccionada === "opcion2") {
            document.getElementById("Opcion2").style.display = "block";
        } else if (opcionSeleccionada === "opcion3") {
            document.getElementById("Opcion3").style.display = "block";
        } else if (opcionSeleccionada === "opcion4") {
            document.getElementById("Opcion4").style.display = "block";
        } else {
            console.log("Ha habido un problema");
        }
    });
});
