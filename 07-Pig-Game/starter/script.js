'use strict';
//#为id选择 .为class选择
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
// const current0El = document.getElementById('current--0');
// const current1El = document.getElementById('current--1');
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');

console.log(player0El, player1El);

let currentScore = 0;
//当前玩家
let activePlayer = 0;

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
    // player1El.classList.contains('player--active')
    //   ? (current0El.textContent = currentScore)
    //   : (current1El.textContent = currentScore);
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //是1 清空当前分数 切换玩家
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    activePlayer = activePlayer === 1 ? 0 : 1;
    //toggle 有的时候删除 没的时候添加
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');

    // if (player1El.classList.contains('player--active')) {
    //   currentScore = 0;
    //   current0El.textContent = currentScore;
    //   player1El.classList.remove('player--active');
    //   player2El.classList.add('player--active');
    // } else {
    //   currentScore = 0;
    //   current1El.textContent = currentScore;
    //   player2El.classList.remove('player--active');
    //   player1El.classList.add('player--active');
    // }
  }
});

//Hold按钮事件
btnHold.addEventListener('click', function () {
  //防止误触
  if (currentScore !== 0) {
    //1.累加分数
    document.getElementById(`score--${activePlayer}`).textContent =
      currentScore +
      Number(document.getElementById(`score--${activePlayer}`).textContent);
    //2.当前分数清零
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    //3.切换玩家
    activePlayer = activePlayer === 1 ? 0 : 1;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }

  // if (player0El.classList.contains('player--active')) {
  //   score0El.textContent = currentScore + score0;
  //   currentScore = 0;
  //   player0El.classList.remove('player--active');
  //   player1El.classList.add('player--active');
  // } else {
  //   score1El.textContent = currentScore + score1;
  //   currentScore = 0;
  //   player1El.classList.remove('player--active');
  //   player0El.classList.add('player--active');
  // }
});
