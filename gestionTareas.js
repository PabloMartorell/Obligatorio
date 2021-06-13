function mostrarTareasAlumno() {}

/* Tabla de tareas asignadas al alummno por nivel */

function mostrarTareasAlumno() {
    for (i = 0; i < tareasCreadas; i++) {
        if ((alumnoActual.nivel = tareasCreadas[i].nivel)) {
            showTareas.push(tareasCreadas);
        }
    }

    let misTareasAlumno = `

    <input type="text" id="busquedaTareas">
    <br>
    <table>
        <tr>
            <th>Entregado por</th>
            <th>Nombre Tarea</th>
        </tr>
        <tr>
            <td>${tareasAlumno[i].alumno}</td>
            
        </tr>
    </table>`;
}

/* Tabla tareas entregadas en apartado devoluciones/docente */
function mostrarTareasDevoluciones() {
    let tablaDevoluciones = `
    <table>
        <tr>
            <th>Entregado por</th>
            <th>Nombre Tarea</th>
        </tr>`;

    for (i = 0; i < tareasCreadas.length; i++) {
        tablaDevoluciones += ` 
            <tr>
                <td>${tareasAlumno[i].alumno}</td>
                <td>${tareasAlumno[i].titulo}</td>
            </tr>`;
    }

    tablaDevoluciones += `</table>`;

    document.querySelector("#tableTareaDevolucion").innerHTML =
        tablaDevoluciones;
}

/* Tarea entregada e ingreso de devolucion en apartado devoluciones/docente */
function mostrarTareaInfo() {
    let tareaSeleccionada = document.querySelector(
        "#tareaSeleccionInfoDevoluciones"
    ).value;

    let infoTareaDevolucion = `
        <h1>${tareaSeleccionada.titulo}</h1>
        <h3>${tareaSeleccionada.alumno}</h3>
        <br>
        <p>${tareaSeleccionada.comentario}</p>
        <br>
        <textarea id="devolucionComentario"></textarea>
        <br>
        <button id="enviarDevolucion">ENVIAR<button>
    `;
    document.querySelector("#infoTareaDevolucion").innerHTML =
        infoTareaDevolucion;
}

/* Agregar tareas al combobox */
function agregarComboTareas() {
    let listadoTareas = '<option value="">Seleccione...</option>';

    for (i = 0; i < tareasCreadas.length; i++) {
        const tareaActual = tareasCreadas[i];
        listadoTareas += `<option value="${tareaActual.id}">${tareaActual.nombre}></option>`;
    }

    document.querySelector("#AlumnoDisplay").innerHTML = listadoTareas;
}

/* Entrega de tareas en apartado alumno/tareas */
function submitTarea() {
    for (i = 0; i < tareasCreadas; i++) {}

    let comentariosTarea = document.querySelector("#comentariosTarea").value;
    let audioTarea = document.querySelector("#audioTarea").value;
}

document.querySelector("#createTarea").addEventListener("click", crearTarea);

/* Creacion de tareas en el apartado crearTarea/docente */
function crearTarea() {
    let tareaTitle = document.querySelector("#tareaTitle").value;
    let tareaDesc = document.querySelector("#tareaDesc").value;
    let tareaImagen = document.querySelector("#tareaImagen").value;
    let tareaLevel = document.querySelector("#tareaLevel").value;

    let tareaCreada = new Tarea(tareaTitle, tareaLevel, tareaDesc, tareaImagen);
    tareasCreadas.push(tareaCreada);
}

function mostrarTareasPorNivel(usuario) {
    const tablaTareas = generarTablaTareasPorEstudiante(usuario);
    document.querySelector("#tablaTareasEstudiante").innerHTML = tablaTareas;

    // document
    //     .querySelector("#filaTareaEstudiantes")
    //     .addEventListener("click", mostrarDetallesTareaSeleccionada);
}

function generarTablaTareasPorEstudiante(usuario) {
    let tareaPorNivel = [];

    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].nivel == usuario.nivel) {
            tareaPorNivel.push(tareas[i]);
        }
    }

    return generarTablaDeTareas(tareaPorNivel);
}

