// Menu Mobile Responsivo
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Animação Carrossel
  const leftArrow = document.getElementById("left-arrow");
  const rightArrow = document.getElementById("right-arrow");
  const carouselContainer = document.getElementById("carousel-container");

  if (leftArrow && rightArrow && carouselContainer) {
    rightArrow.addEventListener("click", () => {
      const firstItem = carouselContainer.querySelector(".flex-shrink-0");
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const margin = 24; // Valor do space-x-6
        carouselContainer.scrollBy({
          left: itemWidth + margin,
          behavior: "smooth",
        });
      }
    });

    leftArrow.addEventListener("click", () => {
      const firstItem = carouselContainer.querySelector(".flex-shrink-0");
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const margin = 24; // Valor do space-x-6
        carouselContainer.scrollBy({
          left: -(itemWidth + margin),
          behavior: "smooth",
        });
      }
    });
  }
});
