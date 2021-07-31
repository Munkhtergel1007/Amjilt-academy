let i, x;
let arr;

arr = [];

for (i = 0; i < 10; i ++) {
  x = parseInt(prompt(i + 1 + ' deh toogoo oruulna uu'));
  arr[i] = x;
}

k = arr[0];

for (i = 1; i < 10; i ++) {
  if (arr [i] > k) {
    k = arr [i];
  }
}

console.log (k);

