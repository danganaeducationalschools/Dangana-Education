document.addEventListener("DOMContentLoaded", function () {
    // Smooth Scrolling for Internal Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });

    // Mobile Navigation Toggle
    const menuIcon = document.querySelector(".menu-icon");
    const navLinks = document.querySelector(".nav-links");

    if (menuIcon && navLinks) {
        menuIcon.addEventListener("click", function () {
            navLinks.classList.toggle("active");
            menuIcon.classList.toggle("open"); // Optional: Add class for styling animation
        });
    }

    // Close mobile menu on link click (optional)
    document.querySelectorAll(".nav-links a").forEach(link => {
        link.addEventListener("click", function () {
            navLinks.classList.remove("active");
            menuIcon.classList.remove("open");
        });
    });
});
