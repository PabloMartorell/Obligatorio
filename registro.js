function mostrarPantallaRegistro() {
    ocultarTodasLasPantallas();
    mostrarPantallaPorId("registro");
}

function cancelarRegistro() {
    volverAlInicio();
    limpiarValoresDeRegisto();
    ocultarPantallaPorId("registroError");
}

function mostrarInfoExtraPorTipoDeUsuario() {
    const tipoUsuarioSeleccionado = document.querySelector(
        "#tipoUsuarioRegistro"
    ).value;
    const esAlumno = tipoUsuarioSeleccionado == PERFIL_ALUMNO;
    let infoExtra = `<select id='docenteReferido' class='select'>
        <option value="tipoDocente">Seleccione su Docente</option>`;

    if (esAlumno) {
        for (let i = 0; i < docentes.length; i++) {
            infoExtra += `
            <option value="${docentes[i].nombreUsuario}">${docentes[i].nombre} (${docentes[i].nombreUsuario})</option>
            `;
        }
        infoExtra += "</select>";
    } else {
        infoExtra = "";
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
        volverAlInicio();
        limpiarValoresDeRegisto();
    } else {
        mostrarMensajeErrorRegistro(nombreUsuario, contraseña);
    }
}

function limpiarValoresDeRegisto() {
    limpiarValorElementoPorId("nombreRegistro");
    limpiarValorElementoPorId("usuarioRegistro");
    limpiarValorElementoPorId("contraseñaRegistro");
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
