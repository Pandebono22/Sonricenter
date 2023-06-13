<?php
session_start();

// Verificar si se recibieron los datos del formulario
if (isset($_POST['correo']) && isset($_POST['contraseña'])) {
    // Obtener los valores del formulario
    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    // Verificar las credenciales en la base de datos
    // Aquí implementar la lógica para consultar la base de datos y verificar las credenciales
    // Por ahora, utilizaremos credenciales de ejemplo para demostrar el flujo

    if ($correo === 'odontologo@gmail.com' && $contraseña === '0504') {
        // Credenciales correctas, establecer una variable de sesión para identificar al usuario
        $_SESSION['usuario'] = $correo;

        // Redirigir al usuario a tareas.html
        header('Location: tareas.html');
        exit();
    } else {
        // Credenciales incorrectas, mostrar un mensaje de error
        echo '<script>alert("Correo o contraseña incorrectos");</script>';
    }
}
?>
