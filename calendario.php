<?php
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

// Obtener las citas de la base de datos
$sql = "SELECT id, nombre, telefono, email, motivo, dia_cita FROM citas";
$result = $conn->query($sql);

// Crear un array para almacenar las citas
$citas = [];

// Verificar si se encontraron citas
if ($result->num_rows > 0) {
    // Recorrer los resultados y agregar las citas al array
    while ($row = $result->fetch_assoc()) {
        $cita = [
            'id' => $row['id'],
            'title' => $row['nombre'] . ' - ' . $row['motivo'],
            'start' => $row['dia_cita'],
            'telefono' => $row['telefono'],
            'email' => $row['email']
        ];
        $citas[] = $cita;
    }
}

// Cerrar la conexión a la base de datos
$conn->close();

// Devolver las citas en formato JSON
echo json_encode($citas);
?>
