const testList = [
  '3 4 256 257 258 259 260 261 262 263 264 265',
  '1 4 256 257 258 259 260 261 262 263 264 265',
];

testList.forEach((v) => {
  start(v.split(' '));
});

function start(list) {
  const c = Number(list[0]);
  const b = Number(list[1]);
  const map = {};
  for (let i = 2; i < list.length; i++) {
    let n = Number(list[i]);
    let sum = 0;
    while (n > 0) {
      sum = sum + (n & 0xff);
      n = n >> 8;
    }
    const oxr = sum % b;
    if (oxr < c) {
      map[oxr] = (map[oxr] || 0) + 1;
    }
  }
  let result = -1;
  Object.keys(map).forEach((k) => {
    result = Math.max(result, map[k]);
  });
  console.log(result);
}
