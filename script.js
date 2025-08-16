document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-container nav ul li a");
    const currentPath = window.location.pathname.split("/").pop(); // e.g. index.html

    navLinks.forEach(link => {
        if (
            link.getAttribute("href") === currentPath ||
            (currentPath === "" && link.getAttribute("href") === "index.html")
        ) {
            link.classList.add("active");
        }
    });
});
