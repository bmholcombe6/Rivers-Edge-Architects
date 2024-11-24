document.addEventListener("DOMContentLoaded", () => {
  const expertiseItems = document.querySelectorAll(".expertise-item");

  expertiseItems.forEach(item => {
    item.addEventListener("click", () => {
      const market = item.getAttribute("data-market");
      alert(`More details about ${market.replace("-", " ").toUpperCase()} coming soon!`);
    });
  });
});
