let i, j, k, m;
let arr, brr, x;

arr = [];
brr = [];

for (i = 0; i < 10; i ++) {
  x = parseInt(prompt(i + 1 + ' deh toogoo oruulna uu'));
  arr[i] = x;
}

x = parseInt(prompt('Niilber boloh toog oruulna uu'));


for (i = 0; i < 10; i ++) {
  for (j = i + 1; j < 10; j ++) {
    if (arr [i] + arr[j] == x) {
      brr.push(i);
      brr.push(j);
    }
  }
}


k = brr.length;
m = 1;

console.log (arr);
console.log (brr);

if (k == 0) {
  console.log('harui alga');
} else {
  for (i = 0; i < k; i = i + 2) {
    console.log (m + ' deh bolomj ' + '['  + brr[i] + ' ' + brr [ i + 1] + ']');
    m ++;
  }
}