function login() {
    const nombreUsuario = document.querySelector("#usuario").value;
    const contraseña = document.querySelector("#pass").value;
    const usuario = usuarioExiste(nombreUsuario, contraseña);
    if (usuario != null) {
        usuarioActual = { ...usuario };
        ingresarUsuario(usuario);
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

function ingresarUsuario(usuario) {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("banner");
    mostrarMensajeBienvendia(usuario);
    mostrarPantallaPorId("mensajeBienvenida");
    ingresarUsuarioPorPerfil(usuario);
}

function ingresarUsuarioPorPerfil(usuario) {
    if (usuario.perfil == PERFIL_ALUMNO) {
        ingresarAlumno();
    } else if (usuario.perfil == PERFIL_DOCENTE) {
        ingresarDocente();
        mostrarImagenPerfilDocente();
    }
}

function ingresarAlumno() {
    mostrarImagenPerfilAlumno();
    mostrarPantallaPorId("pantallaTareasEstudiante");
    mostrarTareasARealizar(usuario);
    mostrarPantallaPorId("pantallaAlumno");
    //mostrarPantallaPorId("opcionesAlumno");
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
