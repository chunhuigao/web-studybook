/**
 * @param {number} n
 * @param {string[]} logs
 * @return {number[]}
 */
var exclusiveTime = function (n, logs) {
  const len = logs.length;
  const result = Array(n).fill(0);
  const list = [];
  for (let i = 0; i < len; i++) {
    const s = logs[i];
    const [id, type, time] = s.split(':');
    if (type === 'start') {
      if (list.length === 0) {
        list.push(id);
      } else {
        const [_id, type, aftertime] = logs[i - 1].split(':');
        // 前一个是start
        if (type === 'start') {
          result[list[list.length - 1]] += time - aftertime;
        } else {
          //前一个是end
          result[list[list.length - 1]] += time - aftertime - 1;
        }
        list.push(id);
      }
    } else {
      //前一个是start
      const [_id, _type, _time] = logs[i - 1].split(':');

      if (_type === 'start') {
        result[list.pop()] += time - _time + 1;
      } else {
        result[list.pop()] += time - _time;
      }
    }
  }
  return result;
};
