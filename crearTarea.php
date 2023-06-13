<?php
session_start();

// Verificar si se recibieron los datos del formulario
if (isset($_POST['titulo']) && isset($_POST['descripcion'])) {
    // Obtener los valores del formulario
    $titulo = $_POST['titulo'];
    $descripcion = $_POST['descripcion'];

    // Verificar si el usuario ha iniciado sesión y obtener su correo
    if (isset($_SESSION['usuario'])) {
        $correo_odontologo = $_SESSION['usuario'];

        // Realizar la conexión a la base de datos (reemplaza los valores con los de tu configuración)
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "sonricenter";

        // Crear una nueva conexión
        $conn = new mysqli($servername, $username, $password, $dbname);

        // Verificar si hay algún error en la conexión
        if ($conn->connect_error) {
            die("Error de conexión: " . $conn->connect_error);
        }

        // Preparar la consulta SQL para insertar la tarea en la tabla "tareas"
        $sql = "INSERT INTO tareas (titulo, descripcion, correo_odontologo) VALUES ('$titulo', '$descripcion', '$correo_odontologo')";

        // Ejecutar la consulta SQL
        if ($conn->query($sql) === TRUE) {
            echo "Tarea creada exitosamente";
        } else {
            echo "Error al crear la tarea: " . $conn->error;
        }

        // Cerrar la conexión a la base de datos
        $conn->close();
    } else {
        echo "Usuario no identificado";
    }
} else {
    echo "Datos de tarea no recibidos";
}
?>
