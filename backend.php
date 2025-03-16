<?php
session_start();
$users = [
    ["email" => "student@example.com", "password" => "student123", "role" => "student"],
    ["email" => "admin@example.com", "password" => "admin123", "role" => "admin"]
];

$email = $_POST['email'];
$password = $_POST['password'];

foreach ($users as $user) {
    if ($user['email'] == $email && $user['password'] == $password) {
        $_SESSION['user'] = $user;
        echo json_encode(["success" => true, "role" => $user['role']]);
        exit;
    }
}

echo json_encode(["success" => false, "message" => "Invalid credentials"]);
?>
