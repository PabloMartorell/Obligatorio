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
