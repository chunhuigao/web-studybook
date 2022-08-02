/**
 * @param {number} k
 */
 var MyCircularQueue = function(k) {
    this.list = [];
    this.k = k;

};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    const len = this.list.length;
    if(len === this.k) return false;
    this.list.push(value)
    return true;

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    const len = this.list.length;
    if(len === 0) return false;
    this.list.shift();
    return true

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
     const len = this.list.length;
     if(len === 0) return -1;
     return this.list[0]

};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    
    const len = this.list.length;
     if(len === 0) return -1;
     return this.list[len-1]
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.list.length === 0
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.list.length === this.k
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */