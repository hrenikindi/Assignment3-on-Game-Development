// Iteration 8: Making scoreboard functional
let game_board = document.getElementById('score-board');
let finalscore = localStorage.getItem('score');
game_board.innerText = finalscore;

var restart = document.getElementById('play-again-button');
restart.onclick = function(){
   location.href = "./game.html"
}
