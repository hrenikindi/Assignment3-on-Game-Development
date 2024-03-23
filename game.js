// Iteration 2: Generating two random numbers (0 to 100) and displaying the same in the game.html
let number1 = document.getElementById('number1');
let number2 = document.getElementById('number2');
var num_1 = Math.round(Math.random() * 100);
var num_2 = Math.round(Math.random() * 100);

// Iteration 3: Creating variables required to make the game functional
let add=document.getElementById('plus');
let sub=document.getElementById('minus');
let multiply=document.getElementById('mul');
let div=document.getElementById('divide');
let mod=document.getElementById('modulus');
var operators;
var finalValue;
let score = 0;
// Iteration 4: Creating a variable for number 3 and a variable for storing the html element with the Id "number3"
let num_3=document.getElementById('number3');
// Iteration 5: Creating a randomise function to make the game functional
function randomise(){
    num_1 = Math.round(Math.random() * 100);
    num_2 = Math.round(Math.random() * 100);
    operators = Math.round(Math.random()*5);
    switch(operators){
        case 1:
            finalValue = num_1+num_2;
            break;
        case 2:
            finalValue = num_1-num_2;
            break;
        case 3:
            finalValue = num_1*num_2;
            break;
        case 4:
            finalValue = Math.floor(num_1/num_2);
        case 5:
            finalValue = num_1 % num_2
            break;
        default:
            randomise();
    }

    number1.innerHTML=num_1;
    number2.innerHTML=num_2;
    num_3.innerHTML=finalValue;
}
randomise();
// Iteration 6: Making the Operators (button) functional
add.addEventListener("click", function(){
    if(num_1+num_2===finalValue){
        score++;
        randomise();
        restartTimer(timer_Id);
    }else{
        location.href = "gameover.html?score=" + score;
        localStorage.setItem("score",score)
    }

});
sub.addEventListener("click", function(){
    if(num_1-num_2===finalValue){
        score++;
        randomise();
        restartTimer(timer_Id);
    }else{
        location.href = "gameover.html?score=" + score;
        localStorage.setItem("score",score)
    }

});
multiply.addEventListener("click", function(){
    if(num_1*num_2===finalValue){
        score++;
        randomise();
        restartTimer(timer_Id);
    }else{
        location.href = "gameover.html?score=" + score;
        localStorage.setItem("score",score)
    }
});
div.addEventListener( "click" , function(){
    if(num_2 === 0){
        console.log( "Cannot divide by zero!" );
    }
    else if(num_1/num_2===finalValue){
        score++;
        randomise();
        restartTimer(timer_Id);
    }else{
        location.href = "gameover.html?score=" + score;
        localStorage.setItem("score",score)
    }
});
mod.addEventListener("click", function(){
    if(num_1%num_2===finalValue){
        score++;
        randomise();
        restartTimer(timer_Id);
    }else{
        location.href = "gameover.html?score=" + score;
        localStorage.setItem("score",score)
    }
});

// Iteration 7: Making Timer functional
var time = 20;
var timer_Id;

function gameTimer() {
  initialTime = 20;
  timer.innerHTML = time;
  timer_Id = setInterval(() => {
    initialTime--;
    if (initialTime == 0){
        location.href = "gameover.html?score=" + score;
        localStorage.setItem("score",score)
    }    
    timer.innerHTML = initialTime;
  }, 1000);
}

function restartTimer(intervals) {
  clearTimer(intervals);
  gameTimer();
}

gameTimer();
