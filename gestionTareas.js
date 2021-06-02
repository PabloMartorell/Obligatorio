const tareasCreadas = [];
const tareasAlumno = [];

document.querySelector("#")

function mostrarTareas(){

    const showTarea
}

function agregarTareas(){

    let listadoTareas;

    for (i=0; i<tareas.length; i++){

        const tareaActual = tareasCreadas[i];
        listadoTareas += `<option value="${tareaActual.id}">${tareaActual.nombre}></option>`;

    }

    document.querySelector("#AlumnoDisplay").innerHTML = listadoTareas;

}


/* Entrega de tareas por parte del alumno */
function submitTarea(){

    let comentariosTarea = document.querySelector("#comentariosTarea").value;
    let audioTarea = document.querySelector("#audioTarea").value;

}

function crearTarea(){

    let tareaTitle = document.querySelector("#tareaTitle").value;
    let tareaDesc = document.querySelector("#tareaDesc").value;
    let tareaImagen = document.querySelector("#tareaImagen").value;
    let tareaLevel = document.querySelector("#tareaLevel").value;

    let tareaCreada = new tarea(tareaTitle, tareaLevel, tareaDesc, tareaImagen);

    tareaCreada.push(tareaCreada);
    agregarTareas();

    

}