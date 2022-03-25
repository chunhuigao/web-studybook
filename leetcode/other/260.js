//借助额外空间，保存数据出现的次数
var singleNumber = function (nums) {
  let obj = {}
  nums.forEach((item) => {
    if (obj[item] == undefined) {
      obj[item] = 1
    } else {
      delete obj[item]
    }
  })
  let result = Object.keys(obj).map((v) => Number(v))
  return result
  console.log(obj)
}
