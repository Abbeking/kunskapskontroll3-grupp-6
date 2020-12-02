
const KEY = 'd2631700c655889a0140bf73d669c79e';
let searchText = 'santa';

const url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=1&page=5`;

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data.photos.photo[0]);
        getImageUrl(data.photos.photo[0]);
    }
)

//  här ska vi pussla ihop bild urlen
function getImageUrl(photoObject){
    let photo = photoObject;
    let size = 'b';

    let imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

    console.log(imgUrl);
    displayImg(imgUrl);
}

//  för att visa bilden
function displayImg(url){
    let img = document.querySelector('.pair-1');
    img.src = url;
    //  img.setAttribute('src', url);

    let body = document.querySelector('body');
    body.appendChild(img);

}

/***** GALINA ******/
let second = 0, minute = 0; hour = 0;
let timer = document.querySelector("#time")
let interval;
let finalTime = timer.innerHTML;
/***** ******/






//**********************             ***************************/

/****** ARBER *******/
// Hämtar alla .card från HTML.
const cards = document.querySelectorAll('.card');
// Börjar med false
let youFlipTheCard = false;
// Börjar med false här med.
let cardIsLocked = false;
let firstCard, secondCard;


/********* ARBERS funktion *********/

function flipMyCard() {
  if (cardIsLocked) 
  return;
    // this har med addEventListener click att göra dvs om du klickar på ett kort, så dyker den upp.
  if (this === firstCard) 
  return;
    // Den har med CSS att göra
  this.classList.add('letsFlip');
    // Fixat att youFlipTheCard är false & null.
  if (youFlipTheCard === false || youFlipTheCard === null) {
    // Den blir nu till TRUE så kortet kan flippas.
    youFlipTheCard = true;
    // Första kortet, & " this "  betyder " vart du klickar " Då kommer kortet upp. Liksom this = click
    // Ifall firstCard = this; raderas då kommer inte FÖRSTA kortet stanna kvar, du kan då klicka på alla kort.
    firstCard = this;
    // Den väntar nu tills nästa klick med hjälp av return.
    return;
  }



  // Den skippar nu IF. Första kortet är ju true redan.
  // Precis som tidigare, baseras på klickning. Ifall secondCard är öppen efter firstCard då stannar den och checkar ifall den matchar, om inte så går den tillbaks till ruta ett dvs inga kort öppna.  
  secondCard = this;
  // Slutligen så kollar den nu om firstCard & secondCard matchar.
  // Ifall den matchar så kan du fortsätta med att hitta nya kort.
  doesItMatch();
}






/******* ARBER - Ifall korten matchar & om dem gör så går den till disableCards dvs, börjar om på ruta ett. *******/

function doesItMatch() {
  let isMatch = firstCard. dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.removeEventListener('click', flipMyCard);
  secondCard.removeEventListener('click', flipMyCard);

  resetBoard();
}

/********************** SLUTAR HÄR**********************/



/******** ARBERS funktion ********/

function unflipCards() {
  //  Nu är cardLocked true.
  cardIsLocked = true;
  // En timeout baserat på när du trycker på något kort så väntar den lite tills nästa.
  setTimeout(() => {
    firstCard.classList.remove('letsFlip');
    secondCard.classList.remove('letsFlip');
    // Tiden för hur länge
    resetBoard();
  }, 1000);
}
/******* ******/

/****** Arber *******/
function resetBoard() {
  // youFlipTheCard & cardIsLocked är false
  [youFlipTheCard, cardIsLocked] = [false, false];
  // då är såklart firstCard & secondCard null med eftersom false & null är tsm som att skriva "!" i ett IF statement.
  [firstCard, secondCard] = [null, null];
}




cards.forEach(card => card.addEventListener('click', flipMyCard));



/**************** SHUFFLE BÖRJAR ***************/
//Frida Waldt


//En funktion som sätter bilderna på random order

(function shuffle(){
  cards.forEach((card) => {
      let randomPos = Math.floor(Math.random() * 24);
      card.style.order = randomPos;


  }

  )
})();


/**************** SHUFFLE SLUTAR HÄR ***************/



/************** MOVESCOUNTER BÖRJAR **************/
//Frida Waldt


//  Vår movescounter börjar på 0
let movesCounter = 0;
// Frida la till score över addEventListener så att det går att fixa 5 poäng.
let score = 0;



/****** FRIDA *** La till Arbers addEventListener för att fixa moves så den fungerar tsm.****/
cards.forEach(card => card.addEventListener('click',
    function(){
        
        //För varje click, så räknas ett move
        movesCounter++;
        let moves = document.querySelector('#moves');

        moves.innerText = movesCounter;
        /****** GALINA *****/
        if(movesCounter==1){
          second = 0;
          minute = 0; 
          hour = 0;
          startTimer();
        }
        /****** SLUTAR HÄR *******/


      /***** GALINA, ARBER & FRIDA *****/

  let scoreCounter = document.querySelector('#score')

  // när firstCard har matchat med secondCard så får du som spelare 5 poäng /abbe
  if (firstCard === secondCard){
      score+=5
      scoreCounter.innerHTML = score;
  }

    /************************** **************************/


})
    
)  

/************** MOVESCOUNTER SLUTAR **************/




/********* GALINA - TIMER **********/

function startTimer(){
  interval = setInterval(function(){
      timer.innerHTML = minute+"mins "+second+"secs";
      second++;
      if(second == 60){
          minute++;
          second=0;
      }
      if(minute == 60){
          hour++;
          minute = 0;
      }
  },1000);
}


/*************** RESET START  ****************/
//Frida Waldt



//En funktion som resettar vår tid, score och moves och unflippar alla kort.
function reset(){
    unflip(); //Arbers funktion
    time = 0;  //Galinas variabel
    score = 0; // Arbers variabel
    moves = 0; // Min variabel


    let timeCounter = document.querySelector('#time');
    timeCounter.innerText = time;
    let scoreCounter = document.querySelector('#score');
    scoreCounter.innerText = score;
    let movesCounter = document.querySelector('#moves');
    movesCounter.innerText = moves;


}


/*************** RESET END ****************/




