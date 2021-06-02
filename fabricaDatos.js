precargarDatos();

function precargarDatos() {
    // TODO: antes de agregar a la lista, verificar que la pass y el userName cumplan con los requerimientos

    usuarios = crearUsuarios();
}

function crearUsuarios() {
    let usuarios1 = [];
    let usuarioNuevo = usuario;

    for (let i = 0; i < 10; i++) {
        usuarioNuevo.nombreUsuario = "testUser " + i;
        usuarioNuevo.nombre = "User " + i;
        usuarioNuevo.email = `testUser${i}@hotmail.com`;
        usuarioNuevo.pass = "1234"; //Cambiar esto para que cumpla los requerimientos

        usuarios1.push({ ...usuarioNuevo });
    }
    return usuarios1;
}
