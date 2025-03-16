document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle Mobile Menu
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Close Menu When Clicking a Link
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
        });
    });

    // Login Form Handling
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const students = [
                { email: "student1@example.com", password: "password123" },
                { email: "student2@example.com", password: "secure456" }
            ];

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;
            const user = students.find(student => student.email === email && student.password === password);

            if (user) {
                sessionStorage.setItem("student", email);
                window.location.href = "dashboard.html"; // Redirect to Student Dashboard
            } else {
                document.getElementById("loginMessage").innerText = "Invalid email or password!";
            }
        });
    }

    // Redirect Unauthorized Users from Dashboard
    if (window.location.pathname.includes("dashboard.html")) {
        if (!sessionStorage.getItem("student")) {
            window.location.href = "login.html"; // Force login if not authenticated
        }
    }

    // Logout Function
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            sessionStorage.removeItem("student");
            window.location.href = "login.html";
        });
    }
});

// Show/Hide Password Toggle
function togglePassword() {
    let passField = document.getElementById("password");
    passField.type = passField.type === "password" ? "text" : "password";
}
