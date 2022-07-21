function start(str, a, b) {
  const words = str.trim().split(' ');
  const start = Number(a);
  const end = Number(b);

  let i = 0;
  let j = end < words.length ? end : words.length - 1;
  const list = [];
  let result = 'EMPTY';
  if (start >= 0 && end > 0 && start < end && start < words.length) {
    while (i < words.length) {
      if (i < start || i > end) {
        list.push(words[i++]);
      } else if (i >= start && i <= end) {
        list.push(words[j--]);
        i++;
      }
    }
    result = list.join(' ');
  }
  console.log('result', result);
}

const testList = [
  ['I am a developer.', '0', '3'],
  ['I am a developer.', '1', '2'],
  [' hello world!', '0', '3'],
];
testList.forEach((v) => {
  const [s1, s2, s3] = v;
  start(s1, s2, s3);
});
