var RecentCounter = function () {
  this.queue = [];
};

RecentCounter.prototype.ping = function (t) {
  this.queue.push(t);
  const time = t - 3000;
  while (this.queue[0] < time) {
    this.queue.shift();
  }
  return this.queue.length;
};
