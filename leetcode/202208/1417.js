var reformat = function (s) {
  const len = s.length;
  let left = [];
  let right = [];

  for (let i = 0; i < len; i++) {
    const n = s[i].charCodeAt();
    if (n >= 48 && n <= 57) {
      left.push(s[i]);
    } else {
      right.push(s[i]);
    }
  }
  //console.log(left, right)
  if (Math.abs(left.length - right.length) > 1) return '';

  let result = '';
  if (left.length === right.length) {
    while (left.length) {
      result += `${right.pop()}${left.pop()}`;
    }
  } else if (left.length > right.length) {
    result = left.pop();
    while (left.length) {
      result += `${right.pop()}${left.pop()}`;
    }
  } else {
    result = right.pop();
    while (left.length) {
      result += `${left.pop()}${right.pop()}`;
    }
  }

  return result;
};
