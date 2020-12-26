const cardInner = document.querySelector('.card-inner');
const cardsList = document.querySelector('.cards-list');

class qCard {
  constructor(quote, authour, extra, background) {
    this.quote = quote;
    this.authour = authour;
    this.extra = extra;
    this.extra = background;
  }
}

let qCards = [];
let frontOfCard = true;
let faceCard = new qCard;

//flips the card and tracks which face is displaying
function flipCard() {
  
  if(frontOfCard){
    frontOfCard = false;
  } else {
    frontOfCard = true;
  }
  changeText();
  cardInner.classList.toggle('is-flipped');
}

function changeText() {
  console.log(frontOfCard)
  if(frontOfCard){
    currCard = selectCard();
    document.getElementById("fq").innerHTML = currCard.quote;
    document.getElementById("fa").innerHTML = currCard.authour;
  } else {
    currCard = selectCard();
    document.getElementById("bq").innerHTML = currCard.quote;
    document.getElementById("ba").innerHTML = currCard.authour;
  }
}

//fills qCards array with data for cards to be displayed
function loadCards() {
  let q1 = new qCard("It is important to draw wisdom from \
  different places. If you take it from only one place, it \
  becomes rigid and stale.", "Uncle Iroh", "Avatar: The Last \
  Airbender", "https://i.redd.it/b3esnz5ra34y.jpg");
  
  let q2 = new qCard("I see now that the circumstances of one's \
  birth are irrelevant. It is what you do with the gift of life \
  that determines who you are.", "Mewtwo", "Pokemon: The First Movie",
  "https://i.redd.it/b3esnz5ra34y.jpg");

  let q3 = new qCard("You should enjoy the little detours to the \
  fullest, because that's where you will find things more \
  important than what you want.", "Ging Freecss", "Hunter X Hunter",
  "https://i.redd.it/b3esnz5ra34y.jpg");

  let q4 = new qCard("Hate is a place where a man who can't \
  stand sadness goes.", "Godo", "Berserk", 
  "https://i.redd.it/b3esnz5ra34y.jpg" )

  qCards = [q1, q2, q3, q4];
}

//selects a random quote card from qCards
function selectCard() {
  let currCard = qCards[Math.floor(Math.random()*qCards.length)];
  while (currCard == faceCard){
    currCard = qCards[Math.floor(Math.random()*qCards.length)];
  }
  faceCard = currCard;
  return currCard;
}

cardInner.addEventListener('click', flipCard);
cardsList.addEventListener("load", loadCards);