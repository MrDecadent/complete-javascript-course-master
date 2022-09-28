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
const player1El = document.querySelector('.player--0');
const player2El = document.querySelector('.player--1');

console.log(player1El, player2El);

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
    player1El.classList.contains('player--active')
      ? (current0El.textContent = currentScore)
      : (current1El.textContent = currentScore);
  } else {
    //是1 清空当前分数 切换玩家
    if (player1El.classList.contains('player--active')) {
      currentScore = 0;
      current0El.textContent = currentScore;
      player1El.classList.remove('player--active');
      player2El.classList.add('player--active');
    } else {
      currentScore = 0;
      current1El.textContent = currentScore;
      player2El.classList.remove('player--active');
      player1El.classList.add('player--active');
    }
  }
});
