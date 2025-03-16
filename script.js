document.addEventListener("DOMContentLoaded", function () {
    // **Login Form Handling**
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = document.getElementById("email").value;
            const password = document.getElementById("password").value;

            // Dummy user data (Replace with backend authentication)
            const users = [
                { email: "student@example.com", password: "student123", role: "student" },
                { email: "admin@example.com", password: "admin123", role: "admin" }
            ];

            const user = users.find(u => u.email === email && u.password === password);

            if (user) {
                sessionStorage.setItem("user", JSON.stringify(user));
                window.location.href = user.role === "admin" ? "admin.html" : "dashboard.html";
            } else {
                document.getElementById("loginMessage").innerText = "Invalid email or password!";
            }
        });
    }

    // **Handle Dashboard Redirects**
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (window.location.pathname.includes("dashboard.html") || window.location.pathname.includes("admin.html")) {
        if (!user) {
            window.location.href = "login.html"; // Redirect if not logged in
        } else {
            const nameSpan = document.getElementById("studentName");
            if (nameSpan) nameSpan.textContent = user.email.split("@")[0];
        }
    }

    // **Logout Function**
    const logoutBtn = document.getElementById("logoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", function () {
            sessionStorage.removeItem("user");
            window.location.href = "login.html";
        });
    }

    // **Smooth Scrolling for Internal Links Only**
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    // **Toggle Mobile Menu**
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
}
function closeMenu() {
    document.querySelector(".nav-links").classList.remove("active");
}
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (e) {
            if (!menuIcon.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove("active");
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll(".nav-links a").forEach(link => {
            link.addEventListener("click", function () {
                navLinks.classList.remove("active");
            });
        });
    }

    // **Show/Hide Password Toggle**
    const passwordField = document.getElementById("password");
    const togglePasswordBtn = document.getElementById("togglePassword");

    if (togglePasswordBtn) {
        togglePasswordBtn.addEventListener("click", function () {
            passwordField.type = passwordField.type === "password" ? "text" : "password";
        });
    }
});
