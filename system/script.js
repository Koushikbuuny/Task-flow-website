// ===== Mobile Menu Toggle (optional for later) =====
// You can add hamburger toggle here if needed

// ===== Accordion for FAQs =====
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-header");
  accordions.forEach(header => {
    header.addEventListener("click", () => {
      const body = header.nextElementSibling;
      body.style.display = body.style.display === "block" ? "none" : "block";
    });
  });

  // ===== Fade-in animation on scroll =====
  const cards = document.querySelectorAll(".card");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.6s ease";
    observer.observe(card);
  });
});
