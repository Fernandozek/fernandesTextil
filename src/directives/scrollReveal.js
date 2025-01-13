document.addEventListener("DOMContentLoaded", function () {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      } else {
        entry.target.classList.remove("is-visible");
      }
    });
  });

  // Seleciona todos os elementos com a classe 'reveal'
  const elements = document.querySelectorAll(".reveal");
  elements.forEach((element) => observer.observe(element));
});
