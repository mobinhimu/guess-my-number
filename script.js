const form = document.querySelector('form');
const guessNumber = document.querySelector('.guess-number');
let input = document.querySelector('.input [type=number]');
const outputResult = document.querySelector('.output-result');
const again = document.querySelector('.again');
const score = document.querySelector('.score');
const highScore = document.querySelector('.high-score');
let randomNumber = Math.trunc(Math.random() * 20) + 1;

let counter = 20;
let prevNumber = 0;
function message(message) {
  outputResult.textContent = message;
}
form.addEventListener('submit', eve => {
  eve.preventDefault();
  let inputValue = Number(input.value);
  if (!inputValue) {
    message('⛔ Not a number !');
  } else if (inputValue === randomNumber) {
    if (counter > 1) {
      message('🏆 You Have Won !');
      guessNumber.textContent = randomNumber;
      counter--;
      score.textContent = counter;
      document.querySelector('body').style.backgroundColor = '#58BE3B';
      if (counter > prevNumber) {
        prevNumber = counter;
      }
      highScore.textContent = prevNumber;
    } else {
      message('🔥 Lost The Game!');
      score.textContent = '0';
    }
  } else if (inputValue !== randomNumber) {
    if (counter > 1) {
      message(
        inputValue > randomNumber ? '📈 Number is high!' : '📉 Number is low'
      );
      counter--;
      score.textContent = counter;
    } else {
      message('🔥 Lost The Game!');
      score.textContent = '0';
    }
  }
  input.value = '';
});

again.addEventListener('click', () => {
  counter = 20;
  score.textContent = counter;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  guessNumber.textContent = '?';
  message('Start guessing ....');
  document.querySelector('body').style.backgroundColor = '#222';
  input.value = '';
});
