document.addEventListener("DOMContentLoaded", function () {
    // Get student name from session
    const studentEmail = sessionStorage.getItem("student");
    if (!studentEmail) {
        window.location.href = "login.html"; // Redirect if not logged in
    } else {
        document.getElementById("studentName").textContent = studentEmail.split("@")[0];
    }
});

function logout() {
    sessionStorage.removeItem("student");
    window.location.href = "login.html";
}
