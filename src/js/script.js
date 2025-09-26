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

// Script para o formulário de contato
document
  .getElementById("formulario-contato")
  .addEventListener("submit", function (evento) {
    evento.preventDefault();

    const dadosFormulario = new FormData(this);
    console.log("Dados do formulário:", {
      nome: dadosFormulario.get("nome"),
      email: dadosFormulario.get("email"),
      assunto: dadosFormulario.get("assunto"),
      mensagem: dadosFormulario.get("mensagem"),
      marketing: dadosFormulario.get("marketing"),
    });

    const mensagemSucesso = document.getElementById("sucesso-formulario");
    mensagemSucesso.classList.remove("hidden");
    mensagemSucesso.classList.add("animate-fade-in");

    this.style.opacity = "0.7";
    setTimeout(() => {
      this.reset();
      this.style.opacity = "1";
    }, 300);

    setTimeout(() => {
      mensagemSucesso.classList.add("hidden");
      mensagemSucesso.classList.remove("animate-fade-in");
    }, 5000);
  });

document.getElementById("marketing").addEventListener("change", function () {
  const customCheckbox = document.querySelector(".checkbox-custom");
  if (this.checked) {
    customCheckbox.style.transform = "scale(1.1)";
    setTimeout(() => {
      customCheckbox.style.transform = "scale(1)";
    }, 150);
  }
});
