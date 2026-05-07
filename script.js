  const menuButton = document.getElementById("menuButton");
        const closeButton = document.getElementById("closeButton");
        const sidebar = document.getElementById("sidebar");
        const overlay = document.getElementById("overlay");

        // Open Sidebar
        menuButton.addEventListener("click", () => {
            sidebar.style.left = "0";
            overlay.classList.remove("hidden");
        });

        // Close Sidebar
        function closeSidebar() {
            sidebar.style.left = "-300px";
            overlay.classList.add("hidden");
        }

        closeButton.addEventListener("click", closeSidebar);
        overlay.addEventListener("click", closeSidebar);