<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Conexión a la base de datos (ajusta las configuraciones según tu entorno)
    $servername = "localhost";
    $username = "tu_usuario";
    $password = "tu_contraseña";
    $dbname = "tu_base_de_datos";

    // Crea la conexión a la base de datos
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Verifica la conexión
    if ($conn->connect_error) {
        die("Error de conexión a la base de datos: " . $conn->connect_error);
    }

    // Recibe datos del formulario
    $nombre = $conn->real_escape_string($_POST["nombre"]);
    $apellidoPaterno = $conn->real_escape_string($_POST["apellido_paterno"]);
    $telefono = $_POST["numero"];
    $direccion = $_POST["direccion"];
    $edad = $_POST["edad"];
    $email = $conn->real_escape_string($_POST["email"]);
    $tipoVehiculo = $_POST["tipoVehiculo"];

    // Realiza alguna lógica de procesamiento (almacenar en base de datos, enviar correo, etc.)
    // ...

    // Prepara la sentencia SQL para la inserción de datos
    $sql = "INSERT INTO registros (nombre, apellido_paterno, telefono, direccion, edad, email, tipo_vehiculo) 
            VALUES (?, ?, ?, ?, ?, ?, ?)";

    // Crea la sentencia preparada
    $stmt = $conn->prepare($sql);

    // Vincula los parámetros
    $stmt->bind_param("ssssiss", $nombre, $apellidoPaterno, $telefono, $direccion, $edad, $email, $tipoVehiculo);

    // Ejecuta la sentencia preparada
    if ($stmt->execute()) {
        echo "¡Gracias por registrarte, $nombre! Los datos se han almacenado correctamente en la base de datos.";
    } else {
        echo "Error al almacenar los datos: " . $stmt->error;
        // Agrega manejo de errores adicional aquí, como registrar en un archivo de registro.
    }

    // Cierra la conexión a la base de datos y la sentencia preparada
    $stmt->close();
    $conn->close();
}
?>