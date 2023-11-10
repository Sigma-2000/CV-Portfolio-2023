/*Animation titre*/
const title = document.querySelector('[aria-label="matrix"]');
const txt = "Bienvenue dans la matrice"
console.log(title)
function typewriter(word, index){
    if(index < word.length) {
        setTimeout(() => {
            title.innerHTML += `<span>${word[index]}</span>`
            typewriter(txt, index + 1)
        }, 200);
    }
}
setTimeout(() => {
    typewriter(txt, 0)
}, 700);

/*Logo carrousel*/ 
const copy = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector(".logos").appendChild(copy);
const copyThird = document.querySelector('.logos-slide').cloneNode(true);
document.querySelector(".logos").appendChild(copyThird);

/*Slider*/ 
document.addEventListener('DOMContentLoaded', function() {
    // Initialisation du premier carrousel que l'on recup avec id (instance de classe)
    const carousel1 = new Carousel('#carousel1');
    carousel1.init();

   
    const carousel2 = new Carousel('#carousel2');
    carousel2.init();

   
    const carousel3 = new Carousel('#carousel3');
    carousel3.init();
});
//construction de la classe et des attributs
class Carousel {
    constructor(carouselId) {
        this.carouselId = carouselId;
        this.currentIndex = 0;
        this.slides = document.querySelector(carouselId).querySelectorAll('.slide'); //bien rapporter au carousel en vigueur
        this.totalSlides = this.slides.length;
        this.prevButton = document.querySelector(carouselId).querySelector('.carousel-button.prev');//same!
        this.nextButton = document.querySelector(carouselId).querySelector('.carousel-button.next');
    }
//méthode pour faire apparaitre les slides sollicités
    showSlide(index) {
        this.slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }
//méthode pour associer les boutons à l'action de changer les slides en avant ou en arrière
    init() {
        this.prevButton.addEventListener('click', () => {
            this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
            this.showSlide(this.currentIndex);
        });

        this.nextButton.addEventListener('click', () => {
            this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
            this.showSlide(this.currentIndex);
        });

        // Afficher la première diapositive au chargement de la page
        this.showSlide(this.currentIndex);
    }
}
/*
const nav = document.querySelector("nav");
let isActive= false;
document.querySelector('#icons').addEventListener('click', ()=>{
    isActive=!isActive;
    if(isActive){
        nav.classList.add("active")
    }else{
        nav.classList.remove("active")
    }
});*/
/*burger nav*/ 
const nav = document.querySelector("nav");
document.querySelector('#icons').addEventListener('click', ()=>{
   nav.classList.toggle("active");
});

const links = document.querySelectorAll("nav li");

links.forEach((link)=>{
    link.addEventListener("click",()=>
    nav.classList.remove("active"));
});
