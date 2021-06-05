function login() {
    console.log("usuarios", usuarios);
    const usuario = document.querySelector("#usuario").value;
    const pass = document.querySelector("#pass").value;

    if (usuarioExiste(usuario, pass)) {
        document.querySelector("#login").style.display = "none";
        document.querySelector("#main").style.display = "block";

        let;
    } else {
        mostrarLoginError();
    }
}

function usuarioExiste(usuario, pass) {
    return buscarUsuario(usuario, pass);
}

function buscarUsuario(usuario, pass) {
    let usuarioEncontrado = false;
    let contador = 0;

    while (usuarioEncontrado === false && contador < usuarios.length) {
        const usuarioCoincide = usuarios[contador].nombreUsuario === usuario;
        const passCoincide = usuarios[contador].pass === pass;
        contador++;

        if (usuarioCoincide && passCoincide) {
            usuarioEncontrado = true;
        }
    }

    return usuarioEncontrado;

}

function mostrarLoginError() {

    let mensajeError = "El nombre de usuario y/o contraseña no son correctos";
    document.querySelector("#loginError").innerHTML = mensajeError;
    
}
