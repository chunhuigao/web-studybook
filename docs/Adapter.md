```js
//
// 谷歌地图是show执行地图渲染
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
// 百度是 display 执行地图渲染
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

// 百度地图的适配器
var baiduMapAdapter = {
  show: function () {
    baiduMap.display();
  },
  start: function () {
    baiduMap.init();
  },
};

// 我不管各地图本身调用什么方法执行地图渲染，我只用show这个方法执行地图渲染，其它交给适配器，这就是适配器模式；
var renderMap = function (map) {
  if (map.show instanceof Function) {
    map.start();
    // other
    // ajax
    // deal data
    map.show();
  }
};

renderMap(googleMap);
renderMap(baiduMapAdapter);
```

## 参考文档

- [JavaScript 设计模式*14*适配器模式](https://www.cnblogs.com/stinchan/p/7065823.html)
- [从 ES6 重新认识 JavaScript 设计模式(四): 适配器模式](https://segmentfault.com/a/1190000015482452)
- [JS-适配器模式](https://juejin.cn/post/7000983516770992158)
