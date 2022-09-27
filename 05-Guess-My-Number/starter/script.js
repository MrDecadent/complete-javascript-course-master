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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('secretNumber:' + secretNumber);
let score = document.querySelector('.score').textContent;
//最高分数
let highScore = document.querySelector('.highscore').textContent;
//改变class为'message'的文本内容
const displayMessage = message => {
  document.querySelector('.message').textContent = message;
};
//改变class为'score'的文本内容
const displayScore = message => {
  document.querySelector('.score').textContent = message;
};

//给check元素中添加了一个点击事件和一个匿名函数
document.querySelector('.check').addEventListener('click', function () {
  //前端传过来的内容会变成string 需要转成number
  const guess = Number(document.querySelector('.guess').value);

  // console.log(guess);

  if (!guess) {
    //没有输入值
    // document.querySelector('.message').textContent = '⛔  No number!';
    displayMessage('⛔  No number!');
  } else if (score > 0) {
    if (guess === secretNumber) {
      //猜中数字 赢得比赛
      // document.querySelector('.message').textContent = '🎉Correct Number';
      displayMessage('🎉Correct Number');
      //显示数字
      document.querySelector('.number').textContent = secretNumber;
      //改变背景颜色
      document.querySelector('body').style.backgroundColor = '#60B347';
      //改变宽度
      document.querySelector('.number').style.width = '30rem';
      //记录最高分数
      // document.querySelector('.highscore').textContent =
      //   highScore < score ? score : highScore;
      // highScore = document.querySelector('.highscore').textContent;
      highScore = highScore < score ? score : highScore;
      document.querySelector('.highscore').textContent = highScore;
    } else {
      //猜的数字大或小
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too high' : '📉Too low';
      displayMessage(guess > secretNumber ? '📈Too high' : '📉Too low');
      // document.querySelector('.score').textContent = --score;
      displayScore(--score);
    }
  } else {
    // document.querySelector('.message').textContent = '💥 You lost the game!';
    displayMessage('💥 You lost the game!');
    // document.querySelector('.score').textContent = 0;
    displayScore(0);
  }
});

//Again重置
document.querySelector('.again').addEventListener('click', function () {
  //重置输入框
  document.querySelector('.guess').value = '';
  //重置文字
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //重置正确数字显示
  document.querySelector('.number').textContent = '?';
  //重置正确数字
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log('secretNumber:' + secretNumber);
  //重置分数
  score = 20;
  // document.querySelector('.score').textContent = score;
  displayScore(score);
  //改变背景颜色
  document.querySelector('body').style.backgroundColor = '#222';
  //改变宽度
  document.querySelector('.number').style.width = '15rem';
});
