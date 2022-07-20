function start(list, p) {
  const map = {};
  const set = new Set();
  for (let i = 0; i < list.length; i++) {
    const [a, b] = list[i];
    if (map[a]) {
      map[a].push(b);
    } else {
      map[a] = [b];
    }

    if (map[b]) {
      map[b].push(a);
    } else {
      map[b] = [a];
    }

    set.add(a);
    set.add(b);
  }
  const queue = [];
  queue.push(p);
  let result = -1;
  while (queue.length) {
    result++;
    const len = queue.length;
    let end = false;
    for (let i = 0; i < len; i++) {
      const f = queue.shift();
      set.delete(f);

      if (set.size === 0) {
        result = result * 2;
        end = true;
        break;
      }
      const array = map[f];

      if (array) {
        queue.push(...array);
      }
    }
    if (end) break;
  }
  console.log(result);
}

// var input = `1 4 2 1 2 3 2 4 3 4 3 5 4 5 2`;
var input1 = `1 2 1 4 2 3 2 4 3 4 3 5 4 5 2`;
var input2 = `2 1 1 4 2 4 2 3 3 4 3 5 4 5 2`;

const testList = [input1, input2];
testList.forEach((v) => {
  const list = v.split(' ');
  const path = [];
  for (let i = 0; i < list.length - 1; i += 2) {
    path.push([list[i], list[i + 1]]);
  }

  const p = list[list.length - 1];

  var aa = start(path, p);
});

//console.log(aa);
