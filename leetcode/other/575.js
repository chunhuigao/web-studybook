;`假设数组长度为x；糖果种类m
妹妹最多能获得x/2;
如果糖果种类m少于x/2；妹妹最多获取m种糖果；
所以`
var distributeCandies = function (candyType) {
  // 妹妹要获得最大种类树
  const map = {}
  candyType.forEach((k) => {
    if (map[k]) {
      map[k] += 1
    } else {
      map[k] = 1
    }
  })
  //有多少种水果
  const len = Object.keys(map).length
  // 糖果数量
  const num = candyType.length
  return Math.min(num / 2, len)
}
