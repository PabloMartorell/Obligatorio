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
    tareasPendientesDelAlumno = [];
    for (let i = 0; i < tareas.length; i++) {
        let tareaEntregada = false;
        let index = 0;
        while (index < tareasEntregadas.length && !tareaEntregada) {
            if (tareasEntregadas[index].idTarea == tareas[i].id) {
                tareaEntregada = true;
            }
            index++;
        }

        if (tareas[i].nivel == usuarioActual.nivel && !tareaEntregada) {
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
    tareaIdSeleccionada = this.getAttribute("id-tarea");
    const detallesTarea = obtenerDetallesDeTareaSeleccionada();

    mostrarDetallesTareaSeleccionada(detallesTarea);
}

function obtenerDetallesDeTareaSeleccionada() {
    let detallesTarea = null;
    let index = 0;

    while (index < tareasPendientesDelAlumno.length && detallesTarea == null) {
        if (tareasPendientesDelAlumno[index].id == tareaIdSeleccionada) {
            detallesTarea = tareasPendientesDelAlumno[index];
        }
        index++;
    }

    return detallesTarea;
}

function mostrarTareasARealizar() {
    mostrarTareasPorNivel();
}

function buscarTarea() {
    const tareaABuscar = document.querySelector("#tareaABuscar").value;
    let tareasBuscadas = [];
    let tablaConTareas =
        "Ninguna tarea fue encontrada con los datos ingresados";

    if (!tareaABuscar.length) {
        tareasBuscadas = tareasPendientesDelAlumno;
    } else {
        tareasBuscadas = buscarTareaPorTitulo(tareaABuscar);

        if (!tareasBuscadas.length) {
            console.log("dentro de buscar por descripcion");
            tareasBuscadas = buscarTareaPorDescripcion(tareaABuscar);
        }
    }

    if (tareasBuscadas.length) {
        tablaConTareas = generarTablaDeTareas(tareasBuscadas);
    }
    document.querySelector("#tablaTareasEstudiante").innerHTML = tablaConTareas;
}

function buscarTareaPorTitulo(titulo) {
    let tareasEncontradas = [];

    titulo = titulo.toUpperCase();

    for (let i = 0; i < tareasPendientesDelAlumno.length; i++) {
        const tareaPerteneceAlNivel =
            tareasPendientesDelAlumno[i].nivel == usuarioActual.nivel;

        if (tareaPerteneceAlNivel) {
            const tituloDeTarea =
                tareasPendientesDelAlumno[i].titulo.toUpperCase();

            if (tituloDeTarea.indexOf(titulo) > -1) {
                tareasEncontradas.push(tareasPendientesDelAlumno[i]);
            }
        }
    }

    return tareasEncontradas;
}

function buscarTareaPorDescripcion(descripcion) {
    let tareasEncontradas = [];

    descripcion = descripcion.toUpperCase();

    for (let i = 0; i < tareasPendientesDelAlumno.length; i++) {
        const tareaPerteneceAlNivel =
            tareasPendientesDelAlumno[i].nivel == usuarioActual.nivel;

        if (tareaPerteneceAlNivel) {
            const descripcionDeTarea =
                tareasPendientesDelAlumno[i].descripcion.toUpperCase();

            if (descripcionDeTarea.indexOf(descripcion) > -1) {
                tareasEncontradas.push(tareasPendientesDelAlumno[i]);
            }
        }
    }

    return tareasEncontradas;
}

function regresarAMenuTareas() {
    ocultarPantallaPorId("detallesTareaSeleccionada");
    mostrarPantallaPorId("pantallaTareasEstudiante");
}

function mostrarDetallesTareaSeleccionada(detalles) {
    const img = `
    <img src="${detalles.imagen}" alt="Imagen de Tarea a realizar" width=46%>
    `;
    document.querySelector("#tituloTareaSeleccionada").innerHTML =
        detalles.titulo;
    document.querySelector("#descripcionTareaSeleccionada").innerHTML =
        detalles.descripcion;

    document.querySelector("#imgTareaSeleccionada").innerHTML = img;
    ocultarPantallaPorId("pantallaTareasEstudiante");
    mostrarPantallaPorId("detallesTareaSeleccionada");
}

function mostrarPantallaEstudianteTareas() {
    mostrarTareasARealizar();
    ocultarPantallaPorId("detallesTareaSeleccionada");
    ocultarPantallaPorId("pantallaEstudianteTareasEntregadas");
    ocultarPantallaPorId("pantallaRealizarEntrega");
    mostrarPantallaPorId("pantallaTareasEstudiante");
}

function seleccionarImagen() {
    deseleccionarTodosLosElementosPorClase("imagen");

    const styleImgSeleccionada = `
    border: solid;
    border-color: blue;
    border-radius: 16px;`;

    this.style = styleImgSeleccionada;
    crearTareaImgSeleccionada = this.getAttribute("img-src");
}

function deseleccionarTodosLosElementosPorClase(clase) {
    const elementos = document.querySelectorAll(`.${clase}`);
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].style = "";
    }
    audioSeleccionadoNuevaEntrega = "";
}

