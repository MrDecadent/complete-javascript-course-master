'use strict';
//#为id选择 .为class选择
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');

let currentScore = 0;

score0El.textContent = 0;
score1El.textContent = 0;
//隐藏骰子
diceEl.classList.add('hidden');

//投骰子按钮事件
btnRoll.addEventListener('click', function () {
  //1.随机生成一个骰子
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.显示骰子,通过改变src随机显示
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.判断数字是否非1
  if (dice !== 1) {
    //累计分数
    currentScore += dice;
    current0El.textContent = currentScore;
  } else {
    //是1 切换玩家
  }
});
