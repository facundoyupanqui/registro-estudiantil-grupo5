function registrarEstudiante(nombre, edad, carrera) {
    if (edad <= 16) {
        alert("La edad debe ser mayor a 16.");
        return false;
    }
    estudiantes.push({ nombre, edad, carrera });
    return true;
}