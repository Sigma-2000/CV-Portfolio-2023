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

const nav = document.querySelector("nav");
document.querySelector('#icons').addEventListener('click', ()=>{
   nav.classList.toggle("active");
});

const links = document.querySelectorAll("nav li");

links.forEach((link)=>{
    link.addEventListener("click",()=>
    nav.classList.remove("active"));
});
