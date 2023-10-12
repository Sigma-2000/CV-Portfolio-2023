const copy = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector(".logos").appendChild(copy);
const copyThird = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector(".logos").appendChild(copyThird);

const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

document.querySelector('.carousel-button.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
});

document.querySelector('.carousel-button.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
});

// Afficher la première diapositive au chargement de la page
showSlide(currentIndex);