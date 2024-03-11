// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
var playBtn=document.querySelector('#play-button');

function game_start(){
    location.href="./game.html";
}

playBtn.addEventListener('click',game_start);