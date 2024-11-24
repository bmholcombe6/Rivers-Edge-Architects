document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const sidebarMenu = document.querySelector(".sidebar-menu");
    const menuOverlay = document.querySelector(".menu-overlay");
  
    // Toggle the sidebar menu
    menuButton.addEventListener("click", () => {
      sidebarMenu.classList.toggle("active");
      menuOverlay.classList.toggle("active");
    });
  
    // Close the sidebar menu when clicking outside
    menuOverlay.addEventListener("click", () => {
      sidebarMenu.classList.remove("active");
      menuOverlay.classList.remove("active");
    });
  
    // Automatically hide the sidebar menu on window resize
    window.addEventListener("resize", () => {
      if (sidebarMenu.classList.contains("active")) {
        sidebarMenu.classList.remove("active");
        menuOverlay.classList.remove("active");
      }
    });
  });
  