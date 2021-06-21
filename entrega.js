class Entrega {
    constructor(nombreUsuario, comentario, audio, corregida, idTarea) {
        this.nombreUsuario = nombreUsuario;
        this.tarea = obtenerTareaPorId(idTarea);
        this.comentario = comentario;
        this.audio = audio;
        this.corregida = corregida;
        this.idTarea = idTarea;
        this.id = tareasEntregadas.length + 1;
        this.comentarioDevolucion = "-";
    }
}
