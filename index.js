function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    console.log({playerSelection,computerSelection})
    if(playerSelection === 'rock' ) {
        if(computerSelection === 'rock') {
            return 'It\'s a tie.';
        }
        if(computerSelection === 'paper') {
            return 'You loose! Paper beats Rock';
        }
        if(computerSelection === 'scissor') {
            return 'You won! Rock beats Scissor';
        }
    } else if(playerSelection=== 'paper') {
        if(computerSelection === 'rock') {
            return 'You won! Paper beats Rock';
        }
        if(computerSelection === 'paper') {
            return 'It\'s a tie.';
        }
        if(computerSelection === 'scissor') {
            return 'You loose! Scissor beats paper';
        }
    } else if(playerSelection === 'scissor') {
        if(computerSelection === 'rock') {
            return 'You loose! Rock beats Scissor';
        }
        if(computerSelection === 'paper') {
            return 'You win! Scissor beats paper';
        }
        if(computerSelection === 'scissor') return 'It\'s a tie.';
    }else {
        return 'Sorry! Something went wrong';
    } 
}

//play a 5 round game..
function game() {
    let playerTimesWin = 0;
    let computerTimesWin = 0;
    for(let i = 0; i < 5; i++) {
        let playerSelection = prompt('Choose "Rock,Paper or Scissor').toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        if(playerTimesWin !== 3 && computerTimesWin !== 3) {
            if(result.includes('You won')) {
                playerTimesWin += 1;
            } else if(result.includes('You loose')) {
                computerTimesWin += 1
            }
        } else {
            break;
        }
    }
    return (playerTimesWin > computerTimesWin) ? 'You Won!' : 'You Loose';
    return 'It is a Tie!';
}

console.log(game());