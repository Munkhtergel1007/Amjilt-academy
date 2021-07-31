
const insertionSort = arr => {
  for (let i = 1; i < arr.length; i ++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
        arr[j + 1] = arr[j];
        console.log (arr);
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

var insertion = insertionSort([34, 12, 1, 2, 78, 12]);
console.log (insertion);