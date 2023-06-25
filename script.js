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
  
  