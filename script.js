let buttons = document.querySelectorAll(".choices");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        console.log("hello");

        playRound(button.id, computerPlay()); //computerPlay needs to be changed

        //function start here
        let pScore = document.querySelector(".player-score").textContent;
        let cScore = document.querySelector(".comp-score").textContent;

        console.log(pScore);

        if (pScore == "5" || cScore == "5") {
            console.log("game is done");

        }

        //new function end here
    });
} );

// computerPlay() - returns 0-2 (R,P,S) using floor
function computerPlay(){

    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

// playRound(playerSelection, computerSelection) - returns string of result
function playRound(playerSelection, computerSelection){

    let result = document.querySelector(".result-text"); //querySelector is faster than getElement

    if (playerSelection === computerSelection){
        result.textContent = "Draw";
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock") 
            result.textContent =  "You Win! Paper beats Rock";
        else if (computerSelection === "scissors")
            result.textContent =  "You Lose! Scissors beats Rock";
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "paper") 
            result.textContent =  "You Win! Scissors beats Paper";
        else if (computerSelection === "rock")
            result.textContent =  "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "scissors") 
            result.textContent =  "You Win! Rock Beats Scissors";
        else if (computerSelection === "paper")
            result.textContent =  "You Lose! Paper Beats Rock";
    }
    
    
}

//game () - 5 round game and report the winner and loser
// keeps score
function game(){

    let player = 0;
    let computer = 0;

    let playerSelection = "wat";
    let computerSelection = null;
    let result = null;

    // for (let i = 0; i < 5; i++){

    //     playerSelection = "empty";

    //     while ( !(playerSelection === "rock" || playerSelection === "scissors" 
    //             || playerSelection === "paper") )    {
    //         let input = prompt("Enter input");
    //         playerSelection = input.toLowerCase();
    //     }

    //     computerSelection = choices[computerPlay()];
    //     result = playRound(playerSelection, computerSelection);

    //     if (result.charAt(4) ==="W") {player++; }
    //     else if (result.charAt(4) === "L") {computer++;}

    //     console.log( result +"\nplayer score: " + player + "\ncomputer score: " + computer); 
    // }


    // //this can be a function
    // if (player > computer) { console.log("Human Wins");}
    // else if (player < computer) { console.log("Computer wins!"); }
    // else { console.log("its a draw")}; //instant return instead of else statement

}

let g = game();



