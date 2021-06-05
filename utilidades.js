function mostrarPantallaPorId(idPantalla) {
    document.querySelector(`#${idPantalla}`).style.display = "block";
}

function ocultarPantallaPorId(idPantalla) {
    document.querySelector(`#${idPantalla}`).style.display = "none";
}

function ocultarTodasLasPantallas() {
    document.querySelector("#login").style.display = "none";
    document.querySelector("#pantallaAlumno").style.display = "none";
    document.querySelector("#registro").style.display = "none";
    document.querySelector("#pantallaDocente").style.display = "none";
}

function verificarDatosDeUsuario(nombreUsuario, contraseña) {
    const nombreUsuarioValido = verificarNombreUsuario(nombreUsuario);
    const contraseñaValida = verificarContraseña(contraseña);

    return nombreUsuarioValido && contraseñaValida;
}

function verificarNombreUsuario(nombreUsuario) {
    let nombreUsuarioValido = true;
    let index = 0;

    while (index < usuarios.length && nombreUsuarioValido) {
        const esValido = usuarios[index].nombreUsuario == nombreUsuario;

        if (esValido) {
            nombreUsuarioValido = false;
        }

        index++;
    }

    return nombreUsuarioValido;
}

function verificarContraseña(contraseña) {
    let contieneCuatroCaracteres = contraseña.length >= 4;
    let contieneNumero = false;
    let contieneMayuscula = false;
    let contieneMinuscula = false;

    for (let i = 0; i < contraseña.length; i++) {
        const caracter = contraseña[i];
        const esNumero = !isNaN(caracter * 1);

        if (esNumero) {
            contieneNumero = true;
        }

        if (!esNumero && caracter == caracter.toUpperCase()) {
            contieneMayuscula = true;
        }
        if (!esNumero && caracter == caracter.toLowerCase()) {
            contieneMinuscula = true;
        }
    }

    return (
        contieneNumero &&
        contieneMayuscula &&
        contieneMinuscula &&
        contieneCuatroCaracteres
    );
}
