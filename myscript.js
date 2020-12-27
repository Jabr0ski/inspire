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
    document.getElementById("fi").src = currCard.background;
  } else {
    currCard = selectCard();
    document.getElementById("bq").innerHTML = currCard.quote;
    document.getElementById("ba").innerHTML = currCard.authour;
    document.getElementById("bi").src = currCard.background;
  }
}

//fills qCards array with data for cards to be displayed
function loadCards() {
  let q1 = new qCard("It is important to draw wisdom from \
  different places. If you take it from only one place, it \
  becomes rigid and stale.", "Uncle Iroh", "Avatar: The Last \
  Airbender", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1b3bf719-8603-4211-a054-1e161ce09a89/dbi1458-63dec81f-fd88-491a-a108-08642109c6f6.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvMWIzYmY3MTktODYwMy00MjExLWEwNTQtMWUxNjFjZTA5YTg5XC9kYmkxNDU4LTYzZGVjODFmLWZkODgtNDkxYS1hMTA4LTA4NjQyMTA5YzZmNi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.pANG4Qmw8NyMRpOVJomIkSOsvSEpfSD4jXsGpb6Jms4");
  
  let q2 = new qCard("I see now that the circumstances of one's \
  birth are irrelevant. It is what you do with the gift of life \
  that determines who you are.", "Mewtwo", "Pokemon: The First Movie",
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4220d224-afd0-40fb-bbf8-7fbb07bbbe18/dclmad6-a3273c41-6f48-48ca-9d45-621a942d173b.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNDIyMGQyMjQtYWZkMC00MGZiLWJiZjgtN2ZiYjA3YmJiZTE4XC9kY2xtYWQ2LWEzMjczYzQxLTZmNDgtNDhjYS05ZDQ1LTYyMWE5NDJkMTczYi5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.p8rH9iXhu306YTS8HpZNEWfydNn3ueVCoew5GeSp_T8");

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