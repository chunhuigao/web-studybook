function stringUncode(s) {
  const list = [1, 2, 4];
  for (let i = 3; i < s.length; i++) {
    list[i] = list[i - 1] + list[i - 2] + list[i - 3];
  }
  let result = '';
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    const n = (code(c) + list[i]) % 26;

    result += String.fromCharCode(n + 'a'.charCodeAt());
  }
  console.log(result);
  function code(s) {
    return s.charCodeAt() - 'a'.charCodeAt();
  }
}

const testList = ['abcde', 'xy'];
testList.forEach((v) => {
  stringUncode(v);
});
