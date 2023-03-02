'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);

    // win
    if ( guess === secretNumber) {
        document.querySelector('.number').textContent = secretNumber;
        displayMessage('Correct Number! Click Again To Reset The Game');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if(score > highscore) {
            highscore= score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    // no input
    } else if(!guess) {
        displayMessage('No Number!');
        document.querySelector('body').style.backgroundColor = 'red';

    //when guess is wrong
    } else if (guess !== secretNumber) {
        score--;
        document.querySelector('.score').textContent = score;
        displayMessage(guess > secretNumber ? 'Number Is Too High' : 'Number Is Too Low')
        if ( score < 1) {
            displayMessage('You lost the game. Click Again to Reset The Game')
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.score').textContent = 0;
        } 
    }
});

document.querySelector('.again').addEventListener('click', function() {
    secretNumber = Math.trunc(Math.random()*20)+1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.number').textContent = '?';
    displayMessage('Start guessing...');
    document.querySelector('.guess').value = '';
})
