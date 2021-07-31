function selectionSort (arr) {

  for (let i = 0; i < arr.length; i ++) {
    let lowest = i;
    for (let j = i + 1; j < arr.length; j --) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }
    let temp = arr[i];
    arr[i] = arr[lowest];
    arr[lowest] = temp;
  }

  return arr;
}

let result = selectionSort([34, 12, 1, 2, 78, 12]);
console.log (result); 