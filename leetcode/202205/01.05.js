var oneEditAway = function (first, second) {
  let index1 = 0;
  let index2 = 0;
  let num = 0;
  while (first[index1] || second[index2]) {
    if (first[index1] === second[index2]) {
      index1++;
      index2++;
    } else if (first[index1 + 1] === second[index2]) {
      index1++;
      num++;
    } else if (first[index1] === second[index2 + 1]) {
      index2++;
      num++;
    } else {
      if (num === 0) {
        index1++;
        index2++;
        num++;
      } else {
        return false;
      }
    }
  }
  return num < 2;
};
