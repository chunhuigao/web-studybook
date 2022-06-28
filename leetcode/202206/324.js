var wiggleSort = function(nums) {
    const sort = nums.sort((a, b) => a - b).slice();
    let j = nums.length - 1, i = j >> 1, k = 0;
    while (k < sort.length) {
        nums[k] = (k & 1) ? sort[j--] : sort[i--];
        k++;
    }
};