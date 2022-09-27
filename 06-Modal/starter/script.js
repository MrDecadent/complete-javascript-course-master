'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
//有三个相同class的button 所以需要querySelectorAll
const btnsShowModal = document.querySelectorAll('.show-modal');

const removeHidden = () => {
  //把modal中的hidden元素删除
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const addHidden = () => {
  //点击modal的关闭按钮时，为modal添加hidden属性
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  btnsShowModal[i].addEventListener('click', removeHidden);
}

//这里调用函数不要加括号 加了等于js一开始就执行
btnCloseModal.addEventListener('click', addHidden);

overlay.addEventListener('click', addHidden);
