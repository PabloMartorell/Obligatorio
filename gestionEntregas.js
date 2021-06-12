function mostrarEntregas() {
    const entregasDelUsuario = obtenerEntregasDeUsuarioActual();
    let tabla = "Usted no tiene entregas para visualizar";
    if (entregasDelUsuario.length) {
        tabla = generarTablaDeEntregasEstudiante(entregasDelUsuario);
        mostrarInformacionDeEntregas(entregasDelUsuario);
    }

    document.querySelector("#tablaTareasEntregadasEstudiante").innerHTML =
        tabla;
}

function generarTablaDeEntregasEstudiante(entregas) {
    let tablaEntregas = `<table>
    <tr>
        <th>Tarea</th>
        <th>Descripción</th>
        <th>Estado</th>
        <th>Comentarios</th>
    </tr>`;
    for (i = 0; i < entregas.length; i++) {
        let estado = "Pendiente";
        if (entregas[i].corregida) {
            estado = "Corregido";
        }
        tablaEntregas += `<tr>
                <td>${entregas[i].tarea.titulo}</td>
                <td>${entregas[i].tarea.descripcion}</td>
                <td>${estado}</td>
                <td>${entregas[i].comentario}</td>
            </tr>`;
    }

    tablaEntregas += " </table>";

    return tablaEntregas;
}

function obtenerEntregasDeUsuarioActual() {
    const entregasDelUsuario = [];
    console.log("usuarioActual ", usuarioActual);

    for (i = 0; i < tareasEntregadas.length; i++) {
        if (tareasEntregadas[i].nombreUsuario == usuarioActual.nombreUsuario) {
            entregasDelUsuario.push(tareasEntregadas[i]);
        }
    }
    console.log("entregasDelUsuario ", entregasDelUsuario);
    return entregasDelUsuario;
}

function mostrarInformacionDeEntregas(entregas) {
    const tablaInfo = generarTabablaInfoEntregasEstudiante(entregas);
    document.querySelector("#tablaEntregasInfo").innerHTML = tablaInfo;
    //TODO: mostrar una tabla con la info de las entregas
}

function generarTabablaInfoEntregasEstudiante(entregas) {
    const infoEntregas = obtenerInformacionDeEntregas(entregas);
    let tablaEntregas = `<table>
    <tr>
        <th>Total Entregas</th>
        <th>Total Corregidas</th>
        <th>Total Pendientes</th>
    </tr>
    <tr>
                <td>${infoEntregas.totalEntregas}</td>
                <td>${infoEntregas.totalCorrecciones}</td>
                <td>${infoEntregas.totalPendienteCorreccion}</td>
            </tr>
            </table>
    `;

    return tablaEntregas;
}

function obtenerInformacionDeEntregas(entregas) {
    let totalCorrecciones = 0;
    let totalPendienteCorreccion = 0;

    for (i = 0; i < entregas.length; i++) {
        if (entregas[i].corregida) {
            totalCorrecciones++;
        } else {
            totalPendienteCorreccion++;
        }
    }
    return {
        totalEntregas: entregas.length,
        totalCorrecciones: totalCorrecciones,
        totalPendienteCorreccion: totalPendienteCorreccion,
    };
}
