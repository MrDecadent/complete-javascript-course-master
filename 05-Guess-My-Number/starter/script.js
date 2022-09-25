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

//给check元素中添加了一个点击事件和一个匿名函数
document.querySelector('.check').addEventListener('click', function () {
  //前端传过来的内容会变成string 需要转成number
  const guess = Number(document.querySelector('.guess').value);

  console.log(guess);

  //没有输入值
  if (!guess) {
    document.querySelector('.message').textContent = '⛔  No number!';
  }
});
