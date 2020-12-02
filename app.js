
/************** MOVESCOUNTER START **************/
//Frida Waldt


//Vår movescounter börjar på 0
let movesCounter = 0;


//TA BORT
const cards = document.querySelectorAll('.card');



//LÄGG INNANFÖR ARBERS EVENTLISTENER
cards.forEach(card => card.addEventListener('click',
    function(){
        
        //För varje click, så räknas ett move
        movesCounter++;
        let moves = document.querySelector('#moves');

        moves.innerText = movesCounter;


})
    
)  

/************** MOVESCOUNTER END **************/


/**************** SHUFFLE START ***************/
//Frida Waldt


//En funktion som sätter bilderna på random order
(function shuffle(){
    cards.forEach((card) => {
        let randomPos = Math.floor(Math.random() * 24);
        card.style.order = randomPos;


    }

    )
})();






/**************** SHUFFLE END ***************/




/*************** RESET START  ****************/
//Frida Waldt



//En funktion som resettar vår tid, score och moves och unflippar alla kort.
function reset(){
    unflip(); //Arbers funktion
    time = 0;  //Galinas variabel
    score = 0; // Arbets variabel
    moves = 0; // Min variabel


    let timeCounter = document.querySelector('#time');
    timeCounter.innerText = time;
    let scoreCounter = document.querySelector('#score');
    scoreCounter.innerText = score;
    let movesCounter = document.querySelector('#moves');
    movesCounter.innerText = moves;

}


/*************** RESET END ****************/