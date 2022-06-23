var findSubstring = function (s, words) {
  let len = 0;
  let obj = {};
  let result = [];

  words.forEach((element) => {
    len += element.length;
    if (obj[element] == undefined) {
      obj[element] = 1;
    } else {
      obj[element] += 1;
    }
  });

  if (len == 0) return result;
  let l = words[0].length;
  for (let i = 0; i < s.length - len + 1; i++) {
    let temp = s.substr(i, len);
    // console.log(helper(temp));
    if (helper(temp)) {
      result.push(i);
    }
  }
  return result;
  function helper(s) {
    let len = s.length;
    let map = JSON.parse(JSON.stringify(obj));
    for (let i = 0; i < len - l + 1; i += l) {
      let temp = s.substr(i, l);
      if (map[temp] == undefined || map[temp] == 0) {
        return false;
      } else {
        map[temp] -= 1;
      }
    }
    return true;
  }
};
