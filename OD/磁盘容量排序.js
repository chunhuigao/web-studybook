function start(list) {
  list.sort((a, b) => {
    return helper(a) - helper(b);
  });
  console.log(list.join(' '));

  function helper(s) {
    let num = 0;
    let sum = 0;
    const t = s.toUpperCase();
    for (let i = 0; i < t.length; i++) {
      if (['M', 'G', 'T'].includes(t[i])) {
        if (t[i] === 'M') {
          sum += num;
        }
        if (t[i] === 'G') {
          sum += num * 1024;
        }
        if (t[i] === 'T') {
          sum += num * 1024 * 1024;
        }

        num = 0;
      } else {
        num = num * 10 + Number(t[i]);
      }
    }
    return sum;
  }
}

const testList = ['1T 20M 3G 10G6T 3M12G9M', '1G 2G 1024M', '2G4m 3M2G 1T'];
testList.forEach((v) => {
  start(v.split(' '));
});
