<?php
session_start();
if (!isset($_SESSION["user"]) || $_SESSION["user"]["role"] != "student") {
    header("Location: login.html");
    exit();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Dashboard</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

    <div class="sidebar">
        <h2 class="logo">Student Portal</h2>
        <ul>
            <li><a href="#courses">📚 My Courses</a></li>
            <li><a href="#assignments">📂 Assignments</a></li>
            <li><a href="logout.php">🚪 Logout</a></li>
        </ul>
    </div>

    <div class="main-content">
        <header>
            <h2>Welcome, <?= $_SESSION["user"]["name"] ?>!</h2>
        </header>
        
        <section id="courses">
            <h2>Your Courses</h2>
            <ul>
                <?php
                include "database.php";
                $email = $_SESSION["user"]["email"];
                $query = "SELECT * FROM enrollments WHERE student_email='$email'";
                $courses = $conn->query($query);
                
                while ($course = $courses->fetch_assoc()) {
                    echo "<li>" . $course["course_name"] . "</li>";
                }
                ?>
            </ul>
        </section>

        <section id="assignments">
            <h2>Submit Assignment</h2>
            <form action="upload_assignment.php" method="post" enctype="multipart/form-data">
                <input type="file" name="assignment" required>
                <button type="submit">Upload</button>
            </form>
        </section>
    </div>

</body>
</html>
