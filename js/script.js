const scrollToTopBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Agrega animación cuando llega arriba
    scrollToTopBtn.classList.add("top-reached");

    setTimeout(() => {
        scrollToTopBtn.classList.remove("show", "top-reached");
    }, 500);
});
