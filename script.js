let buttons = document.querySelectorAll(".choices");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        console.log("hello");

        console.log(playRound(button.id, computerPlay() )); //computerPlay needs to be changed
    });
} );

// computerPlay() - returns 0-2 (R,P,S) using floor
function computerPlay(){

    const choices = ["rock", "paper", "scissors"];

    return choices[Math.floor(Math.random() * 3)];
}

// playRound(playerSelection, computerSelection) - returns string of result
function playRound(playerSelection, computerSelection){

    if (playerSelection === computerSelection){
        return "Draw";
    }
    else if (playerSelection === "paper"){
        if (computerSelection === "rock") 
            return "You Win! Paper beats Rock";
        else if (computerSelection === "scissors")
            return "You Lose! Scissors beats Rock";
    }
    else if (playerSelection === "scissors"){
        if (computerSelection === "paper") 
            return "You Win! Scissors beats Paper";
        else if (computerSelection === "rock")
            return "You Lose! Rock beats Scissors";
    }
    else if (playerSelection === "rock"){
        if (computerSelection === "scissors") 
            return "You Win! Rock Beats Scissors";
        else if (computerSelection === "paper")
            return "You Lose! Paper Beats Rock";
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



