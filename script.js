const buttons = document.querySelectorAll('.pick');
const scoreEl = document.getElementById('score');
const main = document.getElementById('main');
const selection = document.getElementById('selection');
const reset = document.getElementById('reset')

const choices = ['paper', 'rock', 'scissors'];

let score = 0;
let userChoice = undefined;

buttons.forEach((button) => {
    button.id
    button.addEventListener('click', () => {
        userChoice = button.getAttribute('data-choice');
        
        checkWinner();
    })
})

reset.addEventListener('click', () => {
    main.style.display = 'flex';
    selection.style.display = 'none'; 
})

function checkWinner() {
    const computerChoice = pickRandomChoice();

    if (userChoice === computerChoice) {
        //DRAW
    } else if (userChoice === 'paper' && computerChoice === 'rock' || userChoice === 'rock' && computerChoice === 'scissors' || userChoice === 'scissors' && computerChoice === 'paper') {
        updateScore(1);
    } else {
        updateScore(-1);
    }

    main.style.display = 'none';
    selection.style.display = 'flex';
}


function updateScore(value) {
    score += value;

    scoreEl.innerText = score;
}

function pickRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
    ;
}

