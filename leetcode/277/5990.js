/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findLonely = function(nums) {
  const map = {};
  for(let i = 0 ; i < nums.length ; i++){
      const k = nums[i]
      map[k] = (map[k] || 0) +  1;
  }
  const result = []
  for(let i = 0 ; i < nums.length ; i++){
      const k = nums[i] 
      const k1 = nums[i] + 1;
       const k2 = nums[i] - 1;
      if(!map[k1] && !map[k2] && map[k] === 1){
          result.push(k)
      }
  }
  return result

};