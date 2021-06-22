inicializar();

agregarEventoAImagenes();

agregarEventoAAudios();

function inicializar() {
    document.querySelector("#btnIngresar").addEventListener("click", login);
    document
        .querySelector("#btnRegistrar")
        .addEventListener("click", mostrarPantallaRegistro);

    document
        .querySelector("#btnCancelarRegistro")
        .addEventListener("click", cancelarRegistro);

    document
        .querySelector("#btnRegistrarse")
        .addEventListener("click", crearRegistro);

    document
        .querySelector("#tipoUsuarioRegistro")
        .addEventListener("change", mostrarInfoExtraPorTipoDeUsuario);

    document.querySelector("#logOut").addEventListener("click", logOut);

    document
        .querySelector("#opcionTareasEstudiante")
        .addEventListener("click", mostrarPantallaEstudianteTareas);

    document
        .querySelector("#opcionEntregasEstudiante")
        .addEventListener("click", mostrarPantallaEstudianteEntregas);

    document
        .querySelector("#btnBuscarTarea")
        .addEventListener("click", buscarTarea);

    document
        .querySelector("#tareaABuscar")
        .addEventListener("keyup", buscarTarea);

    document
        .querySelector("#opcionNuevaTareaDocente")
        .addEventListener("click", mostrarPantallaCrearTarea);

    document
        .querySelector("#opcionDevolucionesDocente")
        .addEventListener("click", mostrarPantallaDevolucionesDocente);

    document
        .querySelector("#opcionEstadisticasDocente")
        .addEventListener("click", mostrarPantallaEstadisticasDocente);

    document
        .querySelector("#opcionAlumnosDocente")
        .addEventListener("click", mostrarPantallaInfoAlumnosDocente);

    document
        .querySelector("#btnGuardarNuevoNivelAlumno")
        .addEventListener("click", guardarNuevoNivelAlumno);

    document
        .querySelector("#btnCrearTarea")
        .addEventListener("click", crearNuevaTarea);

    document
        .querySelector("#btnAtrasDetallesTarea")
        .addEventListener("click", regresarADetallesTarea);

    document
        .querySelector("#btnRealizarEntregaTarea")
        .addEventListener("click", mostrarPantallaRealizaEntrega);

    document
        .querySelector("#btnCancelarEntrega")
        .addEventListener("click", cancelarEntrega);

    document
        .querySelector("#btnEnviarEntrega")
        .addEventListener("click", enviarTarea);

    document
        .querySelector("#btnEnviarDevolucion")
        .addEventListener("click", crearDevolucion);
}

function mostrarPerfilDesplegable() {
    let desplegable = document.querySelector("#opcionesDesplegable").style
        .display;

    if (desplegable == "none") {
        document.querySelector("#opcionesDesplegable").style.display = "block";
    } else {
        document.querySelector("#opcionesDesplegable").style.display = "none";
    }
}

function logOut() {
    volverAlInicio();
}

function agregarEventoAImagenes() {
    const imagenesNuevaTarea = document.querySelectorAll(".img");
    for (let i = 0; i < imagenesNuevaTarea.length; i++) {
        imagenesNuevaTarea[i].addEventListener("click", seleccionarImagen);
    }
}

function agregarEventoAAudios() {
    const imagenesNuevaTarea = document.querySelectorAll(".audio");
    for (let i = 0; i < imagenesNuevaTarea.length; i++) {
        imagenesNuevaTarea[i].addEventListener("click", seleccionarAudio);
    }
}
