
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

