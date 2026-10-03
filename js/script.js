document.addEventListener("DOMContentLoaded", function () {
  // Hero Button Alert
  const learnBtn = document.getElementById("learnBtn");
  if (learnBtn) {
    learnBtn.addEventListener("click", function () {
      alert("✨ Welcome to BrightTech Solutions! Explore our services to get started.");
    });
  }

  // Contact Form Submission Handler
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("🚀 Message sent successfully! We'll get back to you shortly.");
      contactForm.reset();
    });
  }
});