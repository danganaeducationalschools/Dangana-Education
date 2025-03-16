<?php
include "database.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $password = password_hash($_POST["password"], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (name, email, password, role) VALUES ('$name', '$email', '$password', 'student')";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(["success" => true, "message" => "Registration successful!"]);
    } else {
        echo json_encode(["success" => false, "message" => "Error: " . $conn->error]);
    }
}
?>
