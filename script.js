window.addEventListener('scroll', function() {
    const titulo = document.getElementById('titulo');
    if (window.scrollY > 100) {  
        titulo.classList.add('shrink-shadow');
    } else {
        titulo.classList.remove('shrink-shadow');
    }
});
const titulo = document.getElementById("titulo");
const nav = document.querySelector("nav");

const tamañoNormal = "50px"; 
const tamañoReducido = "35px";

const tamañonormal = "20px";
const tamañoreducido = "15px";

const paddingNormal = "10px 20px";  
const paddingReducido = "5px 20px"; 

// Detectar el scroll
window.onscroll = function() {
  if (window.scrollY > 100) {  
    titulo.style.fontSize = tamañoReducido;
    nav.style.fontSize = tamañonormal;
    nav.style.padding = paddingReducido;
  } else {
    
    titulo.style.fontSize = tamañoNormal;
    nav.style.fontSize = tamañoreducido;
    nav.style.padding = paddingNormal;
  }};
  window.addEventListener('scroll', function () {
    const nav = document.querySelector('.move');
    const stopPoint = document.querySelector('#fin'); // ID del punto donde debe dejar de ser sticky

    const navHeight = nav.offsetHeight;
    const stopY = stopPoint.getBoundingClientRect().top + window.scrollY;

    if (window.scrollY + navHeight >= stopY) {
      nav.classList.add('unstuck'); // deja de ser sticky
    } else {
      nav.classList.remove('unstuck'); // sigue siendo sticky
    }
  });