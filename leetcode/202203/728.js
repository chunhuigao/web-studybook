var selfDividingNumbers = function (left, right) {
  let arr = [];
  for (let i = left; i <= right; i++) {
    index = i + '';
    let l = index.length;
    let sign = true;
    for (let k = 0; k < l; k++) {
      if (i % index[k] != 0) {
        sign = false;
      }
    }
    if (sign) {
      arr.push(i);
    }
  }
  return arr;
};
