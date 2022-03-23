```js
## 起初百度地图谷歌地图方法一致

// 谷歌地图
var googleMap = {
  show: function () {
    console.log('谷歌地图.');
  },
  start: function () {
    // 开始
  },
  off: function () {
    // 打开
  },
};

// 百度地图
var baiduMap = {
  show: function () {
    console.log('谷歌地图.');
  },
  start: function () {
    // 开始
  },
  off: function () {
    // 打开
  },
};

## 后来，他们渐行渐远
// 谷歌地图
var googleMap = {
  show: function () {
    console.log('谷歌地图.');
  },
  start: function () {
    // 开始
  },
  off: function () {
    // 打开
  },
};
// 百度,变了，原来start修改为init，off修改为open
var baiduMap = {
  show: function () {
    console.log('百度地图.');
  },
  init: function () {
    // 初始化
  },
  open: function () {
    // 打开
  },
};

## 但是 renderMap 逻辑已经写好，且极度复杂

var renderMap = function (map) {
  if (map.show instanceof Function) {
    map.start();
    // other
    // ajax
    // deal data


    // 各种个样的操作，逻辑很复杂
    map.show();
  }
};
renderMap(googleMap);
renderMap(baiduMap);

## 我不想重写 renderMap，所以我想到的适配器

// 写一个适配器
var baiduMapAdapter = {
  show: function () {
    baiduMap.display();
  },
  start: function () {
    baiduMap.init();
  },
  off: function () {
    baiduMap.open();
  },
};



## 最后 renderMap 又可以使用了
renderMap(googleMap);

// 只是，这里调用百度的时候要调用适配器
renderMap(baiduMapAdapter);



```

## 参考文档

- [JavaScript 设计模式*14*适配器模式](https://www.cnblogs.com/stinchan/p/7065823.html)
- [从 ES6 重新认识 JavaScript 设计模式(四): 适配器模式](https://segmentfault.com/a/1190000015482452)
- [JS-适配器模式](https://juejin.cn/post/7000983516770992158)
