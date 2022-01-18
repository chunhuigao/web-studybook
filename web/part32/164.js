var maximumGap = function (nums) {
  if (nums.length < 2) return 0
  nums.sort((a, b) => a - b)
  let max = 0
  for (let i = 1; i < nums.length; i++) {
    max = Math.max(max, nums[i] - nums[i - 1])
  }
  return max
}

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumGap = function (nums) {
  //按照题目要求小于2个元素返回0
  if (nums.length < 2) {
    return 0
  }

  //获取数组的极值，以便进行分桶
  let max = nums[0]
  let min = nums[0]
  for (let index = 1; index < nums.length; index++) {
    if (max < nums[index]) {
      max = nums[index]
    }
    if (min > nums[index]) {
      min = nums[index]
    }
  }

  //总共分n个桶，则每个桶的大小计算如下。桶的大小需要时整数，因为nums里的数都是整数
  const gap = Math.floor((max - min) / (nums.length - 1))
  //当极值一样则是一个数值的数组，当gap是0则无法分桶，直接返回差值
  if (max === min || !gap) return max - min

  //分n个桶，初始化每个桶为null
  const bucktets = new Array(nums.length).fill(null)

  const len = bucktets.length

  //找到每个桶的最大小值
  for (let index = 0; index < nums.length; index++) {
    const item = nums[index]
    //当前值和gap计算当前值应该分到第几号桶里
    const i = Math.floor(item / gap)

    //桶第一次放入数组，则进行初始化
    if (!bucktets[i]) {
      bucktets[i] = {
        min: item,
        max: item,
      }
    } else {
      //存在桶，则更新最大值或最小值
      if (item > bucktets[i].max) {
        bucktets[i].max = item
      }
      if (item < bucktets[i].max) {
        bucktets[i].min = item
      }
    }
  }

  //0是不可能出现的情况，因为0的情况在上面都return掉了
  let result = 0

  //对桶进行遍历，找到空桶前后的最大值和最小值的差值
  for (let index = 0; index < bucktets.length; index++) {
    if (!bucktets[index] && index - 1 >= 0) {
      //可能有多个空桶连在一起，并且空桶前面或后面没有有值的桶，要限制下left或right在有效范围内
      let left = index - 1
      let right = index + 1
      while (!bucktets[left] && left > 00) left--
      while (!bucktets[right] && right < bucktets.length) right++
      if (bucktets[left] && bucktets[right]) {
        const temp = bucktets[right].min - bucktets[left].max
        result = Math.max(temp, result)
      }
    }
  }

  return result === 0 ? gap : result
}
