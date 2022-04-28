var sortArrayByParity = function (A) {
  let l = A.length;
  let left = 0;
  let right = l - 1;
  while (left <= right) {
    if (A[left] % 2 == 0) {
      left++;
    } else if (A[right] % 2 == 1) {
      right--;
    } else {
      let temp = A[left];
      A[left] = A[right];
      A[right] = temp;
      left++;
      right--;
    }
  }
  return A;
};
