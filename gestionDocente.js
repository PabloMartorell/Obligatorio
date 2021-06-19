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
    agregarEventoADetallesDeAlumnoDocente();
}

function obtenerAlumnosDelDocente() {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].docente == usuarioActual.nombreUsuario) {
            alumnosDelDocenteActual.push(alumnos[i]);
        }
    }
}

function generarTablaDeAlumnos() {
    let tablaAlumnos = `<table> 
    <tr>
        <th>Nombre</th>
        <th>Nombre de Usuario</th>
        <th></th>
    </tr>`;

    for (let i = 0; i < alumnosDelDocenteActual.length; i++) {
        tablaAlumnos += ` <tr>
            <td>${alumnosDelDocenteActual[i].nombre}</td>
            <td>${alumnosDelDocenteActual[i].nombreUsuario}</td>
            <td><p class="btn-detalles-alumno" nombre-usuario="${alumnosDelDocenteActual[i].nombreUsuario}">Detalles</p></td>
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

function agregarEventoADetallesDeAlumnoDocente() {
    const botonesDetalle = document.querySelectorAll(".btn-detalles-alumno");

    for (let i = 0; i < botonesDetalle.length; i++) {
        botonesDetalle[i].addEventListener("click", mostrarDetallesDelAlumno);
    }
}

function mostrarDetallesDelAlumno() {
    const nombreUsusario = this.getAttribute("nombre-usuario");
    const datosDelAlumno = obtenerDatosDelAlumno(nombreUsusario);
    let resultado = ``;

    if (datosDelAlumno == null) {
        resultado =
            "Se produjo un error al obtener los datos del usuario. Por favor, contacte un administrador.";
    } else {
        resultado += `
        <p id="usuarioSeleccionado" nombre-usuario="${datosDelAlumno.nombreUsuario}">Nombre: ${datosDelAlumno.nombre}</p>
        <p id="nivelActualAlumno" nivel-actual="${datosDelAlumno.nivel}" >Nivel Actual: ${datosDelAlumno.nivel}</p>

        `;

        if (datosDelAlumno.nivel != NIVEL_AVANZADO) {
            resultado += `<input id="btnNuevoNivelAlumno" type='submit' value="Actualizar Nivel"></input>`;
        }
    }
    mostrarPantallaPorId('detallesAlumnoSeleccionado');
    document.querySelector("#detallesAlumnoSeleccionado").innerHTML = resultado;
    document
        .querySelector("#btnNuevoNivelAlumno")
        .addEventListener("click", mostrarNuevosNivelesParaAlumno);
}

function mostrarNuevosNivelesParaAlumno() {
    let nivelUsuario = document
        .querySelector("#nivelActualAlumno")
        .getAttribute("nivel-actual");
    let resultado = `
    <label for="nivelAlumno">Nuevo Nivel</label>
    <select id="nivelAlumno">`;

    if (nivelUsuario == NIVEL_INICIAL) {
        resultado += `
        <option value="intermedio">Intermedio</option>
        <option value="avanzado">Avanzado</option>`;
    } else {
        resultado += `<option value="avanzado">Avanzado</option>`;
    }

    resultado += "</select>";
    document.querySelector("#seleccionarNuevoNivel").innerHTML = resultado;
    mostrarPantallaPorId("seleccionarNuevoNivel");
    mostrarPantallaPorId("btnGuardarNuevoNivelAlumno");
}

function guardarNuevoNivelAlumno() {
    let nuevoNivel = document.querySelector("#nivelAlumno").value;
    let nombreUsuario = document
        .querySelector("#usuarioSeleccionado")
        .getAttribute("nombre-usuario");

    let nivelCambiado = false;
    let index = 0;

    while (index < alumnosDelDocenteActual.length && !nivelCambiado) {
        if (alumnosDelDocenteActual[index].nombreUsuario == nombreUsuario) {
            alumnosDelDocenteActual[index].nivel = nuevoNivel;
            nivelCambiado = true;
        }
        index++;
    }
    ocultarPantallaPorId("detallesAlumnoSeleccionado");
    ocultarPantallaPorId("seleccionarNuevoNivel");
    ocultarPantallaPorId("btnGuardarNuevoNivelAlumno");
}

function actualizarNuevoNivelEnPantalla(nuevoNivel) {
    if (nuevoNivel == NIVEL_AVANZADO) {
        ocultarPantallaPorId("btnNuevoNivelAlumno");
    }

    ocultarPantallaPorId("btnGuardarNuevoNivelAlumno");
    document
    .querySelector("#nivelActualAlumno")
    .getAttribute("nivel-actual") = nuevoNivel;
    document.querySelector("#seleccionarNuevoNivel").innerHTML = "";
    document.querySelector("#nivelActualAlumno").innerHTML =
        "Nivel Actual: " + nuevoNivel;
}
