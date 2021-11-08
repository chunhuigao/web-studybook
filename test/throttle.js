// 定时器方案
function throttle(fn, wait) {
  var timer = null
  return function () {
    var context = this
    var args = arguments
    if (!timer) {
      timer = setTimeout(function () {
        fn.apply(context, args)
        timer = null
      }, wait)
    }
  }
}

function handle(v, i) {
  console.log(Math.random(), v, i)
}
const ss = throttle(handle, 1000)
setInterval(() => {
  ss('12212', 222)
}, 200)
