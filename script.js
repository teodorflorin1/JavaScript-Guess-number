'use strict';

let secretNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // there is no number
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number';
    displayMessage('No number');
    //player wins
  } else if (guess === secretNumber) {
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.score').textContent = score;
    document.querySelector('body').style.backgroundColor = '#32CD32';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'TOO HIGH' : 'TOO LOW');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('Game Over');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//Play again button

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20);
  document.querySelector('.number').textContent = secretNumber;
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
