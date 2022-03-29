var maxConsecutiveAnswers = function (answerKey, k) {
  const len = answerKey.length;
  let current = '';
  let t = k;
  let tMax = 0;
  for (let i = 0; i < len; i++) {
    if (answerKey[i] === 'T') {
      if (t === 0) {
        const idx = current.indexOf('T');
        current = current.substring(idx + 1);
      } else {
        t--;
      }
      current += 'T';
    } else {
      current += 'F';
    }
    tMax = Math.max(tMax, current.length);
  }

  tMax = Math.max(tMax, current.length);

  let f = k;
  let fMax = 0;
  current = '';
  for (let i = 0; i < len; i++) {
    if (answerKey[i] === 'F') {
      if (f === 0) {
        const idx = current.indexOf('F');
        current = current.substring(idx + 1);
      } else {
        f--;
      }
      current += 'F';
    } else {
      current += 'T';
    }
    fMax = Math.max(fMax, current.length);
  }
  fMax = Math.max(fMax, current.length);

  return Math.max(tMax, fMax);
};
