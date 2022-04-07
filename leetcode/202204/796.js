var rotateString = function (s, goal) {
  const m = s.length;
  const n = goal.length;
  if (m !== n) return false;
  const t = s + s;
  return t.indexOf(goal) > -1;
};
