<?php
session_start();
if (!isset($_SESSION["user"]) || $_SESSION["user"]["role"] != "admin") {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="sidebar">
        <h2 class="logo">Admin Panel</h2>
        <ul>
            <li><a href="manage_students.php">👩‍🎓 Manage Students</a></li>
            <li><a href="manage_courses.php">📖 Manage Courses</a></li>
            <li><a href="logout.php">🚪 Logout</a></li>
        </ul>
    </div>

    <div class="main-content">
        <header>
            <h2>Welcome, Admin!</h2>
        </header>
    </div>

</body>
</html>
