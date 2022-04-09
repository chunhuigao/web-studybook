var reachingPoints = function (sx, sy, tx, ty) {
  while (tx > sx && ty > sy) {
    if (tx > ty) tx %= ty;
    else ty %= tx;
  }
  return (
    (tx == sx && ty >= sy && (ty - sy) % sx == 0) ||
    (ty == sy && tx >= sx && (tx - sx) % sy == 0)
  );
};
