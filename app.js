const KEY = '6459c13bcb4afc2fa8d3abc9fca37707';
let searchText = 'santa';
const cards = document.querySelectorAll('.card');
var second = 0, minute = 0; hour = 0;
var timer = document.querySelector("#time")
var interval;
let finalTime = timer.innerHTML;

let movesCounter = 0;                                        //GALA
let score=document.querySelector('#score')
cards.forEach(card => card.addEventListener('click', 
function(){
  movesCounter++
  let moves=document.querySelector('#moves');
  moves.innerText=movesCounter;
  if(movesCounter==1){                  //Gala
    second = 0;
    minute = 0; 
    hour = 0;
    startTimer();
  }
  
  
  score.innerHTML='100 '                //Gala
  // setting rates based on moves
  if (movesCounter > 12 && movesCounter <= 20){
      score.innerHTML='80';
                 
  }
  else if (movesCounter > 20 && movesCounter <= 25){
      score.innerHTML='60';       
      
  }
  else if (movesCounter > 25 && movesCounter <= 30){
      score.innerHTML='40';       
      
  }else if (movesCounter > 30 && movesCounter <= 35){
      score.innerHTML='20';    
  }
  else if (movesCounter > 35){
      score.innerHTML='0';       
  } 

}))


// sätta game timer

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



const url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=12&page=1`;

fetch(url).then(
    function(response){
        console.log(response);
        return response.json();
    }
).then(
    function(data){
        console.log(data.photos.photo);// array med 12 objecter
        
        getImageUrl(data.photos.photo); 
    }
)

//här ska vi pussla ihop bild urlen
function getImageUrl(photoArray){
    let photos = photoArray;
    let size = 'q';
    var imgUrls = [];

    for(let photo of photos){
        var url = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

        imgUrls.push(url);
    }
    console.log(imgUrls)  //en Array med 12 suträng-url:en

    let img = document.querySelectorAll('.front-face ');
    let imgArr=[...img]  
    console.log(imgArr)  //array med 12 img
    for (let i=0; i<imgArr.length; i++){
    imgArr[i].setAttribute('src', imgUrls[i]);
    // displayImg(imgUrls);
}

}


//**********************             ***************************/


let youFlipTheCard = false;
let cardIsLocked = false;
let firstCard, secondCard;

/** Arbers funktion **/
function flipMyCard() {
  if (cardIsLocked) 
  return;
    // this har med addEventListener click att göra dvs om du klickar på ett kort, så dyker den upp.
  if (this === firstCard) 
  return;
    // Den har med CSS att göra
  this.classList.add('letsFlip');
    // Om den är false & null
  if (youFlipTheCard === false || youFlipTheCard === null) {
    // Då är den true nu
    youFlipTheCard = true;
    // Value på kortet som dyker upp när du har tryckt på ett kort.
    firstCard = this;
    // Den väntar nu tills nästa klick med hjälp av return.
    return;
  }



  // Den skippar nu IF. Första kortet är ju true redan.
  // Nu baseras andra kortet på vad du trycker, precis som tidigare.  
  secondCard = this;
  // Slutligen så kollar den nu om firstCard & secondCard matchar.
  // Ifall den matchar så kan du hitta nya kort.
  checkForMatch();
}

/*******************************ALLT HÅLLER PÅ ATT FIXAS*******************************/
function disableCards() {
    /*************************** ********************************/
  firstCard.removeEventListener('click', flipMyCard);
  /**************************** *********************************/
  secondCard.removeEventListener('click', flipMyCard);

  resetBoard();
}

/**** Arbers funktion ****/
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







