function start(nums1, nums2, k) {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const result = [];
  const len1Index = Array(len1).fill(0);

  while (result.length < k) {
    let min = null;
    let minIndex = null;
    for (let i = 0; i < len1; i++) {
      const x = nums1[i];
      if (len1Index[i] >= len2) continue;
      const y = nums2[len1Index[i]];
      if (min === null) {
        minIndex = i;
        min = x + y;
      }
      if (x + y < min) {
        minIndex = i;
        min = x + y;
      }
    }

    result.push(nums1[minIndex] + nums2[len1Index[minIndex]]);
    len1Index[minIndex]++;
  }
  const total = result.reduce((a, b) => a + b);

  console.log(total);
}

const testList = [
  ['1 1 2', '1 2 3', '2'],
  ['1 7 11', '2 4 6', '3'],
  ['1 1 2', '1 2 3', '2'],
];
testList.forEach((v) => {
  const [s1, s2, s3] = v;

  start(
    s1.split(' ').map((v) => Number(v)),
    s2.split(' ').map((v) => Number(v)),
    Number(s3)
  );
});
