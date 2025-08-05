let estudiantes = JSON.parse(localStorage.getItem("estudiantes")) || [];

function guardarEnLocalStorage() {
  localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
}

function mostrarEstudiantes(filtro = "") {
  const cuerpoTabla = document.getElementById("cuerpoTabla");
  cuerpoTabla.innerHTML = "";

  let filtrados = estudiantes.filter(est =>
    est.carrera.toLowerCase().includes(filtro.toLowerCase())
  );

  filtrados.forEach(est => {
    const fila = document.createElement("tr");
    fila.innerHTML = `
      <td>${est.nombre}</td>
      <td>${est.edad}</td>
      <td>${est.carrera}</td>
    `;
    cuerpoTabla.appendChild(fila);
  });
}

function registrarEstudiante(nombre, edad, carrera) {
  if (edad <= 16) {
    alert("La edad debe ser mayor a 16.");
    return false;
  }
  estudiantes.push({ nombre, edad, carrera });
  guardarEnLocalStorage();
  return true;
}

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const edad = parseInt(document.getElementById("edad").value);
  const carrera = document.getElementById("carrera").value;

  if (registrarEstudiante(nombre, edad, carrera)) {
    this.reset();
    mostrarEstudiantes();
  }
});

document.getElementById("filtro").addEventListener("input", function () {
  mostrarEstudiantes(this.value);
});

// Reiniciar filtro al cargar la página
document.getElementById("filtro").value = "";
mostrarEstudiantes();


window.addEventListener("load", () => {
  document.getElementById("filtro").value = "";
});


// Botón para limpiar registros
document.getElementById("limpiar").addEventListener("click", function () {
  if (confirm("¿Estás seguro de que quieres borrar todos los registros?")) {
    localStorage.removeItem("estudiantes");
    estudiantes = [];
    mostrarEstudiantes();
  }
});
