

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
// Funktion som kollar ifall det matchar.
function doesItMatch() {
  let isMatch = firstCard. dataset.framework === secondCard.dataset.framework;
  // Detta är istället för en IF statement.
  isMatch ? disableCards() : unflipCards();
}
// En funktion som gör att när du valt 2 kort så kan du trycka vidare.
// Ifall funktionen inte finns så kan inte spelaren fortsätta efter sina 2 första kort är uppe.
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
    // Kallar på funktionen som finns under "unflipCards" funktion.
    resetBoard();
    // Tiden för hur länge
  }, 1000);
}
/******* ******/

/****** Arber *******/
// Denna funktionen gör så att du kan trycka vidare efter när första och andra kortet är uppe vare sig det matchar eller inte.
// Ifall man tar funktionen så kan inte spelaren fortsätta trycka vidare efter sina första 2 kort.
function resetBoard() {
  // youFlipTheCard & cardIsLocked är false
  [youFlipTheCard, cardIsLocked] = [false, false];
  // då är såklart firstCard & secondCard null med eftersom false & null är tsm som att skriva "!" i ett IF statement.
  [firstCard, secondCard] = [null, null];
}


// Den här addEventListenern är till för varje klick dvs kort. Jag kallar denna även under funktionen " flipMyCard "
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

//Justera när Arber har lagt till fler kort, öka till 60
let targetScore = 30;

/****** FRIDA *** La till Arbers addEventListener för att fixa moves så den fungerar tsm.****/
cards.forEach(card => card.addEventListener('click',
    function(){
        
        //För varje klick, så räknas ett move
        let moves = document.querySelector('#moves');
        movesCounter++;

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


    /*****************GAME OVER START******************/
    //frida
    if(targetScore === score){
      setTimeout(
        function(){
          alert(`End of round! Your score: ${score}. Your time: ${hour}h ${minute}min ${second}sec. In ${movesCounter} amount of moves`);
          window.location.reload() 
        }, 200);
    }

})
    
)  
/*****************GAME SLUTAR ******************/

/************** MOVESCOUNTER SLUTAR **************/




/********* GALINA - TIMER **********/


/***** GALINA ******/
let second = 0, minute = 0; hour = 0;
let timer = document.querySelector("#time")
let interval;
let finalTime = timer.innerHTML;
/***** ******/

function startTimer(){
  interval = setInterval
  (function(){
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

/********SLUTAR HÄR********/