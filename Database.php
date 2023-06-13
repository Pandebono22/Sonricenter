<?php
// Verificar si se recibieron los datos del formulario
if (isset($_POST['nombre']) && isset($_POST['telefono']) && isset($_POST['email']) && isset($_POST['motivo']) && isset($_POST['dia_cita'])) {
    // Obtener los valores del formulario
    $nombre = $_POST['nombre'];
    $telefono = $_POST['telefono'];
    $email = $_POST['email'];
    $motivo = $_POST['motivo'];
    $diaCita = $_POST['dia_cita'];

    // Conexión a la base de datos (ajusta estos valores según tu configuración)
    $host = 'localhost';
    $database = 'sonricenter';
    $usuario = 'root';
    $contrasena = '';

    $conn = new mysqli($host, $usuario, $contrasena, $database);
    if ($conn->connect_error) {
        die('Error de conexión: ' . $conn->connect_error);
    }

    // Insertar los datos en la tabla de la base de datos (ajusta el nombre de la tabla)
    $sql = "INSERT INTO citas (nombre, telefono, email, motivo, dia_cita) VALUES ('$nombre', '$telefono', '$email', '$motivo', '$diaCita')";
    if ($conn->query($sql) === true) {
        echo 'Datos insertados correctamente en la base de datos.';
    } else {
        echo 'Error al insertar los datos: ' . $conn->error;
    }

    // Cerrar la conexión
    $conn->close();
} else {
    echo 'No se recibieron datos del formulario.';
}
?>

