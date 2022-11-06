/*Variables*/
let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");


/* Function to randomly return rock, paper or scissors */

function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
// to check random computer choice console.log(getComputerChoice());


/* 1st round of rock, paper scissor */


function win(userChoice, computerChoice) {
    //console.log ("WIN");
    //console.log(userScore);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    //console.log(userChoice);
    //console.log(computerChoice);
    result_p.innerHTML = `You win!! ${userChoice}  beats  ${computerChoice}.`
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow')},1000);
    if(userScore === 5) {
        window.alert("You won!!!!!!, refresh to restart");
    }
}


function lose(userChoice, computerChoice) {
    //console.log ("lose");
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
    result_p.innerHTML = `You lose! ${userChoice}  is defeated by  ${computerChoice}.`
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow')},1000);
    if(computerScore === 5) {
        window.alert("The computer won, refresh to restart");
    }
}


function draw(userChoice, computerChoice) {
    //console.log ("draw");
    result_p.innerHTML = `It's a draw! ${userChoice}  equals  ${computerChoice}.`
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('gray-glow')},1000);
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    //console.log("user choice => " + userChoice);
    //console.log("computer choice =>" + computerChoice);
    switch(userChoice + computerChoice) {
        case "rockpaper":
        case "paperscissor":
        case "scissorrock":
            //console.log("user loses");
            lose(userChoice, computerChoice);
            break;
        case "paperrock":
        case "rockscissor":
        case "scissorpaper":
            //console.log("user wins");
            win(userChoice, computerChoice);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorscissor":
            //console.log("it's a draw")
            draw(userChoice, computerChoice);
            break;
    }
}   
    
    /* Getting user input*/
    /* to try if button was working
    rock_div.addEventListener('click', function() {
        console.log("hey you clicked on rock");
    })
    */

function main() {
    rock_div.addEventListener('click', function() {
        playRound("rock");
    })
    
    paper_div.addEventListener('click', function() {
        playRound("paper");
    })
    
    scissor_div.addEventListener('click', function() {
        playRound("scissor");
    })
}

main();

/*declare a winner when either user or cumputer reach 5*/
