function bubbleSort(arr) {
  let noChange;
  for (let i = arr.length; i > 0; i --) {
    noChange = true;
    for (let j = 0; j < i - 1; j ++) {
      console.log(arr);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noChange = false;
      }
    }
    if (noChange) {
      break;  
    }
  }
  return arr;
}

let result = bubbleSort([34, 12, 1, 2, 78, 12]);
console.log (result);