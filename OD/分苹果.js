function cutApple(s) {
  const list = s.split(' ');
  const len = list.length;
  if (len === 1) {
    console.log(-1);
  } else {
    let c = 0;
    for (let i = 0; i < list.length; i++) {
      c = c ^ Number(list[i]);
    }
    if (c === 0) {
      list.sort((a, b) => Number(a) - Number(b));
      const t = list.reduce((a, b) => Number(a) + Number(b));
      console.log(t - list[0]);
    } else {
      console.log(-1);
    }
  }
}

var testList = ['3 5 6', '7258 6579 2602 6716 3050 3564 5396 1773', '12 5 9'];
//var testList = ['3 5 6', '12 5 9'];

testList.forEach((v) => {
  cutApple(v);
});
