let i, x;
let arr;

arr = [];

for (i = 0; i < 10; i ++) {
  x = parseInt(prompt(i + 1 + ' deh toogoo oruulna uu'));
  arr[i] = x;
}

x = 0;

for (i = 0; i < 10; i ++) {
  x = x + arr[i];
}
console.log (x);
