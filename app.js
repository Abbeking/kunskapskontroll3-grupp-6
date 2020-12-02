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
// Hämtar alla .card från HTML.
const cards = document.querySelectorAll('.card');
// Börjar med false
let youFlipTheCard = false;
// Börjar med false här med.
let cardIsLocked = false;
let firstCard, secondCard;


/**** Arbers funktion ****/
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







