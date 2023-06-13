 // Obtén la referencia al elemento del carrusel
const carousel = document.querySelector('#carouselExampleIndicators');

// Verificar si el elemento del carrusel existe antes de continuar
if (carousel) {
  // Agrega un evento 'mouseover' a las flechas del carrusel
  const carouselControls = carousel.querySelectorAll('.carousel-control-prev, .carousel-control-next');
  carouselControls.forEach(control => {
    control.addEventListener('mouseover', () => {
      // Agrega la clase 'cube-transition' al carrusel al pasar el mouse por encima de las flechas
      carousel.classList.add('cube-transition');
    });

    control.addEventListener('mouseout', () => {
      // Remueve la clase 'cube-transition' del carrusel al quitar el mouse de las flechas
      carousel.classList.remove('cube-transition');
    });
  });

  // Agregar evento al pasar el cursor por encima de las flechas
  carousel.addEventListener('mouseenter', function() {
    this.classList.add('carousel-hover');
  });

  // Agregar evento al retirar el cursor de las flechas
  carousel.addEventListener('mouseleave', function() {
    this.classList.remove('carousel-hover');
  });
}

// Agregar funcionalidad al botón de ver más
function openModal(service) {
  var modal = document.getElementById('modal-info');
  var title = modal.querySelector('.modal-title');
  var info = modal.querySelector('.modal-body p');

  if (service === 'Servicio 1') {
    title.textContent = 'Información adicional sobre la Odontología General:';
    info.textContent = 'La Odontología General abarca una amplia gama de servicios que incluyen la atención preventiva, el diagnóstico y tratamiento de enfermedades dentales, la restauración dental básica y la atención de rutina. Los odontólogos generales son el primer punto de contacto para los pacientes y juegan un papel fundamental en el mantenimiento de una buena salud bucal.';
  }

  if (service === 'Servicio 2') {
    title.textContent = 'Información adicional sobre la Implantología:';
    info.textContent = 'La implantología ha revolucionado la forma en que se reemplazan los dientes perdidos. Los implantes dentales ofrecen una solución duradera y natural para restaurar la apariencia y función de los dientes. Estos implantes se integran con el hueso de la mandíbula o el maxilar, brindando una base sólida para las prótesis dentales. La implantología requiere habilidades especializadas y conocimientos avanzados en cirugía oral y periodoncia.';
  }

  if (service === 'Servicio 3') {
    title.textContent = 'Información adicional sobre la Rehabilitación Oral:';
    info.textContent = 'La rehabilitación oral combina diferentes especialidades odontológicas, como la prótesis dental, la periodoncia, la endodoncia y la odontología restauradora, para ofrecer tratamientos completos y personalizados. Los profesionales de la rehabilitación oral evalúan cuidadosamente el caso de cada paciente y diseñan un plan de tratamiento integral que puede incluir implantes dentales, prótesis, restauraciones y otros procedimientos para restaurar la salud bucal.';
  }

  if (service === 'Servicio 4') {
    title.textContent = 'Información adicional sobre la Estomatología:';
    info.textContent = 'La estomatología abarca una amplia gama de enfermedades y trastornos orales, incluyendo enfermedades de las encías, lesiones de la mucosa oral, trastornos temporomandibulares y malformaciones congénitas. Los estomatólogos también se ocupan de la salud oral en relación con otras condiciones médicas, como el cáncer oral y las enfermedades sistémicas que pueden afectar la boca.';
  }

  if (service === 'Servicio 5') {
    title.textContent = 'Información adicional sobre la Endodoncia:';
    info.textContent = 'La endodoncia se ocupa de los problemas internos de los dientes, como la pulpitis (inflamación de la pulpa), la necrosis pulpar (muerte de la pulpa) y las infecciones de los conductos radiculares. Los endodoncistas utilizan técnicas especializadas y avanzadas, como la microscopía endodóntica y el uso de materiales biocompatibles, para salvar los dientes y aliviar el dolor dental.';
  }

  if (service === 'Servicio 6') {
    title.textContent = 'Información adicional sobre la Ortodoncia:';
    info.textContent = 'La ortodoncia es fundamental para corregir problemas de mordida, maloclusiones y problemas estéticos relacionados con la posición de los dientes. Los ortodoncistas realizan un diagnóstico preciso y diseñan planes de tratamiento personalizados para cada paciente, utilizando técnicas avanzadas y aparatos ortodónticos específicos. Los tratamientos pueden durar desde unos pocos meses hasta varios años, dependiendo de la complejidad del caso.';
  }

   modal.style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('modal-info');
  modal.style.display = 'none';
}

window.addEventListener('click', function(event) {
  var modal = document.getElementById('modal-info');
  if (event.target === modal) {
    modal.style.display = 'none';
    modal.classList.add('fade-in');
  }
});

$(document).ready(function() {
  // Manejar el evento click del botón "Enviar"
  $("#enviar-cita-btn").click(function(event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón de enviar

    // Obtener los datos del formulario
    var formData = $("#formulario-cita").serialize();

    // Enviar la solicitud Ajax al archivo "Database.php"
    $.ajax({
      url: "Database.php",
      type: "POST",
      data: formData,
      success: function(response) {
        // Manejar la respuesta del servidor
        alert(response); // Puedes mostrar una notificación o realizar cualquier otra acción aquí
        $("#formulario-cita")[0].reset(); // Reiniciar el formulario si es necesario
      },
      error: function(xhr, status, error) {
        // Manejar errores de la solicitud Ajax
        console.log("Error en la solicitud Ajax:", error);
      }
    });
  });
});



$(document).ready(function() {
  $('#login-form').submit(function(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    // Obtener los valores de correo y contraseña
    var correo = $('#correo').val();
    var contraseña = $('#contraseña').val();

    // Verificar las credenciales en la base de datos
    $.ajax({
      url: 'inicioSesion.php', // Cambiar el nombre del archivo PHP si es necesario
      method: 'POST',
      data: { correo: correo, contraseña: contraseña },
      success: function(response) {
        if (response === 'success') {
          // Credenciales correctas, enviar el formulario para redireccionar a tareas.html
          $('#login-form').unbind('submit').submit();
        } else {
          // Credenciales incorrectas, mostrar mensaje de error
          alert('Credenciales incorrectas');
        }
      },
      error: function() {
        alert('Error en la solicitud Ajax');
      }
    });
  });
});
