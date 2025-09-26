// FAQ Accordion
document.addEventListener("DOMContentLoaded", () => {
    const accordions = document.querySelectorAll(".accordion-item button");
    accordions.forEach((btn) => {
        btn.addEventListener("click", () => {
            const content = btn.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});
