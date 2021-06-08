/* Mostrar estadisticas del alumno seleccionado en apartado estadisticas/docente */
function estadisticasAlumno() {
    let alumnoSeleccionado = document.querySelector("#alumnoSeleccionado").value;

    /* for (i = 0; i < tareasAlumno; i++) {
        if (alumnoSeleccionado[i].nombre == alumnoSeleccionado) {

            
        }
    } */


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
                
            </tr>
            <tr>
                <td>${alumnos[1].nombre}</td>
                
            </tr>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
        </table>`

    document.querySelector("#tablaAlumnos").innerHTML = listadoAlumnos;

    


    

}

