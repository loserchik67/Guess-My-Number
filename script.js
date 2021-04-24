'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
//document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.guess').value = '';

//replay reset changed items
document.querySelector('.again').addEventListener('click', function () {
  console.log('button clicked');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  score = 20;
  document.querySelector('.score').textContent = score;
  //remove background gradient and change colors back to originals
  //document.querySelector('body').style.backgroundColor = '#222'   ended up just removing the gradient image instead of changing bg color
  //kept that line in here to show that i can change this too;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.again').style.color = '#222';
  document.querySelector('.number').style.color = '#222';
  document.querySelector('.check').style.color = '#222';
  document.querySelector('body').style.backgroundImage = '';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    displayMessage('No Guessed Number!');

    //when player wins
  } else if (guess === secretNumber) {
    //set highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    //display the number
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct Number!');
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to bottom right, #ff99ff, #00e6b8)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.again').style.color = '#a366ff';
    document.querySelector('.number').style.color = '#a366ff';
    document.querySelector('.check').style.color = '#a366ff';

    //when guess is too low
  } else if (guess !== secretNumber) {
    displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low');
    if (score > 1) {
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
