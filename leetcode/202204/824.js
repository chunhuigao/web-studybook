var toGoatLatin = function (sentence) {
  const list = sentence.split(' ');
  const check = ['a', 'e', 'i', 'o', 'u'];
  let l = 0;
  let result = [];
  for (let i = 0; i < list.length; i++) {
    l++;
    const s = list[i];
    if (check.includes(s[0].toLocaleLowerCase())) {
      result.push(s + 'ma' + 'a'.repeat(l));
    } else {
      result.push(s.substr(1, s.length) + s[0] + 'ma' + 'a'.repeat(l));
    }
  }
  return result.join(' ');
};
