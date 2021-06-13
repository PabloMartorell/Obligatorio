function mostrarPantallaCrearTarea() {
    ocultarTodasLasPantallasDocente();
    mostrarPantallaPorId("pantallaCrearTareaDocente");
}

function mostrarPantallaDevolucionesDocente() {
    ocultarTodasLasPantallasDocente();
    mostrarPantallaPorId("pantallaDevolucionesDocente");
    mostrarDevolucionesPendientes();
}

function mostrarPantallaEstadisticasDocente() {
    ocultarTodasLasPantallasDocente();
    mostrarPantallaPorId("pantallaEstadisticasDocente");
    mostrarTotalEjerciciosEntregados();
    mostrarAlumnosConMasEntregas();
}

function mostrarPantallaInfoAlumnosDocente() {
    ocultarTodasLasPantallasDocente();
    mostrarPantallaPorId("pantallaInfoAlumnosDocente");
    mostrarTablaAlumnosDelDocente();
}

function mostrarTablaAlumnosDelDocente() {
    let informacionDeAlumnos = "Usted aún no tiene ningun alumno asignado";
    if (alumnosDelDocenteActual.length) {
        informacionDeAlumnos = "<h2>Estos son sus alumnos:</h2>";
        informacionDeAlumnos += generarTablaDeAlumnos();
    }

    document.querySelector("#tablaAlumnosDelDocente").innerHTML =
        informacionDeAlumnos;
}

function obtenerAlumnosDelDocente() {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].docente == usuarioActual.nombreUsuario) {
            alumnosDelDocenteActual.push(alumnos[i]);
        }
    }
}

function generarTablaDeAlumnos(alumnosDelDocente) {
    let tablaAlumnos = `<table> 
    <tr>
        <th>Nombre</th>
        <th>Nombre de Usuario</th>
    </tr>`;

    for (let i = 0; i < alumnosDelDocenteActual.length; i++) {
        tablaAlumnos += ` <tr>
            <td>${alumnosDelDocenteActual[i].nombre}</td>
            <td>${alumnosDelDocenteActual[i].nombreUsuario}</td>
         </tr>`;
    }

    tablaAlumnos += "</table>";

    return tablaAlumnos;
}

function mostrarTotalEjerciciosEntregados() {
    const totalEjerciciosEntregados = calcularTotalEjerciciosEntregados();
    const resultado = `El total de ejercicios entregados es: ${totalEjerciciosEntregados}`;
    document.querySelector("#tablaAlumnosDelDocente").innerHTML = resultado;
}

function calcularTotalEjerciciosEntregados() {
    let total = 0;
    if (tareasEntregadas.length) {
        total = tareasEntregadas.length;
    }
    return total;
}

function mostrarAlumnosConMasEntregas() {
    const alumnosConMasEntregas = obtenerAlumnosConMasEntregas();
    let resultado = "Ningún alumno ha realiado una entrega.";

    if (alumnosConMasEntregas.length) {
        resultado = generarTablaDeAlumnosConMasEntregas(alumnosConMasEntregas);
    }

    document.querySelector("#tablaAlumnosConMasEntregas").innerHTML = resultado;
}

function obtenerAlumnosConMasEntregas() {
    const alumnosConMasEntregas = [];
    for (let i = 0; i < alumnosDelDocenteActual.length; i++) {
        let totalEntregasDelAlumno = 0;
        for (let j = 0; j < tareasEntregadas.length; j++) {
            const alumnoEntregoTarea =
                tareasEntregadas[j].nombreUsuario ==
                alumnosDelDocenteActual[i].nombreUsuario;
            if (alumnoEntregoTarea) {
                totalEntregasDelAlumno++;
            }
        }
        const info = {
            nombre: alumnosDelDocenteActual[i].nombre,
            cantidadEntregas: totalEntregasDelAlumno,
        };
        alumnosConMasEntregas.push(info);
    }
    return alumnosConMasEntregas;
}

function generarTablaDeAlumnosConMasEntregas(alumnosConMasEntregas) {
    let tablaAlumnos = `<table> 
    <tr>
        <th>Nombre Alumno</th>
        <th>Cantidad de Entregas</th>
    </tr>`;

    for (let i = 0; i < alumnosConMasEntregas.length; i++) {
        tablaAlumnos += ` <tr>
            <td>${alumnosConMasEntregas[i].nombre}</td>
            <td>${alumnosConMasEntregas[i].cantidadEntregas}</td>
         </tr>`;
    }

    tablaAlumnos += "</table>";

    return tablaAlumnos;
}

function mostrarDevolucionesPendientes() {
    const devolucionesPendientes = obtenerDevolucionesPendientes();
    let resultado = "Ningún alumno ha realiado una entrega.";

    if (devolucionesPendientes.length) {
        resultado = generarTablaDeDevolucionesPendientes(
            devolucionesPendientes
        );
    }

    document.querySelector("#tablaDevolucionesPendientes").innerHTML =
        resultado;
}

function obtenerDevolucionesPendientes() {
    const devolucionesPendientes = [];

    for (let i = 0; i < tareasEntregadas.length; i++) {
        let tareaNoCorregida = !tareasEntregadas[i].corregida; //TODO: esta lista no es correcta, tiene que filtrar por el alumno del docente
        if (tareaNoCorregida) {
            devolucionesPendientes.push(tareasEntregadas[i]);
        }
    }
    return devolucionesPendientes;
}

function generarTablaDeDevolucionesPendientes(devolucionesPendientes) {
    let tablaDevoluciones = `<table> 
    <tr>
        <th>Entregado Por</th>
        <th>Titulo de la tarea</th>
    </tr>`;

    for (let i = 0; i < devolucionesPendientes.length; i++) {
        tablaDevoluciones += ` <tr>
            <td>${devolucionesPendientes[i].nombreAlumno}</td>
            <td>${devolucionesPendientes[i].tituloTarea}</td>
         </tr>`;
    }

    tablaDevoluciones += "</table>";

    return tablaDevoluciones;
}
