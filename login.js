function login() {
    const nombreUsuario = document.querySelector("#usuario").value;
    const contraseña = document.querySelector("#pass").value;
    const usuario = usuarioExiste(nombreUsuario, contraseña);
    if (usuario != null) {
        usuarioActual = { ...usuario };
        ingresarUsuario();
    } else {
        mostrarLoginError();
    }
}

function usuarioExiste(usuario, contraseña) {
    return buscarUsuario(usuario, contraseña);
}

function buscarUsuario(nombreUsuario, contraseña) {
    let usuario = null;
    let contador = 0;

    while (usuario === null && contador < usuarios.length) {
        const usuarioCoincide =
            usuarios[contador].nombreUsuario === nombreUsuario;
        const contraseñaCoincide = usuarios[contador].contraseña === contraseña;

        if (usuarioCoincide && contraseñaCoincide) {
            usuario = usuarios[contador];
        }
        contador++;
    }

    return usuario;
}

function ingresarUsuario() {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("banner");
    mostrarMensajeBienvendia();
    mostrarPantallaPorId("mensajeBienvenida");
    ingresarUsuarioPorPerfil();
}

function ingresarUsuarioPorPerfil() {
    if (usuarioActual.perfil == PERFIL_ALUMNO) {
        ingresarAlumno();
    } else if (usuarioActual.perfil == PERFIL_DOCENTE) {
        ingresarDocente();
        mostrarImagenPerfilDocente();
    }
}

function ingresarAlumno() {
    mostrarImagenPerfilAlumno();
    mostrarPantallaPorId("pantallaTareasEstudiante");
    mostrarTareasARealizar();
    mostrarPantallaPorId("pantallaAlumno");
    mostrarFlexPorId("opcionesAlumno");
}

function ingresarDocente() {
    obtenerAlumnosDelDocente();
    mostrarPantallaPorId("pantallaDocente");
    mostrarFlexPorId("opcionesDocente");
    mostrarPantallaInfoAlumnosDocente(); //Primera pantalla que ve el docente
}

function mostrarLoginError() {
    let mensajeError = "El nombre de usuario y/o contraseña no son correctos";
    document.querySelector("#loginError").innerHTML = mensajeError;
}
