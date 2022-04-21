const data = [
  { name: 'foo', age: 16, city: 'shanghai' },
  { name: 'bar', age: 24, city: 'hangzhou' },
  { name: 'fiz', age: 22, city: 'shanghai' },
  { name: 'baz', age: 19, city: 'hangzhou' },
];

function query(data) {
  const _this = this;
  _this.data = data;
  const list = [];
  _this.where = function (fn) {
    for (let i = 0; i < (_this.data || []).length; i++) {
      if (fn(_this.data[i])) {
        list.push(this.data[i]);
      }
    }
    _this.data = list;
    return _this;
  };
  _this.orderBy = function (key, desc) {
    const { data } = _this;
    _this.data = (data || []).sort((a, b) => {
      const va = desc ? a[key] : b[key];
      const vb = desc ? b[key] : a[key];
      return va > vb ? -1 : 1;
    });

    return _this;
  };
  _this.groupBy = function (key) {
    const { data } = _this;
    let object = {};
    for (let i = 0; i < (data || []).length; i++) {
      const k = data[i][key];
      if (object[k]) {
        object[k].push(data[i]);
      } else {
        object[k] = [data[i]];
      }
    }
    const list = [];
    Object.keys(object).forEach((k) => {
      list.push(object[k]);
    });
    _this.data = list;
    return _this;
  };
  _this.execute = function () {
    console.log(_this.data);
    return _this.data;
  };
  return this;
}

query(data)
  .where((item) => item.age > 18)
  .orderBy('name', false)
  .groupBy('city')
  .execute();

console.log('data', data);
console.log('data', aa);
