// main.js

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const sidebar = document.querySelector(".mobile-sidebar");
    const overlay = document.querySelector(".mobile-overlay");
    const closeBtn = document.querySelector(".close-sidebar");
    const sidebarLinks = document.querySelectorAll(".mobile-sidebar-links a");

    function openSidebar() {
        if (!sidebar || !overlay) return;
        sidebar.classList.add("open");
        overlay.classList.add("show");
    }

    function closeSidebar() {
        if (!sidebar || !overlay) return;
        sidebar.classList.remove("open");
        overlay.classList.remove("show");
    }

    // Open sidebar when clicking the menu icon
    if (menuToggle) {
        menuToggle.addEventListener("click", openSidebar);
    }

    // Close sidebar when clicking the X button
    if (closeBtn) {
        closeBtn.addEventListener("click", closeSidebar);
    }

    // Close sidebar when clicking outside (overlay)
    if (overlay) {
        overlay.addEventListener("click", closeSidebar);
    }

    // Optional: close sidebar when clicking a link inside it (on mobile)
    sidebarLinks.forEach(link => {
        link.addEventListener("click", closeSidebar);
    });
});
