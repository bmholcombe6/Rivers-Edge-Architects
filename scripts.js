document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slide");
  let currentSlide = 0;

  function showSlide(index) {
    // Reset all slides
    slides.forEach((slide, i) => {
      slide.classList.remove("active");
      slide.style.opacity = 0; // Ensure proper transition effect
    });

    // Activate the current slide
    slides[index].classList.add("active");
    slides[index].style.opacity = 1; // Fade in the current slide
  }

  function nextSlide() {
    // Move to the next slide
    currentSlide = (currentSlide + 1) % slides.length; // Loop back to the first slide
    showSlide(currentSlide);
  }

  // Initial display of the first slide
  showSlide(currentSlide);

  // Change slides every 4 seconds
  setInterval(nextSlide, 4000);
});
