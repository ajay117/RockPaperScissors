let select = document.querySelector('#times');
let roundToPlay = select.value;
select.addEventListener('change', (e) => {
    roundToPlay = e.target.value;
})
let timesPlayed = 0;
let timesComputerWon = 0,
    timesPlayerWon = 0,
    timesDraw = 0;
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        timesPlayed += 1;
        let playerChoice = e.target.innerText.toLowerCase();
        let computerChoice = computerPlay();
        let result = playRound(playerChoice, computerChoice);
        let computerInfo = document.querySelector('.info-computer');
        let playerInfo = document.querySelector('.info-player');
        let timesDrawInfo = document.querySelector('.info-draw');
        console.log(result);
        if(result.includes('You won')) {
            timesPlayerWon += 1;
            playerInfo.innerText = '';
            playerInfo.innerText += 'Times Player Won: ' + timesPlayerWon;
        } else if(result.includes('You loose')) {
            timesComputerWon += 1;
            computerInfo.innerText = '';
            computerInfo.innerText += 'Times Computer Won: ' + timesComputerWon;
        } else {
            timesDraw += 1;
            timesDrawInfo.innerText = '';
            timesDrawInfo.innerText += 'Times Game Draw: ' + timesDraw;
        }
        let liveInfo = document.querySelector('.live-info');
        let div = document.createElement('div');
        let gameInfo = [playerChoice, result, computerChoice];
        for(let i = 0; i < gameInfo.length; i++) {
            let para = document.createElement('p');
            para.innerText = gameInfo[i][0].toUpperCase() + gameInfo[i].slice(1);
            div.appendChild(para);
        }
        div.classList.add('flex');
        liveInfo.appendChild(div);

        if(timesPlayed == roundToPlay ) {
            buttons.forEach(button => button.disabled = true);
            let gameStatus = document.querySelector('.status');
            let info = document.querySelector('.info');
            let para = document.createElement('p');
            gameStatus.innerText = 'Game Over';
            if(timesPlayerWon > timesComputerWon) {
                para.innerText = 'Final Result: ' + 'Player Won';
                para.style.backgroundColor = 'Green';
                para.style.color = 'white';
                para.style.padding = '10px 20px';
            } else if(timesPlayerWon < timesComputerWon) {
                para.innerText = 'Final Result: ' + 'Computer Won';
                para.style.backgroundColor = 'Red';
                para.style.color = 'white';
                para.style.padding = '10px 20px';
            } else {
                para.innerText = 'Final Result: ' + 'It\'s a Draw';
                para.style.padding = '10px 20px';
                para.style.backgroundColor = 'black';
                para.style.color = 'white';
            }

            info.appendChild(para);
        }
    });

})

function computerPlay() {
    let choices = ['rock', 'paper', 'scissor'];
    let randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playRound(playerSelection, computerSelection) {
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

