document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");

  navLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      // Remove active class from all nav links
      navLinks.forEach((link) => link.classList.remove("active"));
      // Add active class to the clicked link
      this.classList.add("active");

      // Get the section ID from the clicked link
      const targetId = this.getAttribute("href").substring(1);

      // Hide all sections and remove active class
      sections.forEach((section) => section.classList.remove("active"));

      // Show the target section
      const targetSection = document.getElementById(targetId);
      targetSection.classList.add("active");
    });
  });
});
