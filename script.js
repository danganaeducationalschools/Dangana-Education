document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Toggle Menu (for mobile view)
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
        });
    }

    // Login Form Handling
    const loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Dummy credentials (Replace with backend authentication later)
            const students = [
                { email: "student1@example.com", password: "password123" },
                { email: "student2@example.com", password: "secure456" }
            ];

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            const user = students.find(student => student.email === email && student.password === password);

            if (user) {
                sessionStorage.setItem("student", email); // Store login session
                window.location.href = "dashboard.html";  // Redirect to Dashboard
            } else {
                document.getElementById("loginMessage").innerText = "Invalid email or password!";
            }
        });
    }

    // Logout Function
    if (window.location.pathname.includes("dashboard.html")) {
        if (!sessionStorage.getItem("student")) {
            window.location.href = "login.html"; // Redirect if not logged in
        }
    }
});

function logout() {
    sessionStorage.removeItem("student");
    window.location.href = "login.html";
}
