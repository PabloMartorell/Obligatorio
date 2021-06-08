function login() {
    const nombreUsuario = document.querySelector("#usuario").value;
    const contraseña = document.querySelector("#pass").value;
    const usuario = usuarioExiste(nombreUsuario, contraseña);
    if (usuario != null) {
        ingresarUsuario(usuario);
        usuarioActual = usuario;
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
    ingresarUsuarioPorPerfil(usuario.perfil);
    mostrarPantallaPorId("banner");
    mostrarMensajeBienvendia(usuario);
}

function ingresarUsuarioPorPerfil(perfil) {
    if (perfil == PERFIL_ALUMNO) {
        ingresarAlumno();
        mostrarImagenPerfilAlumno();
        mostrarTareasARealizar();
    } else if (perfil == PERFIL_DOCENTE) {
        ingresarDocente();
        mostrarImagenPerfilDocente();
    }
}

function ingresarAlumno() {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("pantallaAlumno");
}

function ingresarDocente() {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("pantallaDocente");
}

function mostrarLoginError() {
    let mensajeError = "El nombre de usuario y/o contraseña no son correctos";
    document.querySelector("#loginError").innerHTML = mensajeError;
}
