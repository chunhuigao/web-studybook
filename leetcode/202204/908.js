function mack(list, n) {
  let array = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i] < n) {
      array.push(i);
    }
  }
  console.log('array', array);
}

var list = [1, 4, 5, 0, 7, 8, 2],
  n = 3;

const aa = mack(list, n);
