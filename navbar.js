fetch("navbar.html")
  .then(response => response.text())
  .then(data => {
    document.getElementById("navbar").innerHTML = data;

    const menuToggle = document.querySelector(".menu-toggle");
    const links = document.querySelector(".links");

    if (menuToggle && links) {
      menuToggle.addEventListener("click", () => {
        links.classList.toggle("show");
      });
    }

    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    const navLinks = document.querySelectorAll(".links a");

    navLinks.forEach(link => {
      const linkPage = link.getAttribute("href");
      if (linkPage === currentPage) {
        link.classList.add("active");
      }
    });
  });