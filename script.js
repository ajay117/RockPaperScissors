function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissor'];
    let randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = computerSelection.toLowerCase();
  console.log(playerSelection,computerSelection);
  //Player selection will be rock, paper or scissor
  if(playerSelection == 'rock') {
    if(computerSelection == 'rock') {
        return 'It is a Tie.';
    } else if(computerSelection == 'paper') {
        return 'You Lose.'
    } else {
        return 'You Win.'
    }
  } else if(playerSelection == 'paper') {
    if(computerSelection == 'rock') {
        return 'You Win.';
    } else if(computerSelection == 'paper') {
        return 'It is a Tie.';
    } else {
        return  'You Lose.';
    }
  } else {
    if(computerSelection == 'rock') {
        return 'You Lose.';
    } else if(computerSelection == 'paper') {
        return 'You Win.';
    } else {
        return  'It is a Tie.';
    }
  }
}

function game(times) {
  let playerWinTimes = 0;
  let computerWinTimes = 0;
  for(let i = 0; i < times; i++) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Choose 'Rock', 'Paper' or 'Scissor'.");
    let result = playRound(playerSelection,computerSelection);
    if(result == 'You Win.') {
        playerWinTimes += 1;
    } else if(result == 'You Lose.') {
        computerWinTimes += 1;
    }
  }
  if(playerWinTimes > computerWinTimes) {
      return 'You win.';
  } else {
      return 'You Lose.';
  }
}

console.log(game(5));
