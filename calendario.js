$(document).ready(function() {
    // Obtener las citas desde calendario.php
    $.ajax({
      url: 'calendario.php',
      type: 'GET',
      dataType: 'json',
      success: function(response) {
        // Mostrar las citas
        $.each(response, function(index, event) {
          var title = event.title;
          var telefono = event.telefono;
          var email = event.email;
          var motivo = event.motivo;
          var diaCita = event.dia_cita;
  
          var content = "<div class='cita-container'>" +
                        "<div class='cita-title'><strong>" + title + "</strong></div>" +
                        "<div class='cita-info'>" +
                          "<div>Teléfono: " + telefono + "</div>" +
                          "<div>Email: " + email + "</div>" +
                          "<div>Motivo: " + motivo + "</div>" +
                          "<div>Día de la cita: " + diaCita + "</div>" +
                        "</div>" +
                      "</div>" +
                      "<hr>";
  
          // Crear un nuevo cuadro de cita y agregarlo al contenedor de citas
          var newCita = $(content);
          $('#citas-content').append(newCita);
        });
  
        $('#citas-container').removeClass('d-none');
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });
  