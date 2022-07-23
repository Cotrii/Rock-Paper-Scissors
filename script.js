let buttons = document.querySelectorAll(".choices");

buttons.forEach((button) => {
    button.addEventListener("click", () => {

        playRound(button.id, computerPlay()); //computerPlay needs to be changed

        //function start here
        let pScoreText = document.querySelector(".player-score");
        let cScoreText = document.querySelector(".comp-score");

        let textResult = document.querySelector(".result-text").textContent;


        let temp;

        if (textResult.charAt(4) ==="W") { 
            temp = parseInt(pScoreText.textContent) + 1; 
            pScoreText.textContent = temp.toString();

            let curr = document.querySelector(".iconify");
            curr.setAttribute("data-icon", "bi:emoji-laughing");
            
        }
        else if (textResult.charAt(4) === "L") {
            temp = parseInt(cScoreText.textContent) + 1; 
            cScoreText.textContent = temp.toString();

            let curr = document.querySelector(".iconify");
            curr.setAttribute("data-icon", "bi:emoji-neutral");
        }


        if (pScoreText.textContent == "5" || cScoreText.textContent == "5") {
            // alert("game is done");

            let result = document.querySelector(".result-container");

            let curr = document.querySelector(".iconify");
            

            const elem = document.createElement("span");

            elem.style.fontSize = "36px";

            if (pScoreText.textContent == "5") { 
                elem.textContent = "Human wins!";
                curr.setAttribute("data-icon", "bi:emoji-laughing");
                elem.style.color = "#4B6788";
            }
            else { 
                elem.textContent = "Computer wins!"; 
                curr.setAttribute("data-icon", "bi:emoji-neutral");
                elem.style.color = "#C51F5D";
            }

            result.appendChild(elem);

            //change image to win/lose 

            disableButtons();

        }

        //new function end here
    });
} );


function disableButtons() {
    buttons.forEach((button) => {

        if (button instanceof HTMLButtonElement){
            button.disabled = true;
        }
    });
}

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



