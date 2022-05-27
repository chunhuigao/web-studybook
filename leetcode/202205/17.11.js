var findClosest = function (words, word1, word2) {
  const len = words.length;
  let left = null;
  let right = null;
  let min = len;
  for (let i = 0; i < len; i++) {
    if (words[i] === word1) {
      left = i;
    }
    if (words[i] === word2) {
      right = i;
    }
    if (left !== null && right !== null) {
      min = Math.min(min, Math.abs(right - left));
    }
  }

  return min;
};
