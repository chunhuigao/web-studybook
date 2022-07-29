var validSquare = function (p1, p2, p3, p4) {
  const set = new Set();
  const dots = [p1, p2, p3, p4];

  const dist = (a, b) => {
    const [x1, y1] = a;
    const [x2, y2] = b;
    return Math.sqrt(
      Math.pow(Math.abs(x2 - x1), 2) + Math.pow(Math.abs(y2 - y1), 2)
    );
  };

  const equal = (a, b) => {
    return a[0] === b[0] && a[1] === b[1];
  };

  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 4; j++) {
      if (i === j) continue;
      if (equal(dots[i], dots[j])) return false;
      set.add(dist(dots[i], dots[j]));
    }
  }

  return set.size === 2;
};