function generarTablaDeTareas(tareasParaGenerar) {
    let tablaTareas = `<table> 
    <tr>
        <th>Tarea</th>
        <th>Descripcion</th>
        <th></th>
    </tr>`;

    for (let i = 0; i < tareasParaGenerar.length; i++) {
        tablaTareas += ` <tr>
            <td>${tareasParaGenerar[i].titulo}</td>
            <td>${tareasParaGenerar[i].descripcion}</td>
            <td ><p id="btnVerDetallesTarea" value='${tareasParaGenerar[i].id}'>Ver Detalles</p></td>
         </tr>`;
    }

    tablaTareas += "</table>";

    return tablaTareas;
}

function buscarTareas(tareaABuscar) {
    let tareasBuscadas = [];
    let index = 0;

    while (index < tareas.length) {
        const tituloCoincide = tareas[index].titulo === tareaABuscar;
        const descripcionCoincide = tareas[index].descripcion === tareaABuscar;
        const tareaPerteneceAlNivel =
            tareas[index].nivel === usuarioActual.nivel;

        if ((tituloCoincide || descripcionCoincide) && tareaPerteneceAlNivel) {
            tareasBuscadas.push(tareas[index]);
        }
        index++;
    }

    return tareasBuscadas;
}

function mostrarTareasARealizar(usuario) {
    mostrarTareasPorNivel(usuario);
}

function buscarTarea() {
    const tareaABuscar = document.querySelector("#tareaABuscar").value;
    let tareasBuscadas = buscarTareaPorTitulo(tareaABuscar);

    if (!tareasBuscadas.length) {
        tareasBuscadas = buscarTareaPorDescripcion(tareaABuscar);
    }

    let tablaConTareas =
        "Ninguna tarea fue encontrada con los datos ingresados";

    if (tareasBuscadas.length) {
        tablaConTareas = generarTablaDeTareas(tareasBuscadas);
    }

    document.querySelector("#tablaTareasEstudiante").innerHTML = tablaConTareas;
}

function buscarTareaPorTitulo(titulo) {
    let tareasEncontradas = [];
    let index = 0;

    while (index < tareas.length) {
        const tituloCoincide = tareas[index].titulo == titulo;
        const tareaPerteneceAlNivel =
            tareas[index].nivel == usuarioActual.nivel;

        if (tituloCoincide && tareaPerteneceAlNivel) {
            tareasEncontradas.push(tareas[index]);
        }
        index++;
    }

    return tareasEncontradas;
}

function buscarTareaPorDescripcion(descripcion) {
    let tareasEncontradas = [];
    let index = 0;

    while (index < tareas.length) {
        const descripcionCoincide = tareas[index].descripcion == descripcion;
        const tareaPerteneceAlNivel =
            tareas[index].nivel == usuarioActual.nivel;

        if (descripcionCoincide && tareaPerteneceAlNivel) {
            tareasEncontradas.push(tareas[index]);
        }
        index++;
    }

    return tareasEncontradas;
}

// function mostrarPantallaDetallesTareaSeleccionada() {
//     const tareaTitle = document.querySelector("#btnVerDetallesTarea").value;
//     console.log("tarea seleccionada", tareaTitle);
// } //TODO: hacer la logica para mostrar los detalles de la tarea seleccionada

function regresarAMenuTareas() {
    ocultarPantallaPorId("detallesTareaSeleccionada");
    mostrarPantallaPorId("pantallaTareasEstudiante");
}

function mostrarPantallaEstudianteEntregas() {
    ocultarPantallaPorId("pantallaTareasEstudiante");
    mostrarPantallaPorId("pantallaEstudianteTareasEntregadas");
    mostrarEntregas();
}

function mostrarPantallaEstudianteTareas() {
    ocultarPantallaPorId("detallesTareaSeleccionada");
    ocultarPantallaPorId("pantallaEstudianteTareasEntregadas");
    mostrarPantallaPorId("pantallaTareasEstudiante");
}
