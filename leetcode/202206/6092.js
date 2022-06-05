var arrayChange = function (nums, operations) {
  const map = new Map();
  nums.forEach((v, i) => map.set(v, [v, i]));
  operations.forEach((v) => {
    const [a, b] = v;
    const list = map.get(a);
    list[0] = b;
    map.set(b, [b, list[1]]);
    map.delete(a);
  });
  map.forEach((v) => {
    nums[v[1]] = v[0];
  });
  return nums;
};
