'use strict';

//拿到class为'message'的文本内容
console.log(document.querySelector('.message').textContent);
//改变文本内容
document.querySelector('.message').textContent = '🎉Correct Number';

document.querySelector('.number').textContent = '11';

document.querySelector('.score').textContent = '114';

document.querySelector('.highscore').textContent = '514';

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
