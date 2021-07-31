 var i, j, k, m;
var arr, brr, x;

arr = [];
brr = [];

for (i = 0; i < 10; i ++) {
  x = parseInt(prompt(i + 1 + ' deh toogoo oruulna uu'));
  arr[i] = x;
}
console.log (arr);

function Myfunction (arr){
  k = 0;
  m = 0;
  for (i = 0; i < 10; i ++) {
    for (j = 0; j < 10; i ++) {
        if (arr[i] > arr[j]) {
          k ++;
        }
        if (arr[i] == arr[j]) {
          m ++;
        }
    }
  }
  return arr;
} 

Myfunction (arr);
