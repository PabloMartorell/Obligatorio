function mostrarTareasPorNivel() {
    const tareasPendientes = obtenerTareasPendientesPorUsuario();
    let resultado = "Usted no tiene tareas pendientes para realiar.";
    if (tareasPendientes.length) {
        resultado = generarTablaDeTareas(tareasPendientes);
    }
    document.querySelector("#tablaTareasEstudiante").innerHTML = resultado;
    agregarEventoADetallesDeTareas();
}

function obtenerTareasPendientesPorUsuario() {
    for (let i = 0; i < tareas.length; i++) {
        if (tareas[i].nivel == usuarioActual.nivel) {
            tareasPendientesDelAlumno.push(tareas[i]);
        }
    }

    return tareasPendientesDelAlumno;
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
            <td ><p class="btn-detalles-tarea" id-tarea='${tareasParaGenerar[i].id}'>Ver Detalles</p></td>
         </tr>`;
    }

    tablaTareas += "</table>";

    return tablaTareas;
}

function agregarEventoADetallesDeTareas() {
    const botonesDetalle = document.querySelectorAll(".btn-detalles-tarea");

    for (let i = 0; i < botonesDetalle.length; i++) {
        botonesDetalle[i].addEventListener(
            "click",
            mostrarDetallesDeTareaPendiente
        );
    }
}

function mostrarDetallesDeTareaPendiente() {
    const tareaId = this.getAttribute("id-tarea");
    const detallesTarea = obtenerDetallesDeTareaPendiente(tareaId);

    mostrarDetallesTareaSeleccionada(detallesTarea);
    console.log("detallesTaread", detallesTarea);
}

function obtenerDetallesDeTareaPendiente(tareaId) {
    let detallesTarea = null;
    let index = 0;

    while (index < tareasPendientesDelAlumno.length && detallesTarea == null) {
        if (tareasPendientesDelAlumno[index].id == tareaId) {
            detallesTarea = tareasPendientesDelAlumno[index];
        }
        index++;
    }

    return detallesTarea;
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

function mostrarTareasARealizar() {
    mostrarTareasPorNivel();
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
    //TODO: buscar solo sobre las tareas que no estan entregadas
    let tareasEncontradas = [];
    let index = 0;
    titulo = titulo.toUpperCase();

    for (let i = 0; i < tareas.length; i++) {
        const tituloTarea = tareas[i].titulo.toUpperCase();
        for (let j = 0; j < tituloTarea.length; j++) {
            if (tituloTarea[j] == titulo) {
                tareasEncontradas.push(tareas[i]);
            }
        }
    }
    console.log("tareasEncontradas", tareasEncontradas);

    // while (index < tareas.length) {
    //     const tituloCoincide = tareas[index].titulo == titulo;
    //     const tareaPerteneceAlNivel =
    //         tareas[index].nivel == usuarioActual.nivel;

    //     if (tituloCoincide && tareaPerteneceAlNivel) {
    //         tareasEncontradas.push(tareas[index]);
    //     }
    //     index++;
    // }

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

function regresarAMenuTareas() {
    ocultarPantallaPorId("detallesTareaSeleccionada");
    mostrarPantallaPorId("pantallaTareasEstudiante");
}

function mostrarDetallesTareaSeleccionada(detalles) {
    const img = `
    <img src="${detalles.foto}" alt="Imagen de Tarea a realizar" width="250">
    `;
    document.querySelector("#tituloTareaSeleccionada").innerHTML =
        detalles.titulo;
    document.querySelector("#descripcionTareaSeleccionada").innerHTML =
        detalles.descripcion;

    document.querySelector("#imgTareaSeleccionada").innerHTML = img;
    ocultarPantallaPorId("pantallaTareasEstudiante");
    mostrarPantallaPorId("detallesTareaSeleccionada");
}

function mostrarPantallaEstudianteEntregas() {
    ocultarPantallaPorId("pantallaTareasEstudiante");
    mostrarPantallaPorId("pantallaEstudianteTareasEntregadas");
    mostrarEntregas();
}

function mostrarPantallaEstudianteTareas() {
    ocultarPantallaPorId("detallesTareaSeleccionada");
    ocultarPantallaPorId("pantallaEstudianteTareasEntregadas");
    ocultarPantallaPorId("pantallaRealizarEntrega");
    mostrarPantallaPorId("pantallaTareasEstudiante");
}

function seleccionarImagen() {
    deseleccionarTodasLasImagenes();

    const styleImgSeleccionada = `
    border: solid;
    border-color: blue;
    border-radius: 16px;`;

    this.style = styleImgSeleccionada;
    crearTareaImgSeleccionada = this.getAttribute("img-src");
    console.log("crearTareaImgSeleccionada", crearTareaImgSeleccionada);
}

function deseleccionarTodasLasImagenes() {
    const imagenes = document.querySelectorAll(".img");
    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].style = "";
    }
}

function crearNuevaTarea() {
    const titulo = document.querySelector("#tareaTitle").value;
    const descripcion = document.querySelector("#tareaDesc").value;
    const nivel = document.querySelector("#tareaLevel").value;
    const datosValidos = validarDatosNuevaTarea(titulo, descripcion, nivel);

    if (datosValidos) {
        //TODO: hacer que el id incremente en 1
        const tareaCreada = new Tarea(
            titulo,
            nivel,
            descripcion,
            crearTareaImgSeleccionada,
            "id1"
        );
        tareas.push(tareaCreada);
        limpiarDatosCrearTarea();
    } else {
        mostrarCrearTareaError();
    }

    console.log("tareas", tareas);
}

function limpiarDatosCrearTarea() {
    ocultarPantallaPorId("crearTareaError");
    limpiarValorElementoPorId("tareaTitle");
    limpiarValorElementoPorId("tareaDesc");
    deseleccionarTodasLasImagenes();
}

function validarDatosNuevaTarea(titulo, descripcion, nivel) {
    const caracteresTotales = titulo.length + descripcion.length;
    const cantidadCarateresValidos =
        caracteresTotales > 20 && caracteresTotales <= 200;

    const todosLosCamposSeleccionados =
        titulo.length > 0 &&
        descripcion.length > 0 &&
        nivel != null &&
        crearTareaImgSeleccionada.length > 0;

    return cantidadCarateresValidos && todosLosCamposSeleccionados;
}

function mostrarCrearTareaError() {
    mostrarPantallaPorId("crearTareaError");
    const error = `<p class="mensaje-error">Por favor, verifique los siguientes datos:</p>
    <p class="mensaje-error">La suma total de caracteres entre título y descripción no puede superar los 200 caracteres ni ser menor a 20 caracteres. </p>
    <p class="mensaje-error">Todos los campos deben de estar llenos, incluyendo una imagen seleccionada.</p>
    `;

    document.querySelector("#crearTareaError").innerHTML = error;
}

function regresarADetallesTarea() {
    mostrarPantallaEstudianteTareas();
}

function mostrarPantallaRealizaEntrega() {
    ocultarPantallaPorId("detallesTareaSeleccionada");
    ocultarPantallaPorId("pantallaEstudianteTareasEntregadas");
    mostrarPantallaPorId("pantallaRealizarEntrega");
}

function cancelarEntrega() {
    regresarADetallesTarea();
}
