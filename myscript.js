const cardInner = document.querySelector('.card-inner');
const cardsList = document.querySelector('.cards-list');

class qCard {
  constructor(quote, authour, extra, background) {
    this.quote = quote;
    this.authour = authour;
    this.extra = extra;
    this.background = background;
  }
}

let qCards = [];
let frontOfCard = true;
let faceCard = new qCard;

//flips the card and tracks which face is displaying
function flipCard() {
  if (frontOfCard) {
    frontOfCard = false;
  } else {
    frontOfCard = true;
  }

  changeText();
  cardInner.classList.toggle('is-flipped');
}

function changeText() {
  console.log(frontOfCard)
  if (frontOfCard) {
    currCard = selectCard();
    document.getElementById("fq").innerHTML = currCard.quote;
    document.getElementById("fa").innerHTML = currCard.authour;
    document.getElementById("fe").innerHTML = currCard.extra;
    document.getElementById("fi").src = currCard.background;
  } else {
    currCard = selectCard();
    document.getElementById("bq").innerHTML = currCard.quote;
    document.getElementById("ba").innerHTML = currCard.authour;
    document.getElementById("be").innerHTML = currCard.extra;
    document.getElementById("bi").src = currCard.background;
  }
}

//fills qCards array with data for cards to be displayed
function loadCards() {
  let q1 = new qCard("It is important to draw wisdom from \
  different places. If you take it from only one place, it \
  becomes rigid and stale.", "Uncle Iroh", "Avatar: The Last \
  Airbender", "images/orange_valley.jpg");

  let q2 = new qCard("I see now that the circumstances of one's \
  birth are irrelevant. It is what you do with the gift of life \
  that determines who you are.", "Mewtwo", "Pokemon: The First Movie",
    "images/blue_lighthouse.jpg");

  let q3 = new qCard("You should enjoy the little detours to the \
  fullest, because that's where you will find things more \
  important than what you want.", "Ging Freecss", "Hunter X Hunter",
    "images/green_forest.jpg");

  let q4 = new qCard("Hate is a place where a man who can't \
  stand sadness goes.", "Godo", "Berserk",
    "images/purple_mountain.jpg")

  let q5 = new qCard("Knowing what it feels like to be in pain \
  is exactly why we try to be kind to others.", "Jiraiya",
    "Naruto", "images/pink_valley.jpg")

  let q6 = new qCard("Darkness cannot drive out darkness, only \
  light can do that. Hate cannot drive out hate, only love can \
  do that.", "Martin Luther King, Jr.",
    "A Testament of Hope", "images/purple_mountain.jpg")

  let q7 = new qCard("Be yourself; everyone else is already taken.",
    "Oscar Wilde", "", "images/pink_valley.jpg")

  let q8 = new qCard("Don’t walk in front of me… I may not \
  follow. Don’t walk behind me… I may not lead. \
  Walk beside me… just be my friend.", "Albert Camus",
    "", "images/green_forest.jpg")

  let q9 = new qCard("No one can make you feel inferior \
  without your consent.", "Eleanor Roosevelt", "This is My Story",
    "images/orange_valley.jpg")

  let q10 = new qCard("I've learned that people will forget what \
  you said, people will forget what you did, but people will \
  never forget how you made them feel.", "Maya Angelou", "",
    "images/purple_mountain.jpg")

  qCards = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];
}

//selects a random quote card from qCards
function selectCard() {
  let currCard = qCards[Math.floor(Math.random() * qCards.length)];
  while (currCard == faceCard) {
    currCard = qCards[Math.floor(Math.random() * qCards.length)];
  }
  faceCard = currCard;
  return currCard;
}

cardInner.addEventListener('click', flipCard);
cardsList.addEventListener("load", loadCards);