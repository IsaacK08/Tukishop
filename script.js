// Script for navigation bar
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

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

let currentlyPlaying = null;

document.querySelectorAll('.video-container').forEach(container => {
  const video = container.querySelector('.gallery-video');
  const playButton = container.querySelector('.play-button');

  playButton.addEventListener('click', () => {
    if (currentlyPlaying && currentlyPlaying !== video) {
      currentlyPlaying.pause();
      currentlyPlaying.closest('.video-container').querySelector('.play-button').classList.remove('hidden');
    }

    if (video.paused) {
      video.play();
      playButton.classList.add('hidden');
      currentlyPlaying = video;
    } else {
      video.pause();
      playButton.classList.remove('hidden');
      currentlyPlaying = null;
    }
  });

  video.addEventListener('ended', () => {
    playButton.classList.remove('hidden');
    currentlyPlaying = null;
  });
});

document.querySelectorAll('.gallery-video').forEach(video => {
  video.addEventListener('click', () => {
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  });
});

document.getElementById('scrollToCategory').addEventListener('click', function() {
  document.querySelector('#categories').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('scrollToFooter').addEventListener('click', function() {
  document.querySelector('.section-p1').scrollIntoView({ behavior: 'smooth' });
});