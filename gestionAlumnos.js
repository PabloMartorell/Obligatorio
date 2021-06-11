/* Mostrar estadisticas del alumno seleccionado en apartado estadisticas/docente */
function estadisticasAlumno() {
    let alumnoSeleccionado = document.querySelector("#alumnoSeleccionado").value;
    

    let infoAlumno = `
                
                <h2>Alumno: ${alumnoSeleccionado[i].nombre}</h2>
                <br>
                <h3>Nivel: ${alumnoSeleccionado[i].nivel}</h2>
                <br>
                <p>Tareas Asignadas</p>


            `

    document.querySelector("#estadisticasAlumno").innerHTML = infoAlumno;
}


/* Listado alumnos para en el apartado de alumnos/docente */
mostrarAlumnos();
function mostrarAlumnos() {

    let listadoAlumnos = `
        <table>
            <tr>
                <th>Alumnos</th>
                
            </tr>`;

    for (let i = 0; i < alumnos.length; i++) {

        listadoAlumnos += ` <tr id="filaNombresEstudiantes" >
            <td>${alumnos[i].nombre}</td>
            <tr>
        `;

    }

    listadoAlumnos += ` </table> `;

    return listadoAlumnos

    

}