function crearNuevaTarea() {
    const titulo = document.querySelector("#tareaTitle").value;
    const descripcion = document.querySelector("#tareaDesc").value;
    const nivel = document.querySelector("#tareaLevel").value;
    const datosValidos = validarDatosNuevaTarea(titulo, descripcion, nivel);

    if (datosValidos) {
        const tareaCreada = new Tarea(
            titulo,
            nivel,
            descripcion,
            crearTareaImgSeleccionada
        );
        tareas.push(tareaCreada);
        limpiarDatosCrearTarea();
    } else {
        mostrarCrearTareaError();
    }
}

function limpiarDatosCrearTarea() {
    ocultarPantallaPorId("crearTareaError");
    limpiarValorElementoPorId("tareaTitle");
    limpiarValorElementoPorId("tareaDesc");
    deseleccionarTodosLosElementosPorClase("img");
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

function cancelarEntrega() {
    regresarADetallesTarea();
}

function seleccionarAudio() {
    deseleccionarTodosLosElementosPorClase("audio");
    const styleAudioSeleccionado = `
    border: solid;
    border-color: blue;
    border-radius: 16px;`;

    this.style = styleAudioSeleccionado;
    audioSeleccionadoNuevaEntrega = this.getAttribute("audio-src");
}

function enviarTarea() {
    const comentario = document.querySelector("#comentariosEntregaTarea").value;
    const entregaValida = audioSeleccionadoNuevaEntrega.length > 0;
    if (entregaValida) {
        const entrega = new Entrega(
            usuarioActual.nombreUsuario,
            comentario,
            audioSeleccionadoNuevaEntrega,
            false,
            tareaIdSeleccionada
        );
        tareasEntregadas.push(entrega);
        limpiarDatosEnviarTarea();
        mostrarPantallaEstudianteEntregas();
    } else {
        mostrarErrorEnviarTarea();
    }
}

function mostrarErrorEnviarTarea() {
    mostrarPantallaPorId("enviarTareaError");
    const error = `<p class="mensaje-error">Por favor, seleccione un audio a enviar.</p>
    `;

    document.querySelector("#enviarTareaError").innerHTML = error;
}

function limpiarDatosEnviarTarea() {
    limpiarValorElementoPorId("comentariosEntregaTarea");
    deseleccionarTodosLosElementosPorClase("audio");
}

function crearDevolucion() {
    const idEntrega = document
        .querySelector("#tareaInfoEntrega")
        .getAttribute("devolucion-id");
    const comentarioDevolucion = document.querySelector(
        "#comentarioDevolucion"
    ).value;

    let tareaACorregir = null;
    let indexTarea = 0;
    let index = 0;

    while (index < devolucionesPendientes.length && tareaACorregir == null) {
        if (devolucionesPendientes[index].id == idEntrega) {
            tareaACorregir = devolucionesPendientes[index];
            indexTarea = index;
        }
    }

    if (tareaACorregir != null) {
        corregirTarea(tareaACorregir, comentarioDevolucion, indexTarea);
        ocultarPantallaPorId("detallesDevolucion");
        limpiarValorElementoPorId("comentarioDevolucion");
        mostrarPantallaDevolucionesDocente();
    } else {
        document.querySelector("#errorCorreccion").innerHTML =
            "Un error ocurrio al procesar la correccion.";
    }
}

function corregirTarea(tarea, devolucion, index) {
    tarea.comentarioDevolucion = devolucion;
    tarea.corregida = true;
    devolucionesPendientes[index] = tarea;
}
