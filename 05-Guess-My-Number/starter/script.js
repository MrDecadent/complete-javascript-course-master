'use strict';

/*
//拿到class为'message'的文本内容
console.log(document.querySelector('.message').textContent);
//改变文本内容
document.querySelector('.message').textContent = '🎉Correct Number';

document.querySelector('.number').textContent = '11';

document.querySelector('.score').textContent = '114';

document.querySelector('.highscore').textContent = '514';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

//设定一个秘密数字
const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = document.querySelector('.score').textContent;

//给check元素中添加了一个点击事件和一个匿名函数
document.querySelector('.check').addEventListener('click', function () {
  //前端传过来的内容会变成string 需要转成number
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  if (!guess) {
    //没有输入值
    document.querySelector('.message').textContent = '⛔  No number!';
  } else if (score > 0) {
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = '🎉Correct Number';
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = '📈Too high';
      document.querySelector('.score').textContent = --score;
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = '📉Too low';
      document.querySelector('.score').textContent = --score;
    }
  } else {
    document.querySelector('.message').textContent = '💥 You lost the game!';
  }
});
