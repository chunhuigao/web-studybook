var largestTriangleArea = function (points) {
  let result = 0;
  let x1, x2, y1, y2;
  let l = points.length;
  for (let i = 0; i < l - 2; i++) {
    for (let j = i + 1; j < l - 1; j++) {
      x1 = points[j][0] - points[i][0];
      y1 = points[j][1] - points[i][1];
      for (let k = j + 1; k < l; k++) {
        x2 = points[k][0] - points[i][0];
        y2 = points[k][1] - points[i][1];
        //行列式计算面积
        result = Math.max(result, Math.abs(x1 * y2 - x2 * y1));
      }
    }
  }
  return result / 2;
};
