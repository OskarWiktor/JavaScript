'use strict';

// Selecting elements
const scoreElement1 = document.querySelector('#score--0');
const scoreElement2 = document.getElementById('score--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let currentScoreElement1 = document.getElementById('current--0');
let currentScoreElement2 = document.getElementById('current--1');
const playerElement1 = document.querySelector('.player--0');
const playerElement2 = document.querySelector('.player--1');

let scores, currentScore, activePlayer, playing;

// Starting the game
const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  scoreElement1.textContent = 0;
  scoreElement2.textContent = 0;
  currentScoreElement1 = 0;
  currentScoreElement2 = 0;

  diceElement.classList.add('hidden');
  playerElement1.classList.remove('player--winner');
  playerElement2.classList.remove('player--winner');
  playerElement1.classList.add('player--active');
  playerElement2.classList.remove('player--active');
};
init();

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  playerElement1.classList.toggle('player--active');
  playerElement2.classList.toggle('player--active');
};

// Dice Roll
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1 - 6 dice roll
    const diceRollValue = Math.trunc(Math.random() * 6) + 1;

    //dice img display
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${diceRollValue}.png`;

    // dice roll value !== 1
    if (diceRollValue !== 1) {
      //add dice value to current score
      currentScore += diceRollValue;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
      // dice roll value === 1
    } else {
      // switch to next player
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    // add current score to active player score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;

    //if score >= 100
    if (scores[activePlayer] >= 100) {
      //finish the game
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');

      diceElement.classList.add('hidden');
    }
    switchPlayer();
  }
});

//reseting game
btnNew.addEventListener('click', init);