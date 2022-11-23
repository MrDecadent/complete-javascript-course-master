// 所有module默认使用严格模式
// Importing module
// import { addToCart, totalPrice as price, tq } from './shoppingCart.js';

/*
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

  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = getLastPost();
console.log(lastPost);

// lastPost.then(last => console.log(last));
// 在domule中 即使不在async function也能使用await
// 但是导入module的脚本需要在module所有执行完成后才能接着执行，包括async await
const lastPost2 = await getLastPost();
console.log(lastPost2);
*/

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shoppingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shoppingCost})`
    );
  };

  const orderStock = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 2);
// ShoppingCart2中只有函数return出来的属性与方法 没有return的相当于私有
console.log(ShoppingCart2);
*/

/*
// CommonJS npm用的多的模块系统
// Export
export.addToCart =  function (product, quantity) {
    cart.push({ product, quantity });
    console.log(
      `${quantity} ${product} added to cart (sipping cost is ${shoppingCost})`
    );
  };
};

// Import
const { addToCart } = require('./shoppingCart.js');
*/
