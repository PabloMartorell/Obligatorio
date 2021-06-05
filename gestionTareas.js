let tareasCreadas = [];
let tareasAlumno = [];
let tareasCorregidas = [];
let showTareas = [];

function mostrarTareasAlumno() {}

/* Tabla tareas entregadas en apartado Devoluciones */
function mostrarTareasDevoluciones() {
    for (i = 0; i < tareasCreadas.length; i++) {
        let tablaDevoluciones = `
        <table>
            <tr>
                <th>Entregado por</th>
                <th>Nombre Tarea</th>
            </tr>
            <tr>
                <td>${tareasAlumno[i].alumno}</td>
                <td>${tareasAlumno[i].titulo}</td>
            </tr>
        </table>`;

        document.querySelector("#tableTareaDevolucion").innerHTML =
            tablaDevoluciones;
    }

    /* document.querySelector("#devolucionesTable").innerHTML = tablaDevoluciones; */
}

/* Mostrar informacion de tarea  e ingresar devolucion */
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

function estadisticasAlumno() {
    let alumnoSeleccionado = document.querySelector(
        "#alumnoSeleccionado"
    ).value;

    for (i = 0; i < tareasAlumno; i++) {
        if (alumnoSeleccionado[i].nombre == alumnoSeleccionado) {
        }
    }
}

/* Agregar tareas */
function agregarComboTareas() {
    let listadoTareas;

    for (i = 0; i < tareas.length; i++) {
        const tareaActual = tareasCreadas[i];
        listadoTareas += `<option value="${tareaActual.id}">${tareaActual.nombre}></option>`;
    }

    document.querySelector("#AlumnoDisplay").innerHTML = listadoTareas;
}

/* Entrega de tareas por parte del alumno */
function submitTarea() {
    for (i = 0; i < tareasCreadas; i++) {}

    let comentariosTarea = document.querySelector("#comentariosTarea").value;
    let audioTarea = document.querySelector("#audioTarea").value;
}

function crearTarea() {
    let tareaTitle = document.querySelector("#tareaTitle").value;
    let tareaDesc = document.querySelector("#tareaDesc").value;
    let tareaImagen = document.querySelector("#tareaImagen").value;
    let tareaLevel = document.querySelector("#tareaLevel").value;

    let tareaCreada = new tarea(tareaTitle, tareaLevel, tareaDesc, tareaImagen);

    tareasCreadas.push(tareaCreada);
    agregarTareas();

    console.log(tareasCreadas);
    console.log("_______________________");
}
