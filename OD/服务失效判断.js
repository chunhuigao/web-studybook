var device = 'a1-a2,a5-a6,a2-a3';
var stop = 'a5,a2';

// var device = 'a1-a2';
// var stop = 'a2';

start(device, stop);
function start(device, stop) {
  const deviceList = device.split(',');
  const node = new Map();
  const map = {};

  for (let i = 0; i < deviceList.length; i++) {
    const [a, b] = deviceList[i].split('-');
    node.set(a, true);
    node.set(b, true);
    if (map[b]) {
      map[b].push(a);
    } else {
      map[b] = [a];
    }
  }

  const stopList = stop.split(',');
  for (let i = 0; i < stopList.length; i++) {
    dfs(stopList[i]);
  }
  function dfs(k) {
    if (!node.get(k)) return;
    node.set(k, false);
    const array = map[k] || [];
    for (let i = 0; i < array.length; i++) {
      const a = array[i];
      node.set(a, false);
      dfs(a);
    }
  }
  let result = [];
  node.forEach((v, k) => {
    v && result.push(k);
  });
  console.log(result.join(','));
}
