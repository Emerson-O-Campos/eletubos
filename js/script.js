// =================================
// ELETUBOS — script.js
// =================================

// MENU MOBILE
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

if (menuBtn && navMenu) {
  menuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    const isOpen = navMenu.classList.contains("active");
    menuBtn.innerHTML = isOpen
      ? '<i class="fa-solid fa-xmark"></i>'
      : '<i class="fa-solid fa-bars"></i>';
  });
}

// FECHAR MENU MOBILE AO CLICAR EM LINK
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    if (navMenu) navMenu.classList.remove("active");
    if (menuBtn) menuBtn.innerHTML = '<i class="fa-solid fa-bars"></i>';
  });
});

// HEADER ENCOLHER AO SCROLL
const header = document.querySelector(".header");
if (header) {
  const onScroll = () => {
    if (window.scrollY > 30) header.classList.add("shrink");
    else header.classList.remove("shrink");
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

// FADE-IN ON SCROLL
const fadeElements = document.querySelectorAll(".fade-in");
if ("IntersectionObserver" in window && fadeElements.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  fadeElements.forEach((el) => observer.observe(el));
} else {
  fadeElements.forEach((el) => el.classList.add("show"));
}

// MARCAR LINK ATIVO NA NAVEGAÇÃO
(() => {
  const path = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav a").forEach((a) => {
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("http")) return;
    if (href === path) a.classList.add("active");
  });
})();
