// 所有module默认使用严格模式
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

console.log('Importing module');

// addToCart('bread', 5);
// console.log(price, tq);

// 导入全部变量
// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.totalPrice);

// 导入默认
import add, { cart } from './shoppingCart.js';
// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js'; // 可以但是不推荐
add('pizza', 2);
add('bread', 5);
add('apple', 4);
// 导入module的文件里的操作会影响被导入的module里面的值
console.log(cart);

// console.log('Start fetching');
// const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// const data = await res.json();
// console.log(data);
// console.log('Something');

const getLastPost = async function () {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  console.log(data);

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);
