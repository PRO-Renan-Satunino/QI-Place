// Função para o slider de destaques
let slideIndex = 0;
showSlides();

function showSlides() {
    let i;s
    const slides = document.getElementsByClassName("destaque-slide");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1 }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 3000); // Altera a imagem a cada 3 segundos (3000 milissegundos)
}
