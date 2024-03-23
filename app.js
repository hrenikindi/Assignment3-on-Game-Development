// Iteration 1: Making the play button in the index.html functional.
// Description: When the play button is clicked the game.html page should be opened
var gameStatrBtn=document.querySelector('#play-button');

function game_start(){
    location.href="./game.html";
}

gameStatrBtn.addEventListener('click',game_start);
