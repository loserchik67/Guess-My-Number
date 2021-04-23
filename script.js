'use strict';
//example stuff
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'Correct Number!';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// const secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;
let highScore = 0;

//replay reset changed items
document.querySelector('.again').addEventListener('click', function () {
  console.log('button clicked');
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = secretNumber;
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
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.guess').value = '';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Guessed Number!';

    //when player wins
  } else if (guess === secretNumber) {
    //set highscore
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundImage =
      'linear-gradient(to bottom right, #ff99ff, #00e6b8)';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.again').style.color = '#a366ff';
    document.querySelector('.number').style.color = '#a366ff';
    document.querySelector('.check').style.color = '#a366ff';

    //when guess is too low
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
      document.querySelector('.score').textContent = 0;
    }
  }
});
