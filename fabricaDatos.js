precargarDatos();

function precargarDatos() {
    precargarUsuarios();
}

function precargarUsuarios() {
    crearDocentes();
    crearAlumnos();
    crearTareas();
    console.log("usuarios", usuarios); //BORRAR ESTO ANTES DE LA ENTREGA
}

function crearAlumnos() {
    for (let i = 1; i <= 5; i++) {
        const nombre = "alumno" + i;
        const nombreUsuario = "alumnoUserName" + i;
        const contraseña = "Alumno" + i;
        const perfil = PERFIL_ALUMNO;
        const docente = docentes[i - 1].nombreUsuario;
        let nivel = NIVEL_INICIAL;

        if (i >= 2 && i <= 3) {
            nivel = NIVEL_INTERMEDIO;
        } else if (i > 3) {
            nivel = NIVEL_AVANZADO;
        }

        const datosValidos = verificarDatosDeUsuario(nombreUsuario, contraseña);

        if (datosValidos) {
            crearAlumno(
                nombre,
                nombreUsuario,
                contraseña,
                perfil,
                nivel,
                docente
            );
        } else {
            console.error("Datos de Alumno inválidos");
        }
    }
}

function crearDocentes() {
    for (let i = 1; i <= 5; i++) {
        const nombre = "docente" + i;
        const nombreUsuario = "docenteUserName" + i;
        const contraseña = "Docente" + i;
        const perfil = PERFIL_DOCENTE;

        const datosValidos = verificarDatosDeUsuario(nombreUsuario, contraseña);

        if (datosValidos) {
            crearDocente(nombre, nombreUsuario, contraseña, perfil);
        } else {
            console.error("Datos de Docente inválidos");
        }
    }
}

function crearDocente(nombre, nombreUsuario, contraseña, perfil) {
    const docente = new Docente(nombre, nombreUsuario, contraseña, perfil);

    docentes.push(docente);
    usuarios.push(docente);
}

function crearAlumno(
    nombre,
    nombreUsuario,
    contraseña,
    perfil,
    nivel,
    docente
) {
    const alumno = new Alumno(
        nombre,
        nombreUsuario,
        contraseña,
        perfil,
        nivel,
        docente
    );

    alumnos.push(alumno);
    usuarios.push(alumno);
}

function crearTareas() {
    for (let i = 1; i <= 10; i++) {
        let nivel = NIVEL_INICIAL;
        const titulo = "Tarea Prueba " + i;
        const descripcion = "Esta es la descripción de la Tarea Prueba " + i;
        const foto = "";

        if (i >= 4 && i <= 6) {
            nivel = NIVEL_INTERMEDIO;
        } else if (i > 6) {
            nivel = NIVEL_AVANZADO;
        }
        const datosId = titulo + nivel;
        const id = generarId(datosId);
        crearTarea(titulo, nivel, descripcion, foto, id);
    }
}

function crearTarea(titulo, nivel, descripcion, foto, id) {
    const tarea = new Tarea(titulo, nivel, descripcion, foto, id);
    tareas.push(tarea);
}
