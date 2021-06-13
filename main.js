inicializar();

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
        .addEventListener("click", buscarTarea); //TODO:Probar de si esto se puede poner para el onchange

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
