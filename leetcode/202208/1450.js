var busyStudent = function (startTime, endTime, queryTime) {
  const len = startTime.length;
  let result = 0;
  for (let i = 0; i < len; i++) {
    const start = startTime[i];
    const end = endTime[i];
    if (start <= queryTime && end >= queryTime) {
      result++;
    }
  }
  return result;
};
