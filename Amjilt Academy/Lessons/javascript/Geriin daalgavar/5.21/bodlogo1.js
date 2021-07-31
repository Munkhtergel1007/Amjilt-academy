let arr = [45, 'hello', true, 'hi', 345, 1, 6, false, 'itsme'];

let i;

console.log(arr);

for (i = 0; i < 10; i ++) {
  if (typeof arr[i] === "string") {
    console.log (arr[i]);
  }
}