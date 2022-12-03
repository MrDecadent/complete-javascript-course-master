'strict mode';

const budget = [
  { value: 250, description: 'Sold old TV 📺', user: 'jonas' },
  { value: -45, description: 'Groceries 🥑', user: 'jonas' },
  { value: 3500, description: 'Monthly salary 👩‍💻', user: 'jonas' },
  { value: 300, description: 'Freelancing 👩‍💻', user: 'jonas' },
  { value: -1100, description: 'New iPhone 📱', user: 'jonas' },
  { value: -20, description: 'Candy 🍭', user: 'matilda' },
  { value: -125, description: 'Toys 🚂', user: 'matilda' },
  { value: -1800, description: 'New Laptop 💻', user: 'jonas' },
];

// freeze 冻结对象 无法添加新的元素
const spendingLimits = Object.freeze({
  jonas: 1500,
  matilda: 100,
});

const getLimist = (limits, user) => limits?.[user] ?? 0;

const addExpense = function (
  state,
  limits,
  value,
  description,
  user = 'jonas'
) {
  // if (!user) user = 'jonas';
  const cleanUser = user.toLowerCase();

  // 2.1 Origin Code
  // let lim;
  // if (spendingLimits[user]) {
  //   lim = spendingLimits[user];
  // } else {
  //   lim = 0;
  // }

  // 2.2 三目运算符
  // let limit = spendingLimits[user] === null ? spendingLimits[user] : 0;

  // 2.3
  // const limit = spendingLimits?.[user] ?? 0;

  // 2.4 使用函数
  const limit = getLimist(limits, cleanUser);

  if (value <= limit) {
    // 3.1 Origin Code
    // budget.push({ value: -value, description: description, user: user });
    // 3.2 变量名与参数名一致情况下可以省略
    // budget.push({ value: -value, description, user: cleanUser });

    return [...state, { value: -value, description, user: cleanUser }];
  }
  return state;
};
const newBudget1 = addExpense(budget, spendingLimits, 10, 'Pizza 🍕');
const newBudget2 = addExpense(
  newBudget1,
  spendingLimits,
  100,
  'Going to movies 🍿',
  'Matilda'
);
const newBudget3 = addExpense(newBudget2, spendingLimits, 200, 'Stuff', 'Jay');

const checkExpense = function (state, limits) {
  return state.map(entry => {
    const limit = getLimist(limits, entry.user);
    return entry.value < -limit ? { ...entry, flag: 'limit' } : entry;
  });
  // for (const entry of newBudget3) {
  //   // let lim;
  //   // if (spendingLimits[entry.user]) {
  //   //   lim = spendingLimits[entry.user];
  //   // } else {
  //   //   lim = 0;
  //   // }

  //   const limit = getLimist(limits, entry.user);

  //   if (entry.value < -limit) {
  //     entry.flag = 'limit';
  //   }
  // }
};
const finalBudget = checkExpense(newBudget3, spendingLimits);

console.log(finalBudget);

const logBigExpenses = function (limit) {
  let output = '';
  for (const entry of budget) {
    // 4.2
    // if (entry.value <= -limit) {
    //   // 4.1
    //   // output += entry.description.slice(-2) + ' / '; // Emojis are 2 chars
    //   output += `${entry.description.slice(-2)} / `;
    // }

    output += entry.value <= -limit ? `${entry.description.slice(-2)} / ` : '';
  }
  output = output.slice(0, -2); // Remove last '/ '
  console.log(output);
};

logBigExpenses(50);
