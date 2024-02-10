const obj = { a: 1, b: 2, c: 3 };
const { b, ...rest } = obj;
const value = Object.values(rest).reduce((acc, item) => acc + item, 0);
console.log(value);
