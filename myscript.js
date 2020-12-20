const cardInner = document.querySelector('.card-inner');

function flipCard() {
  cardInner.classList.toggle('is-flipped');
}

cardInner.addEventListener('click', flipCard);