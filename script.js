// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}


const intro = document.getElementById("intro");
const video = document.getElementById("intro-video");
const mainContent = document.getElementById("main-content");

// Detectar si es móvil
function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
}

// Asignar el video según el dispositivo
video.src = isMobile()
    ? "video/avisocel.mp4"
    : "video/avisoopc.mp4";

video.addEventListener("loadeddata", () => {
    video.play().catch(() => {});
});

video.addEventListener("ended", () => {
    intro.style.opacity = "0";
    mainContent.style.opacity = "1";

    setTimeout(() => {
        intro.style.display = "none";
    }, 900);
});

if (close) {
    close.addEventListener('click', () => {
    nav.classList.remove('active');
  })
}


//cards animation 
function flipCard(card) {
    card.classList.toggle('card-flip');
    
    var isFlipped = card.classList.contains('card-flip');
    
    if (isFlipped) {
      card.style.transform = 'rotateY(-180deg)';
    } else {
      card.style.transform = 'rotateY(0deg)';
    }
  }

  /*HEADER*/

  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    var navbar = header.querySelector('.navbar');
    if (window.scrollY > 0) {
      header.classList.add('scrolled');
      navbar.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
      navbar.classList.remove('scrolled');
    }
  });




 // Obtener elementos del DOM
const submenu = document.querySelector("#navbar .submenu");
const submenuTriggers = document.querySelectorAll("#navbar .submenu-trigger");

// Mostrar u ocultar el submenú al hacer clic en los elementos correspondientes
submenuTriggers.forEach(function(trigger) {
  trigger.addEventListener("click", function(event) {
    event.stopPropagation();
    submenu.classList.toggle("show");
  });
});
