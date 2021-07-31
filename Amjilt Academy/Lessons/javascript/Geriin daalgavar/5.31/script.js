var arr = [48, 125, 268, 132, 78];
let brr = []; 
let crr = [];
var i;

function myfunction (arr) {
  for (i = 0; i < arr.length; i ++) {
    if (arr[i] < 50) { 
      brr[i] = arr[i] / 4;
    }
    if (arr[i] >= 50 && arr[i] < 200) {
      brr [i] = arr[i] / 20 * 3;
    }
    if (arr[i] >= 200 ) {
      brr [i] = arr [i] / 10;
    }
  }
  return brr;
}
console.log (myfunction(arr));


function myfunction1 (arr, brr) {
   for (i = 0; i < arr.length; i ++) {
     crr[i] = arr [i] + brr [i];
   }
   return crr;
}
console.log (myfunction1 (arr, brr));

let myobject = {
  ugugdul : arr,
  gariinmungu : brr,
  niit : crr,
}
console.log (myobject);

