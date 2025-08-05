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

document.getElementById("filtro").addEventListener("input", function () {
  mostrarEstudiantes(this.value);
});
