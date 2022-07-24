var distanceBetweenBusStops = function (distance, start, destination) {
  const total = distance.reduce((a, b) => a + b);
  let left = Math.min(start, destination);
  let right = Math.max(start, destination);
  let diff = 0;
  for (let i = left; i < right; i++) {
    diff += distance[i];
  }
  return Math.min(diff, total - diff);
};
