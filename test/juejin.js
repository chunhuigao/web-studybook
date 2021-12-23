var https = require('https')

const list = [
  'https://juejin.cn/post/7044521027333783582',
  'https://juejin.cn/post/7038964724234469412',
  'https://juejin.cn/post/7038555558181339143',
  'https://juejin.cn/post/7044521027333783582',
  'https://juejin.cn/post/7037107450977189919',
  'https://juejin.cn/post/7034883800580489229',
  'https://juejin.cn/post/7044521027333783582',
]

const timer = 20 * 1000
let num = 500
const start = () => {
  num--
  if (num < 0) return
  const idx = Math.floor(Math.random() * list.length)
  https.get(list[idx], function (res) {
    console.log('获取结束', idx)
  })
  setTimeout(start, timer)
}
start()
