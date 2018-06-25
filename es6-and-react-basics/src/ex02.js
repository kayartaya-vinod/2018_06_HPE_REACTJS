let square = num => num * num;

let x = 14;
let y = square(x);

console.log('x = %d', x);
console.log('y = %d', y);

let nums = [2, 3, 34, 56, 78, 90];
let cube_nums = nums.map(num => num * num * num);
let even_nums = nums.filter(num => num % 2 === 0);
let index = nums.findIndex(num => num === 56);

console.log(nums);
console.log(cube_nums);
console.log(even_nums);
console.log('56 is found at index', index);