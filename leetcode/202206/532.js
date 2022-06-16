var findPairs = function(nums, k) {
    if(k < 0) return 0
  let set1 = new Set();
  let set2 = new Set();
  nums.forEach(item => {
    if (set1.has(item - k)) {
      set2.add(item - k);
    }
    if (set1.has(item + k)) {
      set2.add(item);
    }
    set1.add(item);
  });
  //console.log(set1, set2.size);
  return set2.size;
};
