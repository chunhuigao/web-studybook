var card = '1 4 3 4 5';
var color = 'r y b b r';

var card = '1 2 3 3 5 5';
var color = 'a b b c b a';

const testList = [
  ['1 4 3 4 5', 'r y b b r'],
  ['1 2 3 3 5 5', 'a b b c b a'],
];

testList.forEach((v) => {
  start(v.map((v) => v.split(' ')));
});
function start([card, color]) {
  const cardMap = new Map();

  for (let i = 0; i < card.length; i++) {
    const c = `${card[i]}`;
    const cards = cardMap.get(c);
    const value = `${color[i]}`;
    if (cards) {
      cards.push(value);
    } else {
      cardMap.set(c, [value]);
    }
  }

  const colorMap = new Map();
  for (let i = 0; i < color.length; i++) {
    const c = color[i];
    const colors = colorMap.get(c);
    const value = `${i},${card[i]}`;
    if (colors) {
      colors.push(value);
    } else {
      colorMap.set(c, [value]);
    }
  }

  let result = -1;
  for (let i = 0; i < card.length; i++) {
    dfs(i, []);
  }
  console.log(result);

  function dfs(idx, path) {
    result = Math.max(result, path.length);
    if (path.includes(idx)) return;

    path.push(idx);
    const currentCard = card[idx];
    const array = cardMap.get(currentCard);
    for (let i = 0; i < array.length; i++) {
      const k = array[i];
      for (let j = 0; j < (colorMap.get(k) || []).length; j++) {
        const [index, num] = colorMap.get(k)[j].split(',');

        dfs(Number(index), path);
      }
    }
  }
}
