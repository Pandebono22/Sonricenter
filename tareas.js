document.addEventListener("DOMContentLoaded", function() {
  var crearTareaBtn = document.getElementById("crear-tarea-btn");
  var crearTareaCuadro = document.getElementById("crear-tarea-cuadro");
  var guardarTareaBtn = document.getElementById("guardar-tarea-btn");
  var listaTareas = document.getElementById("lista-tareas");

  crearTareaBtn.addEventListener("click", function() {
    crearTareaCuadro.classList.remove("oculto");
  });

  guardarTareaBtn.addEventListener("click", function(event) {
    event.preventDefault();

    var titulo = document.getElementById("titulo").value;
    var descripcion = document.getElementById("descripcion").value;

    if (titulo.trim() === "" || descripcion.trim() === "") {
      alert("Por favor, ingrese un título y una descripción para la tarea.");
      return;
    }

    var nuevaTarea = document.createElement("div");
    nuevaTarea.classList.add("tareas");
    nuevaTarea.innerHTML = "<div class='tarea-rectangulo'><strong>" + titulo + "</strong><br>" + descripcion + "</div>";

    listaTareas.appendChild(nuevaTarea);

    crearTareaCuadro.classList.add("oculto");

    document.getElementById("titulo").value = "";
    document.getElementById("descripcion").value = "";
  });
});
