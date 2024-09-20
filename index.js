document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".nav-link");
  const navIcons = document.querySelectorAll(".nav-icon");
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

      //scroll to top
    });
  });

  const roles = [
    "Full Stack Developer",
    "UI/UX Designer",
    "Web Developer",
    "Mobile App Developer",
  ];
  let roleIndex = 0;
  const textElement = document.getElementById("changing-text");

  function changeRole() {
    // Fade out the current text
    gsap.to(textElement, {
      opacity: 0,
      duration: 1,
      onComplete: () => {
        // Once faded out, change the text
        textElement.textContent = roles[roleIndex];
        roleIndex = (roleIndex + 1) % roles.length; // Cycle through roles
        // Fade in the new text
        gsap.to(textElement, { opacity: 1, duration: 1 });
      },
    });
  }

  // Call changeRole every 3 seconds to rotate the roles
  setInterval(changeRole, 3000);

  // Start the first role change
  changeRole();
});
