function mostrarPantallaRegistro() {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("registro");
}

function cancelarRegistro() {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("login");
}

function mostrarInfoExtraPorTipoDeUsuario() {
    const tipoUsuarioSeleccionado = document.querySelector(
        "#tipoUsuarioRegistro"
    ).value;
    const esAlumno = tipoUsuarioSeleccionado == PERFIL_ALUMNO;
    let infoExtra =
        "<label for='docenteReferido'>Seleccione su docente:</label><br>";

    if (esAlumno) {
        infoExtra += "<select id='docenteReferido'>";
        for (let i = 0; i < docentes.length; i++) {
            infoExtra += `
            <option value="${docentes[i].nombreUsuario}">${docentes[i].nombre} (${docentes[i].nombreUsuario})</option>
            `;
        }
        infoExtra += "</select>";
    }

    document.querySelector("#infoRegistroExtra").innerHTML = infoExtra;
}

function crearRegistro() {
    const nombre = document.querySelector("#nombreRegistro").value;
    const nombreUsuario = document.querySelector("#usuarioRegistro").value;
    const contraseña = document.querySelector("#contraseñaRegistro").value;
    const perfil = document.querySelector("#tipoUsuarioRegistro").value;

    const datosValidos = verificarDatosDeUsuario(nombreUsuario, contraseña);
    if (datosValidos) {
        if (perfil == PERFIL_ALUMNO) {
            const docenteReferido =
                document.querySelector("#docenteReferido").value;
            crearAlumno(
                nombre,
                nombreUsuario,
                contraseña,
                perfil,
                NIVEL_INICIAL,
                docenteReferido
            );
        } else if (perfil == PERFIL_DOCENTE) {
            crearDocente(nombre, nombreUsuario, contraseña, perfil);
        }

        ingresarUsuarioPorPerfil(perfil);
    } else {
        mostrarMensajeErrorRegistro(nombreUsuario, contraseña);
    }
}

function mostrarMensajeErrorRegistro(nombreUsuario, contraseña) {
    const usuarioValido = verificarNombreUsuario(nombreUsuario);
    const contraseñaValida = verificarContraseña(contraseña);

    let mensaje = "";

    if (!usuarioValido) {
        mensaje +=
            "<p>El usuario ingresado ya existe. Por favor, pruebe con otro</p>";
    }

    if (!contraseñaValida) {
        mensaje +=
            "<p>La contraseña ingresada es invalida. Debe de tener un mínimo de 4 caracteres, al menos una mayúscula, una minúscula y un número</p>";
    }

    document.querySelector("#registroError").innerHTML = mensaje;
}
