<?php
session_start();
if (!isset($_SESSION["user"]) || $_SESSION["user"]["role"] != "student") {
    header("Location: login.html");
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_FILES["assignment"])) {
    $target_dir = "assignments/";
    $target_file = $target_dir . basename($_FILES["assignment"]["name"]);
    
    if (move_uploaded_file($_FILES["assignment"]["tmp_name"], $target_file)) {
        echo "Assignment uploaded successfully!";
    } else {
        echo "Error uploading assignment.";
    }
}
?>
