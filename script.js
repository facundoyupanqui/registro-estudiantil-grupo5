document.getElementById("registroForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Obtener valores del formulario
    const nombre = document.getElementById("nombre").value.trim();
    const edad = document.getElementById("edad").value.trim();
    const carrera = document.getElementById("carrera").value;

    
    if (parseInt(edad) <= 16) {
        alert("La edad debe ser superior.")
        return;
    }

    // Simular POST: guardar en localStorage
    const estudiante = { nombre, edad, carrera };
    let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
    estudiantes.push(estudiante);
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));

    alert("Estudiante registrado con éxito");
    this.reset();
    });

    const tabla = document.getElementById("tablaEstudiantes");
    const filtro = document.getElementById("filtroCarrera");

    // Funcion para cargar y mostrar los estudiantes
    function mostrarEstudiantes(carreraFiltro = "") {
      const estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];
      
      const filtrados = carreraFiltro
        ? estudiantes.filter(e => e.carrera === carreraFiltro)
        : estudiantes;

      tabla.innerHTML = "";

      if (filtrados.length === 0) {
        tabla.innerHTML = "<tr><td colspan='3'>No hay registros</td></tr>";
        return;
      }

      for (const est of filtrados) {
        const fila = `<tr><td>${est.nombre}</td><td>${est.edad}</td><td>${est.carrera}</td></tr>`;
        tabla.innerHTML += fila;
      }
    }
 
    mostrarEstudiantes();

    // Filtro por carrera
    filtro.addEventListener("change", function () {
      mostrarEstudiantes(this.value);
    });