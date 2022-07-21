function start(VLAN, remove) {
  const list = VLAN.split(',');
  const vlans = [];
  for (let i = 0; i < list.length; i++) {
    const s = list[i];
    if (s.includes('-')) {
      const [a, b] = s.split('-');
      vlans.push([Number(a), Number(b)]);
    } else {
      vlans.push([Number(s), Number(s)]);
    }
  }
  vlans.sort((a, b) => {
    return a[0] - b[0];
  });
  let result = [];
  for (let i = 0; i < vlans.length; i++) {
    const [a, b] = vlans[i];
    const r = Number(remove);
    if (a === b) {
      if (a === r) continue;
      result.push(a);
    } else {
      if (a === r) {
        if (a + 1 === b) {
          result.push(b);
        } else {
          result.push([a + 1, b]);
        }
      } else if (b === r) {
        if (b - 1 === a) {
          result.push(b);
        } else {
          result.push([a, b - 1]);
        }
      } else if (r > a && r < b) {
        result.push([a, r - 1], [r + 1, b]);
      } else {
        result.push([a, b]);
      }
    }
  }
  result = result.map((v) => {
    if (typeof v === 'number') {
      return String(v);
    } else {
      const [a, b] = v;
      if (a === b) {
        return String(a);
      } else {
        return `${a}-${b}`;
      }
    }
  });
  console.log('result', result.join(','));

  //console.log('vlans', vlans);
}

const testList = [
  ['1-5', '2'],
  ['20-21,15,18,30,5-10', '15'],
  ['5,1-3', '10'],
];
testList.forEach((v) => {
  const [s1, s2] = v;
  start(s1, s2);
});
